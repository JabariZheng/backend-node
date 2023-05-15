/*
 * @Author: ZhengJie
 * @Date: 2023-05-15 23:51:52
 * @Description: 管理后台-租户
 */
'use strict';

const utils = require('../util');

const Service = require('egg').Service;

class TenantService extends Service {

  /**
   * @summary 创建
   */
  async create(data) {
    try {
      let saveData = {
        ...data,
        id: utils.snowflakeID.NextId()
      }
      await this.app.mysql.insert('system_tenant', saveData)
    } catch (error) {
      console.log('error', error)
    }
  }
}

module.exports = TenantService;
