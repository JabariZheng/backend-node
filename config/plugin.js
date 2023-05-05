/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 22:39:48
 * @Description: config.plugin
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc'
  },
  redis: {
    enable: true,
    package: 'egg-redis'
  }
};
