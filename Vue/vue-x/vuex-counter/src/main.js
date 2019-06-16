import Vue from 'vue'  //
import App from './App.vue'  // 
import store from './store' // 统一管理应用状态

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
