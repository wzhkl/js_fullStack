{/* <script src="./http"></script> */}
// require 关键字 引入一个模块。COMMONJS 
const http = require('http');
let i = 0;

http
    .createServer(function(request, response) {
        response.end(`Hello World!${++i}`);
        console.log(i)
    })
    .listen(3000);

// request  用户 N个   WebServer一直在3000端口上伺服  request 就能找到店，
// 每位用户到达，会触发 事件， 就会调用createServer回调函数， request 用户身份，response 响应请求
// http 响应之后就断开