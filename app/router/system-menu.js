/*
 * @Author: ZhengJie
 * @Date: 2023-05-11 23:12:05
 * @Description: 管理后台-菜单
 */
module.exports = async app => {
    const { router, controller, config } = app;

    const baseApi = `${config.apiPrefix}/system/menu`
    const list = {
        updateMenu: 'put',
        createMenu: 'post',
        getMenuList: 'get',
        getMenuInfo: 'get',
        deleteMenu: 'delete'
    }
    for (let item in list) {
        const type = list[item]
        await router[type](`${baseApi}/${item}`, controller.system.menu[item])
    }
}