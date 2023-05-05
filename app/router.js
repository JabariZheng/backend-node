/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 22:39:48
 * @Description: router 动态注册
 */
'use strict';

const fs = require('fs')
const path = require('path')
const routerFilePath = path.resolve('./app/router')

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  fs.readdir(routerFilePath, (err, files) => {
    if (err) return console.error('Error:(spec)', err)
    files.forEach(fileName => {
      const filedir = path.join(routerFilePath, fileName)
      // 动态require
      require(filedir)(app)
    })
  })
};
