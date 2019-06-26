- vuex 大型化 由 modules 来支持
  通过 this.$store.user.state 找数据
  - user
    state    info 登录 注册 退出
    action
    mutations
  先设计，搭好结构，围绕着状态，token 令牌环 this.$store.user.token 要跳转到登录页

- 登录鉴权
  1. 延迟加载路由，性能优化   component: () => import('@/pages/index')
