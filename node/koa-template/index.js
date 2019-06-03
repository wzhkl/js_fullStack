const Koa = require('koa');

// 应用实例  可以生成很多个
const app = new Koa();
const admin = new Koa();

// ctx 封装req,res
app.use(async (ctx, next) => {
  console.log(1);
  // koa 没有回应  自己处理 not found
  // 交给下一个中间件
  await next();
  console.log(2);
})
app.use(async (ctx, next) => {
  await next();
  console.log(4)
})
app.use(async (ctx) => {
  console.log(3);
  // 响应体ctx.body
  ctx.body = 'hello Koa';
})
app.listen(3000, () => {
  console.log('server is running 3000')
});
admin.listen(4000, () => {
  // console.log('admin server is running 4000')
});