/*
 * @Author: ZhengJie
 * @Date: 2023-05-11 23:44:07
 * @Description: 管理后台-角色
 */
const CommonControl = require("../common");

/**
 * @controller 管理后台-角色
 */
class RoleController extends CommonControl {

  /**
   * @summary 修改角色
   * @router Put /admin-api/system/role/update
   */
  async update () { }

  /**
   * @summary 修改角色状态
   * @router Put /admin-api/system/role/updateStatus
   */
  async updateStatus () { }

  /**
   * @summary 创建角色
   * @router Post /admin-api/system/role/create
   */
  async create () { }

  /**
   * @summary 获得角色分页
   * @router Get /admin-api/system/role/page
   */
  async page () { }

  /**
   * @summary 获得角色信息
   * @router Get /admin-api/system/role/get
   */
  async get () { }

  /**
   * @summary 删除角色
   * @router Delete /admin-api/system/role/delete
   */
  async delete () { }
}
module.exports = RoleController