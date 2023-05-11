/*
 * @Author: ZhengJie
 * @Date: 2023-05-11 23:12:42
 * @Description: 管理后台-菜单
 */
'use strict';

const CommonControl = require("../common");

/**
 * @controller 管理后台-菜单
 */
class MenuController extends CommonControl {

  /**
   * @summary 修改菜单
   * @router Put /admin-api/system/menu/updateMenu
   */
  async updateMenu () { }

  /**
   * @summary 创建菜单
   * @router Post /admin-api/system/menu/create
   */
  async createMenu () { }

  /**
   * @summary 获取菜单列表
   * @router Get /admin-api/system/menu/getMenuList
   */
  async getMenuList () { }

  /**
   * @summary 获取菜单信息
   * @router Get /admin-api/system/menu/getMenuInfo
   */
  async getMenuInfo () { }

  /**
   * @summary 删除菜单
   * @router Delete /admin-api/system/menu/delete
   */
  async deleteMenu () { }

}
module.exports = MenuController