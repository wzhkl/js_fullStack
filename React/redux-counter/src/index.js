import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import index from './reducer/index.js';
import Count from './App.js'

const store = createStore(index);

ReactDOM.render(
<Provider store={store}>
  <Count />
</Provider>, document.getElementById('root'));
// store.subscribe(() => {
//   ReactDOM.render(<Count />, document.getElementById('root'));
// })

