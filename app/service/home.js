'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async find() {
    return 'zhangsan,lisi';
  }
}
module.exports = HomeService;
