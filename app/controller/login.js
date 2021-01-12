'use strict';
const { Controller } = require('egg');

class LoginController extends Controller {
  // 登陆api
  async login() {
    const { ctx, app } = this;
    const query = ctx.query;
    const loginInfo = await ctx.service.login.login(query);
    const token = app.jwt.sign({
      user: loginInfo,
    }, app.config.jwt.secret);
    const openid = loginInfo.openid;
    ctx.body = {
      openid,
      token: `Bearer ${token}`,
      success: '登陆成功',
      code: 200,
    };
  }
}
module.exports = LoginController;
