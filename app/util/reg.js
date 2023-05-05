/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:07:06
 * @Description: 正则
 */
class RegCheck {
  /**
  * 验证手机号
  */
  phone (value) {
    return /^1\d{10}$/.test(value)
  }

  /**
   * 验证邮箱
   */
  email (value) {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
  }
}

module.exports = RegCheck