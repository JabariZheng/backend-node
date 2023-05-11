/*
 * @Author: ZhengJie
 * @Date: 2023-05-12 01:18:49
 * @Description: 管理后台-API
 */
'use strict';

const CommonControl = require("../common");

/**
 * @controller 管理后台-API
 */
class APIController extends CommonControl {
  /**
   * @summary 更新API
   * @router Put /admin-api/system/api/update
   */
  async update () { }

  /**
   * @summary 创建API
   * @router Post /admin-api/system/api/create
   */
  async create () { }

  /**
   * @summary 获得API分页
   * @router Get /admin-api/system/api/page
   */
  async page () { }

  /**
   * @summary 获得API
   * @router Get /admin-api/system/api/get
   */
  async get () { }

  /**
   * @summary 删除API
   * @router Delete /admin-api/system/api/delete
   */
  async delete () { }

}
module.exports = APIController;