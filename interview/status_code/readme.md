HTTP协议  request  response
  状态码：HTTP响应(response)中包含状态码
    告诉浏览器  proxy
    1XX 请求正在处理，继续等待
    2XX 表示请求成功已经处理   200 ok 请求成功
    3XX 重定向 Location
    4XX 客户端出错 请求资源不存在 未授权 受限资源   404 not found
    5XX　服务器端出现错误

    301 永久跳转
      用户 a 请求 www.xiaomi.com  跳转  www.mi.com
      告诉蜘蛛 www.xiaomi.com/a.html  红米手机   被废弃，301  www.mi.com/a.html
      3XX 区别  永久跳转，告诉蜘蛛把记录更新
      301 可以改变状态码  localhost:3000  301永久跳转，再次访问，浏览器有缓存，不需要再走服务器
    302 临时跳转