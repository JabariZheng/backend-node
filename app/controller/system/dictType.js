/*
 * @Author: ZhengJie
 * @Date: 2023-05-14 23:41:21
 * @Description: 管理后台-字典类型
 */
const CommonControl = require("../common");

/**
 * @controller 管理后台-字典类型
 */
class DictTypeController extends CommonControl {

  /**
   * @summary 修改字典类型
   * @router Put /admin-api/system/dict-type/update
   */
  async update () { }

  /**
   * @summary 创建字典类型
   * @router Post /admin-api/system/dict-type/create
   * @request body system.dictType.create
   */
  async create () {
    const { ctx } = this;
    const { body } = ctx.request

    try {
      await ctx.service.dictType.create(body)
      this.successful('操作成功')
    } catch (error) {
      console.log('error', error)
    }
  }

  /**
   * @summary /获得字典类型的分页列表
   * @router Get /admin-api/system/dict-type/page
   */
  async page () { }

  /**
   * @summary 获得全部字典类型列表
   * @router Get /admin-api/system/dict-type/listAllSimple
   */
  async listAllSimple () { }


  /**
   * @summary /查询字典类型详细
   * @router Get /admin-api/system/dict-type/get
   */
  async get () { }


  /**
   * @summary 导出数据类型
   * @router Get /admin-api/system/dict-type/export
   */
  async export () { }


  /**
   * @summary 删除字典类型
   * @router Delete /admin-api/system/dict-type/delete
   */
  async delete () { }

}
module.exports = DictTypeController