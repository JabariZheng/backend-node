/*
 * @Author: ZhengJie
 * @Date: 2023-05-11 23:31:02
 * @Description: 管理后台-租户
 */
module.exports = async app => {
  const { router, controller, config } = app;

  const baseApi = `${config.apiPrefix}/system/tenant`
  const list = {
    update: 'put',
    create: 'post',
    page: 'get',
    get: 'get',
    getIdByName: 'get',
    delete: 'delete'
  }
  for (let item in list) {
    const type = list[item]
    await router[type](`${baseApi}/${item}`, controller.system.tenant[item])
  }
}