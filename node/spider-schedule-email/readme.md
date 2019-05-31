## $
  .find()  查找某元素下面的内容 $('.box').find('p')
  \s 空白字符
  .replace(/\s/g, ""); 把空白的字符去除

## Promise
  promise.all([promise组成的数组])
  返回一个 promise, 所有promise resolve 的时候，它才resolve
  resolve 时候的值 就是数组中的所有promise resolve 组成的数组

## 模板引擎
  发漂亮的邮件 需要发送html
  html 不是静态的 需要数据填充
  {{name}} 占位 再把变量编译进去  模板引擎同理  编译成html
  ejs jade
  <%=  %> 变量
  <%  %>  js 执行