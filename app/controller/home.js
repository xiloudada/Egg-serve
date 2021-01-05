'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async home() {
    const homeInfo = await this.ctx.service.home.find();
    this.ctx.body = homeInfo;
  }
}

module.exports = HomeController;
