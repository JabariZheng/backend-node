/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:03:28
 * @Description: 全局通用类
 */
const { Controller } = require("egg");

class CommonControl extends Controller {

  /**
   * 返回成功
   * @param {string | object} data 传回的数据
   * @param {number} code 状态码 -1，0
   * @param {string} status 状态
   * @param {string} msg 信息
   */
  successful (message = '成功', data = {}, code = 200, status = 'success', success = true) {
    this.ctx.body = {
      data,
      code,
      status,
      message,
      success
    }
    this.ctx.status = 200
  }

  failure (message = '', code = 400, status = 'error', data = null, success = false) {
    this.ctx.body = {
      data,
      code,
      status,
      message,
      success
    }
    this.ctx.status = 200
  }

  errorReport (apiName, error) {
    this.ctx.body = {
      data: {},
      code: 400,
      status: 'error',
      message: `${apiName} error: ${error}`,
      success: false,
    }
    this.ctx.status = 200
  }
}

module.exports = CommonControl