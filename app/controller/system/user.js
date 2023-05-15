/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:02:36
 * @Description: system.user
 */
'use strict';

const utils = require("../../util");
const CommonControl = require("../common");

/**
 * @controller 管理后台-用户
 */
class UserController extends CommonControl {
  /**
   * @summary 获取用户信息
   * @router Get /admin-api/system/user/getUserProfile
   */
  async getUserProfile () { }

  /**
   * @summary 更新用户信息
   * @router Put /admin-api/system/user/updateUserProfile
   * @request body system.user.updateUserProfile
   */
  async updateUserProfile () { }

  /**
   * @summary 更新用户密码
   * @router Put /admin-api/system/user/updateUserPassword
   * @request body system.user.updateUserPassword
   */
  async updateUserPassword () { }

  /**
   * @summary 更新用户状态
   * @router Put /admin-api/system/user/updateUserStatus
   * @request body system.user.updateUserStatus
   */
  async updateUserStatus () { }

  /**
   * @summary 更新用户头像
   * @router Put /admin-api/system/user/updateUserAvatar
   * @request body system.user.updateUserAvatar
   */
  async updateUserAvatar () { }

  /**
   * @summary 获得用户分页列表
   * @router Get /admin-api/system/user/getUserPage
   */
  async getUserPage () { }

  /**
   * @summary 获得用户详情
   * @router Get /admin-api/system/user/getUserDetail
   * @request header string authorization token值
   */
  async getUserDetail () {
    const { ctx } = this
    let getCache = await ctx.service.redis.get(ctx.uid)
    const { id, username, nickname, remark, dept_id, post_ids, email, mobile, sex, avatar, status, tenant_id, deleted } = JSON.parse(getCache)
    this.successful('操作成功', {
      userInfo: {
        id, username, nickname, remark, dept_id, post_ids, email, mobile, sex, avatar, status, tenant_id,
        deleted: Number(deleted)
      }
    })
  }

  /**
   * @summary 删除用户
   * @router Delete /admin-api/system/user/deleteUser
   */
  async deleteUser () { }

  /**
   * @summary 添加用户
   * @router Post /admin-api/system/user/create
   * @request body system_user_create
   */
  async create () {
    const { ctx } = this
    const { body } = ctx.request

    const validList = [
      { key: 'username', msg: '用户账号' },
      { key: 'password', msg: '用户密码' },
      { key: 'nickname', msg: '用户昵称' },
      { key: 'status', msg: '用户状态' },
    ]
    let getFind = validList.find(item => body[item.key] === null || body[item.key] === undefined)
    if (getFind) {
      this.failure('请检查' + getFind.msg)
      return
    }
    try {
      // 检查是否存在
      const getUser = await ctx.service.user.getUser(body)
      if (!getUser) {
        this.failure('该账号已存在')
        return
      }
      let saveData = {
        ...body,
        id: utils.snowflakeID.NextId(),
        create_time: utils.formatDate(),
        update_time: utils.formatDate(),
        deleted: 0
      }
      await ctx.service.user.saveUser(saveData)
      this.successful('操作成功')
    } catch (error) {
      console.log('system.user.create error', error)
    }
  }
}

module.exports = UserController;
