/*
 * @Author: ZhengJie
 * @Date: 2023-05-16 00:36:52
 * @Description: 管理后台-认证
 */
module.exports = {
  'system.auth.login': {
    tenant_id: { type: 'string', required: true, description: '租户编码' },
    username: { type: 'string', required: true, description: '用户名' },
    password: { type: 'string', required: true, description: '密码' },
    validCode: { type: 'string', required: true, description: '验证码' },
  },
}