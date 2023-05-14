/*
 * @Author: ZhengJie
 * @Date: 2023-05-11 23:26:46
 * @Description: 管理后台-租户
 */
'use strict';

const CommonControl = require("../common");

/**
 * @controller 管理后台-租户
 */
class TenantController extends CommonControl {

  /**
   * @summary 更新租户
   * @router Put /admin-api/system/tenant/update
   * @request query id 目标id
   */
  async update () { }

  /**
   * @summary 创建租户
   * @router Post /admin-api/system/tenant/create
   * @request body system.tenant.create
   */
  async create () { }

  /**
   * @summary 获得租户分页
   * @router Get /admin-api/system/tenant/page
   */
  async page () { }

  /**
   * @summary 获得租户
   * @router Get /admin-api/system/tenant/get
   */
  async get () { }

  /**
   * @summary 使用租户名，获得租户编号
   * @router Get /admin-api/system/tenant/getIdByName
   */
  async getIdByName () { }

  /**
   * @summary 删除租户
   * @router Delete /admin-api/system/tenant/delete
   */
  async delete () { }

}
module.exports = TenantController;