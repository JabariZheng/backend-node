/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 22:39:48
 * @Description: 默认配置
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1683297086036_4160';

  // add your middleware config here
  config.middleware = ['jwtVerify'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // serverName: ''
    apiPrefix: '/admin-api',
    // 登录有效期
    authExpirationDate: 30000
  };

  // 启动设置
  config.cluster = {
    listen: {
      port: 7001,
      hostname: '0.0.0.0', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
      // path: '/var/run/egg.sock',
    }
  };

  // 白名单
  config.whiteList = ['/swagger-ui.html', '/system/user/getCaptchaImg', '/system/user/login', '/system/user/register'];

  // jwt
  config.jwt = {
    secret: "backend_node"
  };

  // swagger-doc
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-swagger',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    routerMap: true,
    enable: true,
  }


  return {
    ...config,
    ...userConfig,
  };
};
