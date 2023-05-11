/*
 * @Author: ZhengJie
 * @Date: 2023-05-12 01:20:02
 * @Description: 管理后台-API
 */
module.exports = async app => {
  const { router, controller, config } = app;

  const baseApi = `${config.apiPrefix}/system/api`
  const list = {
    update: 'put',
    create: 'post',
    page: 'get',
    get: 'get',
    delete: 'delete'
  }
  for (let item in list) {
    const type = list[item]
    await router[type](`${baseApi}/${item}`, controller.system.api[item])
  }
}