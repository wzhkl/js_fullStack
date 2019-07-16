## redux 数据流管理
  全局数据
  action     一个纯对象
  reducer    纯函数 函数的返回值决定了 store 里面的值 只依赖于入参(state, action)，
  而且返回一份新的数据（不能在原来的数据上修改）
  dispatch   修改状态：dispatch(action)
  store   状态的集合