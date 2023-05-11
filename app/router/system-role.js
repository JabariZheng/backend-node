/*
 * @Author: ZhengJie
 * @Date: 2023-05-11 23:44:07
 * @Description: 管理后台-角色
 */
module.exports = async app => {
  const { router, controller, config } = app;

  const baseApi = `${config.apiPrefix}/system/role`
  const list = {
    update: 'put',
    updateStatus: 'put',
    create: 'post',
    page: 'get',
    get: 'get',
    delete: 'delete',
  }
  for (let item in list) {
    const type = list[item]
    await router[type](`${baseApi}/${item}`, controller.system.role[item])
  }
}