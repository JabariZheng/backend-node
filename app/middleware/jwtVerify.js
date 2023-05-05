/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:11:55
 * @Description: 中间件-jwt
 */

'use strict'

module.exports = (_options) => {
  return async function (ctx, next) {
    const { jwt, config } = ctx.app
    // swagger直接放行
    console.log('ctx.request.url', ctx.request.url)
    let replaceUrl = ctx.request.url.replace(config.apiPrefix, '')
    if (ctx.request.url.startsWith('/swagger-')) {
      await next()
    } else if (!ctx.request.url.startsWith(`${config.apiPrefix}`)) {
      ctx.body = {
        code: 400,
        msg: `未找到请求地址：${ctx.request.url}，请检查是否携带服务名`,
        status: 'error',
        data: null
      }
    } else if (!config.whiteList.includes(replaceUrl)) {
      // 是否白名单
      // 取token
      let token = ctx.request.header.authorization
      if (token) {
        // 解密
        let decode = jwt.verify(token, config.jwt.secret)
        if (decode && decode.openid) {
          ctx.body = {
            data: {
              openid: decode.openid
            },
            code: 200,
            msg: 'success',
            status: 'success'
          }
        } else {
          // 存储openid
          ctx.openid = decode.openid
          await next()
        }

      } else {
        ctx.body = {
          code: 401,
          msg: 'no authorization(token)',
          status: 'error',
          data: null
        }
      }
    } else {
      await next()
    }
  }
}