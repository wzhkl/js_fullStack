const Koa = require('koa');
const Router = require('koa-router');
const koaSession = require('koa-session');
const staticServer = require('koa-static');
const path = require('path');
const session_signed_keys = ['secret'];


const app = new Koa();
const router = new Router();
app.keys = session_signed_keys;

const sessionConfig = {
  key: 'sessionID', //放在cookie里
  maxAge: 1000 * 5,
  rolling: true  // 每次响应的时候，刷新有效期
}
const session = koaSession(sessionConfig, app);
app.use(session);
app.use(staticServer(path.join(__dirname, './static')));

// localhost:9999   /
// router.get('/', async (ctx) => {
//   ctx.type = 'html';
//   ctx.body = `<a href="/user">/user</a> <a href="/post">/post</a>`
// })


router.get('/user', async (ctx) => {
  ctx.cookies.set('name', 'value', {
    path: '/user',
    httpOnly: false
  })
  ctx.cookies.set('name1', 'value1')
  ctx.cookies.set('name2', 'value2', {
    path: '/user/abc'
  })
  ctx.body = 'user';
})

router.get('/post', async (ctx) => {
  ctx.body = 'post'
})

router.get('/user/abc', async (ctx) => {
  ctx.body = '/user/abc'
})

router.get('/login', async (ctx) => {
  const {name, password} = ctx.query;
  if (name === 'test' && password === 'test') {
    ctx.session.login = true;
    ctx.type = 'html',
    ctx.body = `<a href="/testlogin">测试登录状态</a>`
  }else {
    ctx.session.login = false;
    ctx.body = 'error name and password'
  }
})

router.get('/testlogin', async (ctx) => {
  if(ctx.session.login) {
    ctx.body = '登录成功'
  }else {
    ctx.redirect('/');
  }
})

app.use(router.routes());

app.listen(9999, () => {
  console.log('server is running 9999');
})