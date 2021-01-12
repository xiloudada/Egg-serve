/* eslint valid-jsdoc: "off" */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609857412226_7011';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 微信常量
  config.weapp = {
    appid: '', // 微信小程序appid
    secret: '', // 微信小程序secret
  };
  // 数据库常量
  config.sqlTable = {
    user: 'bookkeeping_user',
  };

  // 先关闭csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 解决跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // 配置session
  config.session = {
    key: 'session_id',
    maxAge: 24 * 3600 * 1000,
    httpOnly: true,
    encrypt: true,
    renew: true,
  };

  // 生成token
  config.jwt = {
    secret: '123456',
  };

  // 配置mysql
  config.mysql = {
    // 单数据库信息配置
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: '1907',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    agent: false,
  };
  return {
    ...config,
    ...userConfig,
  };
};
