const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

// ejs 提供了转 html 的中间件
// 模板引擎在哪个位置
app.use(
  views(
    path.join(__dirname, './view'), {
      extension: 'ejs'
    }
  )
)
const user = {
  name: '康师傅',
  post: [
    {id: 0, title: '爱好'},
    {id: 1, title: '作品'}
  ]
}
const posts = [
  {
    id: 0,
    content: '唱跳rap'
  },
  {
    id: 1,
    content: '<strong>鸡你太美</strong>'
  }
]
app.use(async (ctx) => {
  // req res
  //  /user 用户的主页
  // req.url 解析出请求的地址
  if (ctx.path === '/user') {
    // user 返回用户页面  ejs
    await ctx.render('user', {
      user
    });
  }else if (ctx.path === '/post') {
    // get 请求的 查询参数 ?name=a&age=b 
    const { id } = ctx.query;
    const post = posts.find(item => item.id == id)
    await ctx.render('post', { post })
  }
  else {
    ctx.body = '无法处理该路径' + ctx.request.url;
  }
})

app.listen(8080, () => {
  console.log('server is running 8080');
})
