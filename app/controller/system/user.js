/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:02:36
 * @Description: system.user
 */

'use strict';

const utils = require('@/util');
const CommonControl = require('@/controller/common/index.js');

/**
 * @controller 管理后台-用户
 */
class UserController extends CommonControl {
  /**
   * @summary 获取用户信息
   * @router Get /admin-api/system/user/getUserProfile
   */
  async getUserProfile() {}

  /**
   * @summary 更新用户信息
   * @router Put /admin-api/system/user/updateUserProfile
   * @request body system.user.updateUserProfile
   */
  async updateUserProfile() {}

  /**
   * @summary 更新用户密码
   * @router Put /admin-api/system/user/updateUserPassword
   * @request body system.user.updateUserPassword
   */
  async updateUserPassword() {}

  /**
   * @summary 更新用户状态
   * @router Put /admin-api/system/user/updateUserStatus
   * @request body system.user.updateUserStatus
   */
  async updateUserStatus() {}

  /**
   * @summary 更新用户头像
   * @router Put /admin-api/system/user/updateUserAvatar
   * @request body system.user.updateUserAvatar
   */
  async updateUserAvatar() {}

  /**
   * @summary 获得用户分页列表
   * @router Get /admin-api/system/user/getPage
   */
  async getPage(){}

  /**
   * @summary 获得用户详情
   * @router Get /admin-api/system/user/getDetail
   */
  async getDetail(){}

  /**
   * @summary 删除用户
   * @router Delete /admin-api/system/user/delete
   */
  async delete(){}

  /**
   * @summary 删除用户
   * @router Post /admin-api/system/user/create
   */
  async create(){}
}

module.exports = UserController;
