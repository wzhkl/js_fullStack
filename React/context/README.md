## context
  跨组件之间数据传递
  父 -> 子 -> 孙   this.props
  父 -> 后代组件   context
  不建议使用  但被 react-router react-redux 广泛应用

## Context15 问题
  shouldComponentUpdate 生命周期
  尽可能渲染
  return true 更新
  return false 不更新
  如果中间某个组件 shouldComponentUpdate 生命周期 return false 后代组件不会更新