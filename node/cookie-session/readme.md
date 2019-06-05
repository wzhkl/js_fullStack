## why?
http 无状态的协议
使客户端 和 服务器 再次请求的时候知道客户端是谁

# npm i koa koa-router -S
  -S: --save

## cookie
  存在客户端
  js操作：document.cookie
  后端： 响应头
  Set-Cookie: name=value; path=/user; httponly

  浏览器检查所有存储的 cookie，把符合当前作用范围的 cookie 放在 http 请求头发给服务器
  内容: 
    name:   
    value:
    path: 规定cookie生效的路径
      /       所有路径
      /user      /user 以及  /user/xxx
      /user/abc     /user/abc 以及 /user/abc/xxx
    httpOnly: true / false,  为 true 就不能通过 js 获取 cookie
    max-age: 在几秒之后过期
  作用范围：
    path
    domain
  用途：会话的状态管理，保存用户的个性化设置

## session
  靠后台语言实现
  有很多个 session
  很多个用户 sessionID

## koa 第三方中间件
  ctx: req + res
  koa-views 
  往 ctx 上扩展
  ctx: {
    req,
    res,
    render: () => {}
  }
  调用 提供的 render()

## localStrorage  sessionStorage  cookie  session