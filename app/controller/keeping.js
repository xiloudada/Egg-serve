'use strict';

const Controller = require('egg').Controller;

class KeepingController extends Controller {
  // 查询记账数据
  async index() {
    const { ctx } = this;
    const query = ctx.query;
    const homeInfo = await this.ctx.service.keeping.find(query);
    ctx.body = JSON.parse(homeInfo);
  }
  // 新增记账
  async home() {
    const query = this.ctx.query;
    const keepingAdd = await this.ctx.service.keeping.add(query);
    this.ctx.body = keepingAdd;
  }
  // 更新记账
  // 删除记账数据


  // 测试
  async test() {
    const user = await this.ctx.service.user.addUser();
    console.log('测试打印------', user);
    if (user && user.affectedRows === 1) {
      this.ctx.body = {
        success: true,
        message: '添加成功',
        status: 200,
      };
    } else {
      this.ctx.body = {
        success: false,
        message: '添加失败',
        status: 40023,
      };
    }
  }
}

module.exports = KeepingController;
