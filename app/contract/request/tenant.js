/*
 * @Author: ZhengJie
 * @Date: 2023-05-13 23:23:07
 * @Description: 管理后台-租户
 */
module.exports = {
  // 创建租户
  "system.tenant.create": {
    name: { type: 'string', description: '租户名称' },
    contact_user_id: { type: 'number', description: '联系人id' },
    contact_name: { type: 'string', description: '联系人姓名' },
    contact_mobile: { type: 'string', description: '联系人手机' },
    status: { type: 'number', description: '租户状态' },
    domain: { type: 'string', description: '绑定域名' },
    package_id: { type: 'number', description: '租户套餐id' },
    expire_time: { type: 'number', description: '过期时间' },
    account_count: { type: 'number', description: '账号数量' },
    creator: { type: 'string', description: '创建着' },
    create_time: { type: 'number', description: '创建时间' },
    updater: { type: 'string', description: '更新者' },
    update_time: { type: 'number', description: '更新时间' },
    deleted: { type: 'number', description: '是否删除' }
  }
}
