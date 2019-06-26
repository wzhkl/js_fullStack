import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import { getToken } from '@/utils/auth'

// 当进入 / 如果没有 token 就去登录页
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    }
  ]
})

let token = getToken();
const whiteList = ['/login', '/signup', '/auth-redirect']
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`
  if (token) {

  }else {
    console.log(to.path)
    if (whiteList.includes(to.path)) {
      next()
    }else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
export default router