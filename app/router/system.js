/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:02:09
 * @Description: controller.system
 */
module.exports = app => {
  const { router, controller, config } = app;
  router.get(`${config.apiPrefix}/system/user/getCaptchaImg`, controller.system.user.getCaptchaImg)
  router.post(`${config.apiPrefix}/system/user/login`, controller.system.user.login)
  router.post(`${config.apiPrefix}/system/user/register`, controller.system.user.register)
}