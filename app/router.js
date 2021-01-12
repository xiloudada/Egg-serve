'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  // 登陆接口
  router.get('/keeping/api/v1/login', controller.login.login);
  // 查询用户
  router.get('/keeping/api/v1/getUser', jwt, controller.user.selectUser);

  // 查询个人记账
  router.get('/bookkeeping/get', jwt, controller.keeping.index);
  // 新增个人记账
  router.post('/bookkeeping/post', controller.keeping.home);
  // 修改个人记账
  router.get('/bookkeeping/update', controller.keeping.home);
  // 删除个人记账
  router.get('/bookkeeping/delete', controller.keeping.home);
  // 测试
  router.get('/bookkeeping/test', controller.keeping.test);
};
