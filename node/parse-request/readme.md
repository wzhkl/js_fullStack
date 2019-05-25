## 请求头
一次http 事务 有什么:
- 请求
    请求头  空行  请求体
    Content-Type: 规定我们向服务端发送请求体的格式
    1. application/x-www-form-urlencoded
        form表单 默认的发送请求的格式
        name=lilei&age=18
    2. application/json
        以 JSON 的格式发送
        {
            "name": "lilei",
            "age": 18
        }
- 响应
    响应头  空行  响应体
    Content-Type
通用首部: 请求/响应
