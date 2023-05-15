/*
 * @Author: ZhengJie
 * @Date: 2023-05-16 00:00:03
 * @Description: 管理后台-用户
 */
module.exports = {
  // 管理后台-添加用户
  "system_user_create": {
    nickname: { type: 'string', required: true, description: '用户昵称' },
    dept_id: { type: 'string', required: true, description: '归属部门' },
    mobile: { type: 'string', required: true, description: '手机号码', },
    email: { type: 'string', required: true, description: '用户邮箱', },
    username: { type: 'string', required: true, description: '用户名称' },
    password: { type: 'string', required: true, description: '用户密码' },
    sex: { type: 'number', description: '用户性别', },
    post_ids: { type: 'string', description: '岗位' },
    remark: { type: 'string', description: '备注' },
    status: { type: 'number', description: '帐号状态（0正常 1停用）', },
  }
}