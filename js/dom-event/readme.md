 dom event(事件)
 - dom 
   onclick 事件注册只有一个  dom-0标准
   addEventListener('click')   不限    dom-2
   addEventListener('keyup')   不限    dom-3
- dom 事件流
  捕获 (capture)
  window -> document(documentElement) -> body -> 父级 -> 目标元素
  冒泡 (bubble)
  window <- document(documentElement) <- body <- 父级 <- 目标元素

  事件按照 dom 流的顺序执行我们的事件回调
  处于目标阶段的时候 事件调用顺序取决于事件注册的顺序
- 事件捕获vs事件冒泡

当事件捕获和事件冒泡一起存在的情况，事件又是如何触发呢。
这里把被点击的DOM节点为target节点

1. document 往 target节点，捕获前进，遇到注册的捕获事件立即触发执行

2. 到达target节点，触发事件（对于target节点上，是先捕获还是先冒泡则按照捕获事件和冒泡事件的注册顺序，先注册先执行）

3. target节点 往 document 方向，冒泡前进，遇到注册的冒泡事件立即触发

总结下就是:
  对于非target节点则先执行捕获在执行冒泡
  对于target节点则是先执行先注册的事件，无论冒泡还是捕获

- 事件代理 （事件委托）
 由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。
 event-question.html
 原理：冒泡