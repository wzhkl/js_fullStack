// node自带
const http = require('http');
// user/lists
// POST
// [{name: '1'}, {name: '2'}]

// 监听在8080端口的服务
const userLists = [{name: '1'}, {name: '2'}];
http.createServer((request, response) => {
    // 向浏览器返回内容
    const method = request.method;
    const url = request.url;
    if(method.toLocaleLowerCase() === 'post' && url === '/user/lists')
    {
        let data = '';
        request.on('data', (chunk) => {
            data += chunk
        })
        request.on('end', () => {
            response.end(data);
        })
        // response.writeHead(200, { "Content-Type": "application/json" })
        // response.end(JSON.stringify(userLists));
    }else {
        response.end('请求方式不对')
    }
    
}).listen(8080, () => {
    console.log('server is running 8080')
})