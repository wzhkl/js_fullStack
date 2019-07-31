- 进度条
1. 三个容器 背后 100%宽度 圆点 已经拖动了的进度条
2. touchStart touchmove touchEnd
3. 改变进度条的 width left

```js
new Progress('selector', {
  onDrag: () => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  progress: 0.5,
  disableDrag: false
})
```