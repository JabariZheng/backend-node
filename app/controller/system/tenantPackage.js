/*
 * @Author: ZhengJie
 * @Date: 2023-05-12 01:09:31
 * @Description: 管理后台-租户套餐
 */
const CommonControl = require("../common");

/**
 * @controller 管理后台-租户套餐
 */
class TenantPackageController extends CommonControl {

  /**
   * @summary 更新租户套餐
   * @router Put /admin-api/system/tenant-package/update
   */
  async update () { }


  /**
   * @summary 创建租户套餐
   * @router Post /admin-api/system/tenant-package/create
   */
  async create () { }


  /**
   * @summary 获得租户套餐分页
   * @router Get /admin-api/system/tenant-package/page
   */
  async page () { }


  /**
   * @summary 获得租户套餐
   * @router Get /admin-api/system/tenant-package/get
   */
  async get () { }


  /**
   * @summary 删除租户套餐
   * @router Delete /admin-api/system/tenant-package/delete
   */
  async delete () { }

}
module.exports = TenantPackageController