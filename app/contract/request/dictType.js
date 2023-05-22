/*
 * @Author: ZhengJie
 * @Date: 2023-05-15 00:30:24
 * @Description: 管理后台-字段类型
 */
module.exports = {
  // 管理后台-字段类型
  "system.dictType.create": {
    name: { type: 'string', description: '字典名称' },
    type: { type: 'string', description: '字典类型' },
    status: { type: 'number', description: '状态' },
    remark: { type: 'string', description: '备注' },
  },
  "system.dictType.update": {
    id: { type: 'string', description: 'ID' },
    name: { type: 'string', description: '字典名称' },
    type: { type: 'string', description: '字典类型' },
    status: { type: 'number', description: '状态' },
    remark: { type: 'string', description: '备注' },
  }
}