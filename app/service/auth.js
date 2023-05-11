/*
 * @Author: ZhengJie
 * @Date: 2023-05-12 00:57:21
 * @Description: 管理后台-认证
 */
const Service = require('egg').Service;

class AuthService extends Service {
  /**
   * 生成jwt token
   */
  async generateJWTToken (uid) {
    return this.app.jwt.sign({
      data: { uid: uid }
    }, this.app.config.jwt.secret)
  }
}
module.exports = AuthService