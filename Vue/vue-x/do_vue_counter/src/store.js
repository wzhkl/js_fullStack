// VUE 的大型项目开发，分为两种任务  
// - 组件开发工作，业务量开发
// - vuex 数据设计
//   store 独立于组件之外的，应用App的中央数据管理中心
//   公司：
//   CEO -> state {count: 0} 共享的状态

//   actions： 日常动（工）作，修改状态

//   修改：dispatch 派发 action('name', payload) => 
//   action commit('mutationname') -> mutations => state 修改数据

//   mutations -> 财务部门   可以和老板 CEO（state） 接触
//   负责审核对状态的修改是否符合公司规定

//   组件 读操作  this.$store.state.count
//   写：  actions(组件调用动作方法，)

import Vue from 'vue'
import Vuex from 'vuex'

// this 代表 vue 全局实例
Vue.use(Vuex); // (启用vuex，可拔插)

const state = {
  count: 0
}

// 修改，要严谨
const mutations = {
  // 按我的方式来
  increment (state) {
    state.count++;
  },
  decrement (state) {
    state.count--;
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even':'odd'
}

// 组件只能和 actions 交流，不可以直接跟 state 修改交流
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd({commit, state}) {
    // 将组件逻辑放到action
    // 是否是奇数
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 2000)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});