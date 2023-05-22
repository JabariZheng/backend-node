/*
 * @Author: ZhengJie
 * @Date: 2023-05-10 22:42:16
 * @Description: 认证相关
 */
'use strict';

const CommonControl = require("../common");

/**
 * @controller 管理后台-认证
 */
class AuthController extends CommonControl {
  /**
   * @summary 登录
   * @router Post /admin-api/system/auth/login
   * @request body system.auth.login
   */
  async login () {
    const { ctx, config } = this;
    const { body, ip } = ctx.request

    if (!body.tenant_id) {
      this.failure('请输入租户编码')
      return
    }
    if (!body.username) {
      this.failure('请输入用户名')
      return
    }
    if (!body.password) {
      this.failure('请输入密码')
      return
    }
    if (!body.validCode) {
      this.failure('请输入验证码')
      return
    }

    // 从redis中取code
    let sessionVerifyCode = await ctx.service.redis.get(ip)
    if (!sessionVerifyCode) {
      this.failure('请刷新验证码！')
      return
    }
    // 校验验证码
    if (body.validCode.toUpperCase() === sessionVerifyCode.toUpperCase()) {
      // 删除验证码缓存
      await ctx.service.redis.del(ip)
      // 查询用户
      const getUser = await ctx.service.user.getUser({ username: body.username })
      if (!getUser) {
        this.failure('该账号不存在')
        return
      }
      // 校验密码
      if (body.password !== getUser.password) {
        console.log(body.password, getUser.password)
        this.failure('密码错误')
        return
      }
      // 生成token
      const token = await ctx.service.auth.generateJWTToken(getUser.id)
      // 记录登录状态
      await ctx.service.redis.set(getUser.id, JSON.stringify(getUser), config.authExpirationDate)
      // 成功返回
      const { id, username, nickname, remark, dept_id, post_ids, email, mobile, sex, avatar, status, tenant_id } = getUser
      this.successful('操作成功', {
        userInfo: {
          id, username, nickname, remark, dept_id, post_ids, email, mobile, sex, avatar, status, tenant_id,
          deleted: Number(getUser.deleted)
        },
        token: token
      })
    } else {
      this.failure('验证码错误')
    }
  }

  /**
   * @summary 登出
   * @router Post /admin-api/system/auth/logout
   * @request header string authorization token值
   */
  async logout () {
    const { ctx } = this;
    const { header } = ctx.request
    const uid = await ctx.service.auth.getLoginID(header.authorization)
    // 清空信息
    await ctx.service.redis.del(uid)
    this.successful('已登出')
  }

  /**
   * @summary 获取验证码
   * @router Get /admin-api/system/auth/getCaptchaImg
   */
  async getCaptchaImg () {
    const { ctx, service } = this;
    let captcha = await service.user.generateCaptchaImg();
    ctx.response.type = 'image/svg+xml';
    ctx.body = captcha.data;
  }

  /**
   * @summary 发送手机验证码
   * @router Post /admin-api/system/auth/sendSMSCode
   */
  async sendSMSCode () {
    this.successful('发送成功')
  }
}
module.exports = AuthController