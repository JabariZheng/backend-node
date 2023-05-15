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
   * @router Post /admin-api/system/dict-type/create
   */
  async create(data) {
    let saveData = {
      ...data,
      id: utils.snowflakeID.NextId(),
      creator: 'admin',
      create_time: utils.formatDate(+ new Date()),
      updater: 'admin',
      update_time: utils.formatDate(+ new Date()),
    }
    const res = await this.app.mysql.insert('system_dict_type', saveData)
    return res
  }

}

module.exports = DictTypeService;