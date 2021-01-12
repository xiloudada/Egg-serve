'use strict';
const { Service } = require('egg');

class UserService extends Service {

  // 新增用户
  async addUser(data1) {
    const { app } = this;
    const userTable = app.config.sqlTable.user;

    const data = {
      openid: data1.openid,
      name: '戏楼',
      mobile: '',
      email: '',
      create_time: Date.now() + '',
      update_time: Date.now() + '',
    };
    const user = await app.mysql.insert(userTable, data);
    return user;
  }

  // 查询用户
  async selectUser(openid) {
    const { app } = this;
    const userTable = app.config.sqlTable.user;
    const user = await app.mysql.get(userTable, openid);
    return user;
  }

}
module.exports = UserService;
