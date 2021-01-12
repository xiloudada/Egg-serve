'use strict';

const { Controller } = require('egg');

class UserController extends Controller {

  // 查询用户
  async selectUser() {
    const { ctx } = this;
    const query = ctx.query;
    console.log(query, '........query======');
    const user = await ctx.service.user.selectUser(query);
    if (user) {
      this.ctx.body = {
        success: true,
        message: '查询成功',
        status: 200,
        data: user,
      };
    } else {
      this.ctx.body = {
        success: false,
        message: '查询失败',
        status: 40023,
      };
    }
  }
}
module.exports = UserController;
