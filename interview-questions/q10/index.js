// 一个页面从浏览器输入url到页面加载显示完成，过程中发生了什么？
// 1. 地址栏输入url
// 2. 判断缓存并比较缓存是否过期
// 3. DNS解析url对应的IP
// 4. 建立TCP连接（三次握手）
// 5. 发送HTTP请求
// 6. 服务器处理请求并返回HTTP报文
// 7. 浏览器解析渲染页面构建DOM树
// 8. 关闭TCP连接（四次挥手）


// 数据双向绑定
const a = {
  b: 1
}
function b() {
  console.log('a的值发生改变', a.b)
}

function bindData() {
  // Object.keys()方法会返回一个由一个给定对象的自身可枚举属性的数组
  Object.keys(a).map(key => {
    let v = a[key]
    Object.defineProperty(a, key, {
      get() { // 读取属性时调用的方法
        console.log('正在读取a中的值')
        return v
      },
      set(newA) { // 写入属性时调用的方法
        v = newA
        b()
      }
    })
  })
}
bindData() 
a.b = 3