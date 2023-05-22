/*
 * @Author: ZhengJie
 * @Date: 2023-05-15 00:23:42
 * @Description: 管理后台-字典类型
 */
'use strict';

const utils = require('../util');

const Service = require('egg').Service;

class DictTypeService extends Service {
  /**
   * @summary 创建字典类型
   */
  async create (data) {
    let saveData = {
      ...data,
      id: utils.snowflakeID.NextId(),
      creator: 'admin',
      create_time: utils.formatDate(),
      updater: 'admin',
      update_time: utils.formatDate(),
    }
    await this.app.mysql.insert('system_dict_type', saveData)
    return saveData
  }

  /**
   * @summary 获得字典类型的分页列表
   */
  async page (query) {
    const res = await this.app.mysql.select('system_dict_type', {})
    const transRes = JSON.parse(JSON.stringify(res))
    // 筛选
    return transRes.slice((query.pageNo - 1) * query.pageSize, query.pageNo * query.pageSize)
  }

  /**
   * @summary 查询字典类型详细
   */
  async get (id) {
    const res = await this.app.mysql.get('system_dict_type', { id: id })
    if (res) {
      const transRes = {
        ...res,
        create_time: utils.formatDate(+new Date(res.create_time)),
        update_time: utils.formatDate(+new Date(res.update_time)),
        deleted_time: utils.formatDate(+new Date(res.deleted_time))
      }
      return JSON.parse(JSON.stringify(transRes))
    } else {
      return null
    }
  }

  /**
   * @summary 删除  
   */
  async delete (id) {
    const res = await this.app.mysql.beginTransactionScope(async (conn) => {
      await conn.delete('system_dict_data', { dict_type: id })
      await conn.delete('system_dict_type', { id: id })
      return { success: true }
    }, this.ctx)
    if (res.success) {
      return true
    } else {
      return false
    }
  }

  /**
   * 更新 
   */
  async update(data) {
    const res = await this.app.mysql.update('system_dict_type', data)
    return res
  }
}

module.exports = DictTypeService;