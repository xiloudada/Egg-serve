'use strict';
const Service = require('egg').Service;

class KeepingService extends Service {
  // 获取数据
  async find(data) {
    const user = await this.app.mysql.select('jingdong');
    console.log('---------', user, data);
    return JSON.stringify(user);
  }
  // 新增数据
  async add(query) {
    const result = await this.app.mysql.insert('jingdong', query);
    console.log('-------result', result);
    if (result.affectedRows === 1) { return result; }
  }
}
module.exports = KeepingService;
