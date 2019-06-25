import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import PlanList from '@/components/PlanList'
import CreateTask from '@/components/CreateTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/plan-list',
      name: 'PlanList',
      component: PlanList,
      children: [{
        path: 'create-task',
        name: 'CreateTask',
        component: CreateTask
      }]
    }
  ]
})
