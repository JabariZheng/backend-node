/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:11:55
 * @Description: 中间件-jwt
 */

'use strict'

module.exports = (_options) => {
  return async function (ctx, next) {
    const { jwt, config } = ctx.app
    if (!config.enablePremission) {
      await next()
      return
    }
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
      let bearerToken = ctx.request.header.authorization
      let splitLength = bearerToken.split('Bearer ')
      if (bearerToken && splitLength.length === 2) {
        // 解密
        const token = bearerToken.split('Bearer ')[1]
        let decode = jwt.verify(token, config.jwt.secret)
        if (decode && decode.data && decode.data.uid) {
          // 校验是否已经登录
          let getUserInfo = await ctx.service.redis.get(decode.data.uid)
          if (getUserInfo) {
            // 更新时间
            await ctx.service.redis.set(decode.data.uid, getUserInfo, config.authExpirationDate)
            ctx.uid = decode.data.uid
            await next()
            return
          }
          ctx.body = {
            code: 401,
            msg: '登录已过期，请重新登录',
            status: 'error',
            data: null
          }
        } else {
          ctx.body = {
            code: 401,
            msg: '登录异常，请重新登录',
            status: 'error',
            data: null
          }
        }
      } else {
        ctx.body = {
          code: 401,
          msg: '登录异常，请重新登录(no token)',
          status: 'error',
          data: null
        }
      }
    } else {
      await next()
    }
  }
}