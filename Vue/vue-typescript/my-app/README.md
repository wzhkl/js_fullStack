- .ts
  typescript 是 js 的超集
  typescript 会编译成 js
  可以和写 java 一样
  .ts -> webpack loader -> babel -> js
  大型项目，可以有效减少bug

- 将弱类型的 js 变成静态类型的 typescript
错误在编译阶段就解决了
let a: string = '1'
在比较重要的场合

- interface 声明一个自定义类型 也叫做接口
多出的20%代码，有了类型检测，代码更可靠，有利于合作

- vuex 提供了一些类型给typescript