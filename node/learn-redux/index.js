const { createStore, combineReducers } = require('redux');

// action.type 是一个常量 决定了这次 dispatch 要干什么
// reducer 可以收到 action 的信息
const add = {
  type: 'INCREMENT'
}
const decrease = {
  type: 'DECREMENT'
}

// 加 action.type === ADD_FILM
// action 中 ： type + payload
function filmReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state, action.film];
    default:
      return state;
  }
}
function reducer(state, action) {
  console.log('reducer--------->>', action);
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else {
    return 0
  }
}

const index = combineReducers({
  count: reducer,
  films: filmReducer
})
// createStore 只接受 reducer
const store = createStore(index);
// console.log(store.getState());    // 0

// 订阅
store.subscribe(() => {
  console.log(store.getState());
})
// 每次 dispatch 都会触发 reducer
store.dispatch(add);
store.dispatch(add);
store.dispatch(decrease);
store.dispatch({
  type: 'ADD_FILM',
  a: 0,
  film: { name: '霸王别姬' }
})