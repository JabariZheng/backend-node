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
      // 查询用户
      const queryUserData = await ctx.service.user.getUserByEmail(body.email)
      if (!queryUserData) {
        this.failure('该账号无效')
        return
      }
      // 校验密码
      if (body.password !== queryUserData.password) {
        this.failure('密码错误')
        return
      }
      // 替换redis中的登录状态，有效期5分钟
      await ctx.service.redis.set(ip, 1, config.authExpirationDate)
      // 成功返回
      this.successful(queryUserData)
    } else {
      this.failure('验证码错误')
    }
  }

  /**
   * @summary 登出
   * @router Post /admin-api/system/auth/logout
   */
  async logout () {
    await this.service.redis.del(this.ctx.request.ip)
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