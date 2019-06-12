前端路由实现方式 history.pushState(data, title, url)  改变url的path部分，
和hashChange实现方案不一样的地方是改变的url部位不一样(#home), 前端就可以处理路由了，像后端路由，而且支持前后切换
push  pop 数组只在尾部操作，  栈