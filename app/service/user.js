/*
 * @Author: ZhengJie
 * @Date: 2023-04-13 01:25:53
 * @Description: 用户
 */
const { Service } = require("egg");
const svgCaptcha = require('svg-captcha');
class UserService extends Service {
  async getAll () {
    const allUser = await this.app.mysql.select('js_sys_user')
    return allUser
  }

  /**
   * 根据email查找用户
   */
  async getUserByEmail(email) {
    const res = await this.app.mysql.get('sys_user', { email: email })
    return res
  }

  /**
   * 生成验证码
   */
  async generateCaptchaImg () {
    // 生成svg验证码图
    const captcha = svgCaptcha.create({
      size: 4,                 	// 长度(显示几个字符)
      fontSize: 38,           	// 字体大小
      width: 80,              	// 宽度
      height: 38,            		// 高度
      background: '#c9cdcd',   	// 背景颜色
    });
    // 存入redis，Key为请求机器的IP
    this.ctx.service.redis.set(this.ctx.request.ip, captcha.text, 60)
    return captcha
  }

  /**
   * 注册用户
   * @param {object} data 用户数据
   */
  async registerAccount(data) {
    if (Object.keys(data).length === 0) return
    // 
    const res = await this.app.mysql.insert('sys_user', data)
    return res
  }
}

module.exports = UserService