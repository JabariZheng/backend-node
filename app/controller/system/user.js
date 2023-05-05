/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:02:36
 * @Description: system.user
 */

'use strict';

const utils = require('@/util');
const CommonControl = require('@/controller/common/index.js');

/**
 * @controller system.user 用户
 */
class UserController extends CommonControl {

  /**
   * @summary 登录
   * @router Post /admin-api/system/user/login
   */
  async login () {
    const { ctx } = this;

    const { body, ip } = ctx.request
    if (!body.email) {
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
    const getData = await ctx.service.user.getUserByEmail(body.email)
    if (!getData) {
      this.failure('该账号无效')
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
      await ctx.service.redis.del(ip)
      // 校验密码
      if (body.password !== getData.password) {
        this.failure('密码错误')
        return
      }
      this.successful(getData)
    } else {
      this.failure('验证码错误')
    }
  }

  /**
   * @summary 注册
   * @router Post /admin-api/system/user/register
   */
  async register () {
    const { ctx } = this;
    let bodyParams = ctx.request.body
    // 校验
    if (!bodyParams.email) {
      this.failure('请输入邮箱')
      return
    } else {
      if (!utils.reg.email(bodyParams.email)) {
        console.log('1');
        this.failure('邮箱格式不正确')
        return
      }
    }
    if (!bodyParams.password) {
      this.failure('请输入密码')
      return
    }
    if (!bodyParams.phone) {
      this.failure('请输入手机号码')
      return
    } else {
      if (!utils.reg.phone(bodyParams.phone)) {
        this.failure('请检查手机号码')
        return
      }
    }

    let _nowDate = utils.formatDate(+new Date())
    const { email, password, phone, passwordLevel } = bodyParams
    let saveData = {
      email, password, phone,
      pwd_update_date: _nowDate,
      pwd_security_level: passwordLevel,
      create_by: '',
      create_date: _nowDate,
      update_by: '',
      update_date: _nowDate,
      corp_code: 'admin',
      corp_name: 'admin'
    }
    // 生成user_code TODO
    saveData.user_code = _nowDate
    try {
      await ctx.service.user.registerAccount(saveData)
      this.successful(saveData)
    } catch (error) {
      this.errorReport('registerAccount', error)
    }
  }


  /**
   * @summary 获取验证码
   * @router Get /admin-api/system/user/getCaptchaImg
   */
  async getCaptchaImg () {
    const { ctx, service } = this;
    let captcha = await service.user.generateCaptchaImg();
    ctx.response.type = 'image/svg+xml';
    ctx.body = captcha.data;
  }
}

module.exports = UserController;
