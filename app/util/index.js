/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:07:06
 * @Description: 工具类
 */
const RegCheck = require("./reg")
const SnowflakeID = require("./snowflake")
const moment = require('moment')

const utils = {
  reg: new RegCheck(),
  snowflakeID: new SnowflakeID({ WorkerId: 1 }),
  // 时间格式化
  // 用法：<div>{{data | dataFormat('yyyy-MM-dd hh:mm:ss')}}</div>
  formatDate: (value, fmt = 'YYYY-MM-DD HH:mm:ss', emptyString = '-') => {
    if (!value) {
      return emptyString || ''
    }
    if (moment(Number(value)).isValid()) {
      return moment(Number(value)).format(fmt)
    } else {
      return emptyString || ''
    }
  }
}

module.exports = utils