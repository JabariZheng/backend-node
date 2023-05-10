/*
 * @Author: ZhengJie
 * @Date: 2023-05-10 23:54:10
 * @Description: 管理后台-认证
 */
module.exports = async app => {
  const { router, controller, config } = app;

  const baseApi = `${config.apiPrefix}/system/auth`
  const list = {
    'login': 'get',
    'logout': 'post',
    'getCaptchaImg': 'get',
    'sendSMSCode': 'post',
  }
  for (let item in list) {
    const type = list[item]
    await router[type](`${baseApi}/${item}`, controller.system.auth[item])
  }
}