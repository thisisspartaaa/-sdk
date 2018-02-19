/**
 * Created by root on 2018/2/18.
 */
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const controllers = require('./controllers')


router.get('/login', (ctx, next) => {
  return controllers.login().then((r) => {
    ctx.body = r;
    return next()
  }).catch((err) => {
    ctx.body = err
    return next()
  });
});

router.get('/getaccountinfo', (ctx, next) => {
  return controllers.getaccountinfo(process.env.YM_TOKEN,1).then((r) => {
    ctx.body = r;
    return next()
  }).catch((err) => {
    ctx.body = err
    return next()
  });
});

router.get('/send', (ctx, next) => {
  return controllers.getmobile(ctx.query).then((r) => {
    ctx.body = r;
    return next()
  }).catch((err) => {
    ctx.body = err
    return next()
  });
});











app
  .use(router.routes())
  .use(router.allowedMethods());

// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });
console.log('app.listen(3000) , visit http://localhost:3000/login')
app.listen(3000);