/*
 * @Author: ZhengJie
 * @Date: 2023-05-15 00:09:24
 * @Description: 管理后台-字典数据
 */
const CommonControl = require("../common");

/**
 * @controller 管理后台-字典数据
 */
class DictDataController extends CommonControl {

  /**
   * @summary 修改字典数据
   * @router Put /admin-api/system/dict-data/update
   */
  async update () { }

  /**
   * @summary 新增字典数据
   * @router Post /admin-api/system/dict-data/create
   */
  async create () { }

  /**
   * @summary 获得字典类型的分页
   * @router Get /admin-api/system/dict-data/page
   */
  async page () { }

  /**
   * @summary 获得全部字典数据列
   * @router Get /admin-api/system/dict-data/listAllSimple
   */
  async listAllSimple () { }

  /**
   * @summary /查询字典数据详细
   * @router Get /admin-api/system/dict-data/get
   */
  async get () { }

  /**
   * @summary 删除字典数据
   * @router Delete /admin-api/system/dict-data/delete
   */
  async delete () { }
}
module.exports = DictDataController