'use strict';
const { Service } = require('egg');

class LoginService extends Service {
  // 登陆
  async login(data) {
    const { app, ctx } = this;
    const { appid, secret } = app.config.weapp;
    const result = await ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${data.code}&grant_type=authorization_code`, { dataType: 'json' });
    console.log('---------JSON.string', result);
    const aa = await ctx.service.user.selectUser(result.data);
    console.log(aa, '=======aaa');
    if (!aa) {
      await ctx.service.user.addUser({ openid: result.data.openid });
    }
    return result.data;
  }

}
module.exports = LoginService;
