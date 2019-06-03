const Koa = require('koa');
const app = new Koa();

// 负责计算时间间隔
app.use(async (ctx, next) => {
  const start = Date.now();
  await next;
  const end = Date.now();
  const diff = end - start;
  // 放入响应头里 writeHead Content-type
  ctx.set('X-Response-Time', `${diff}ms`);
  console.log(`spend ${diff}ms`);
})
// 负责 response
app.use(async (ctx) => {
  ctx.body = 'hello koa';
})

app.listen(3001, () => {
  console.log('server is running 3001')
})