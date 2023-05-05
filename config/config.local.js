/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 22:52:17
 * @Description: 开发配置
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

  // mysql配置
  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '4zbndsfh',
      database: 'backend_node',
    },
    // 是否加载到app上，默认开启
    app: true,
    // 是否加载到agent上,默认关闭
    agent: false
  };

  // redis配置
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '4zbndsfh',
      db: '0'
    }
  };

  return {
    ...config
  };
};
