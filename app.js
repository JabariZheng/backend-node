/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 22:49:32
 * @Description: app.js
 */
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad () {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
    require('module-alias/register')
  }

  configDidLoad () {
    // Config, plugin files have been loaded.
  }

  async didLoad () {
    // All files have loaded, start plugin here.
  }

  async willReady () {
    console.log('willReady')
    // All plugins have started, can do some thing before app ready
    
    // 请求用户表，保存所有的user_code
    // const userRes = await this.app.mysql.select('sys_user')
    // console.log('userRes', userRes)
    // this.ctx.service.redis.set(this.ctx.request.ip, captcha.text, 60)
    
  }

  async didReady () {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady () {
    // Server is listening.
  }

  async beforeClose () {
    // Do some thing before app close.
  }
}

module.exports = AppBootHook;