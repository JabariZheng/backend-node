/*
 * @Author: ZhengJie
 * @Date: 2023-05-05 23:07:06
 * @Description: 雪花算法+时间回拨
 */

const crypto = require('crypto');
const Snowflake = require('snowflake-id').Snowflake;

class SnowflakeID {
  workerId
  datacenterId
  epoch
  lastTimestamp

  constructor() {
    this.workerId = 1;
    this.datacenterId = 1;
    this.epoch = 1681574400000; // 2023-04-16 00:00:00
    this.lastTimestamp = 0;
  }


  encryptPassword (password) {
    // 生成随机的盐值
    const salt = Snowflake.generate(this.workerId, this.datacenterId, this.epoch).toString();
    // 使用 sha256 算法生成密码的哈希值
    const hash = crypto.createHash('sha256').update(password + salt).digest('hex');
    // 将盐值和哈希值合并为一个字符串
    const encrypted = salt + ':' + hash;
    return encrypted;
  }

  verifyPassword (password, encryptedPassword) {
    // 从加密后的密码中分离出盐值和哈希值
    const parts = encryptedPassword.split(':');
    const salt = parts[0];
    const hash = parts[1];
    // 使用 sha256 算法生成输入密码的哈希值
    const hashedPassword = crypto.createHash('sha256').update(password + salt).digest('hex');
    // 将输入密码的哈希值和存储的哈希值比较，判断密码是否正确
    return hash === hashedPassword;
  }

  generateSnowflake () {
    let timestamp = Date.now();
    if (timestamp < this.lastTimestamp) {
      // 时间回拨了，等待时钟同步
      timestamp = this.lastTimestamp;
      while (timestamp <= this.lastTimestamp) {
        timestamp = Date.now();
      }
    }
    this.lastTimestamp = timestamp;
    const snowflake = Snowflake.generate(this.workerId, this.datacenterId, this.epoch, timestamp);
    return snowflake.toString();
  }
}

module.exports = SnowflakeID