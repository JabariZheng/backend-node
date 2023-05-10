/*
 * @Author: ZhengJie
 * @Date: 2023-05-11 00:39:18
 * @Description: 管理后台-用户
 */
module.exports = async app => {
  const { router, controller, config } = app;

  const baseApi = `${config.apiPrefix}/system/user`
  const list = {
    getUserProfile: 'get',
    updateUserProfile: 'put',
    updateUserPassword: 'put',
    updateUserStatus: 'put',
    updateUserAvatar: 'put',
    getPage: 'get',
    getDetail: 'get',
    delete: 'delete',
    create: 'post'
  }
  for (let item in list) {
    const type = list[item]
    await router[type](`${baseApi}/${item}`, controller.system.user[item])
  }
}