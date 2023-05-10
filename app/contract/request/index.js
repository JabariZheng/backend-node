/*
 * @Author: ZhengJie
 * @Date: 2023-05-11 00:13:29
 * @Description: contract
 */
module.exports = {
  // 管理后台-认证-登录
  'system.auth.login': {
    tenant_id: { type: 'string', required: true, description: '租户编码' },
    username: { type: 'string', required: true, description: '用户名' },
    password: { type: 'string', required: true, description: '密码' },
    validCode: { type: 'string', required: true, description: '验证码' },
  },
  // 管理后台-用户-更新用户信息
  'system.user.updateUserProfile': {
    username: { type: 'string', description: '用户账号' },
    nickname: { type: 'string', description: '用户昵称' },
    remark: { type: 'string', description: '备注' },
    dept_id: { type: 'number', description: '部门ID' },
    post_ids: { type: 'string', description: '岗位编号数组' },
    email: { type: 'string', description: '用户邮箱' },
    mobile: { type: 'string', description: '手机号码' },
    sex: { type: 'number', description: '用户性别' },
    avatar: { type: 'string', description: '头像地址' },
    status: { type: 'number', description: '帐号状态（0正常 1停用）' },
  },
  // 管理后台-用户-更新用户密码
  'system.user.updateUserPassword': {
    password: { type: 'string', description: '密码' }
  },
  // 管理后台-用户-更新用户头像
  'system.user.updateUserAvatar': {
    img: { type: 'string', description: '图片Base64' }
  },
  // 管理后台-用户-更新用户状态
  'system.user.updateUserStatus': {
    status: { type: 'number', description: '帐号状态（0正常 1停用）' },
  },
}