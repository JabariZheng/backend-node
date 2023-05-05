/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:06:34
 * @Description: redis
 */
const Service = require('egg').Service;
// 默认缓存失效时间 365天
const time = 60 * 60 * 24 * 365
class RedisService extends Service {
  /**
   * 设置
   * @param {string} key Key
   * @param {string | number} value Value
   * @param {number} seconds 有效期（秒）
   */
  async set (key, value, seconds) {
    // seconds 有效时长
    let { redis } = this.app;
    value = JSON.stringify(value);
    if (!seconds) {
      await redis.set(key, value, 'EX', time);
    } else {
      // 设置有效时间
      await redis.set(key, value, 'EX', seconds);
    }
  }
  /**
   * 根据key获取对应的值
   * @param {string} key Key
   * @returns redis内对应的Value
   */
  async get (key) {
    let { redis } = this.app;
    let data = await redis.get(key);
    if (!data) return;
    data = JSON.parse(data);
    return data;
  }
  /**
   * 清空redis
   * @returns
   */
  async flushall () {
    let { redis } = this.app;
    redis.flushall();
    return;
  }

  /**
   * 删除指定Key的Value
   * @param {string} key Key
   * @returns
   */
  async del(key) {
    let { redis } = this.app;
    redis.del(key);
    return;
  }
}
module.exports = RedisService;
