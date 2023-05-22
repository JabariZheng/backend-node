/*
 * @Author: ZhengJie
 * @Date: 2023-05-14 23:41:21
 * @Description: 管理后台-字典类型
 */
const utils = require("../../util");
const CommonControl = require("../common");

/**
 * @controller 管理后台-字典类型
 */
class DictTypeController extends CommonControl {

  /**
   * @summary 修改字典类型
   * @router Put /admin-api/system/dict-type/update
   * @request body system.dictType.update
   */
  async update () {
    const { ctx } = this;
    const { body, header } = ctx.request
    if (!body.id) {
      this.failure('请检查id')
      return
    }
    if (!body.name) {
      this.failure('请检查名称')
      return
    }
    if (!body.type) {
      this.failure('请检查类型')
      return
    }
    if (body.status === null || body.status === undefined) {
      this.failure('请检查状态')
      return
    }
    try {
      // 取当前操作账号信息
      // const currentUid = await ctx.service.auth.getLoginID(header.authorization)
      // const getUserInfo = await ctx.service.redis.get(currentUid)
      let saveData = {
        ...body,
        // updater: getUserInfo.name,
        // update_time: utils.formatDate()
      }
      const data = await ctx.service.dictType.update(saveData)
      this.successful('操作成功', data)
    } catch (error) {
      this.failure(error)
    }

  }

  /**
   * @summary 创建字典类型
   * @router Post /admin-api/system/dict-type/create
   * @request body system.dictType.create
   */
  async create () {
    const { ctx } = this;
    const { body } = ctx.request
    try {
      let bodyData = {
        ...body
      }
      if (!bodyData.name) {
        this.errorReport('请输入字典名称')
        return
      }
      if (!bodyData.type) {
        this.errorReport('请输入字典类型')
        return
      }
      if (bodyData.status === undefined || bodyData.status === null || isNaN(parseInt(bodyData.status))) {
        bodyData.status = 0
      }
      const data = await ctx.service.dictType.create(body)
      this.successful('操作成功', data)
    } catch (error) {
      console.log('error', error)
    }
  }

  /**
   * @summary 获得字典类型的分页列表
   * @router Get /admin-api/system/dict-type/page
   * @request query 页码 pageNo
   * @request query 条数 pageSize
   */
  async page () {
    const { ctx } = this;
    const { query } = ctx.request
    let queryParams = {
      pageNo: query.pageNo || 1,
      pageSize: query.pageSize || 10
    }
    try {
      const data = await ctx.service.dictType.page(queryParams)
      this.successful('操作成功', {
        list: data,
        pageNo: queryParams.pageNo,
        pageSize: queryParams.pageSize
      })
    } catch (error) {
      this.failure(error)
    }
  }

  /**
   * @summary 获得全部字典类型列表
   * @router Get /admin-api/system/dict-type/listAllSimple
   */
  async listAllSimple () {
    const { ctx } = this;
    try {
      const data = await ctx.service.dictType.page({
        pageNo: 1,
        pageSize: 9999999
      })
      this.successful('操作成功', data)
    } catch (error) {
      this.failure(error)
    }
  }


  /**
   * @summary 查询字典类型详细
   * @router Get /admin-api/system/dict-type/get
   * @request query number id ID
   */
  async get () {
    const { ctx } = this;
    const { query } = ctx.request
    if (!query.id) {
      this.successful('操作成功', null)
    }
    try {
      const data = await ctx.service.dictType.get(query.id)
      this.successful('操作成功', {
        ...data
      })
    } catch (error) {
      console.log('error', error)
      this.failure(error)
    }
  }


  /**
   * @summary 导出数据类型
   * @router Get /admin-api/system/dict-type/export
   */
  async export () { }


  /**
   * @summary 删除字典类型
   * @router Delete /admin-api/system/dict-type/delete
   * @request query number id ID
   */
  async delete () {
    const { ctx } = this;
    const { query } = ctx.request
    if (!query.id) {
      this.successful('操作成功')
      return
    }
    try {
      const isSuccess = await ctx.service.dictType.delete(query.id)
      if (isSuccess) {
        this.successful('操作成功')
      } else {
        this.failure('失败')
      }
    } catch (error) {
      console.log('error', error)
      this.failure(error)
    }
  }

}
module.exports = DictTypeController