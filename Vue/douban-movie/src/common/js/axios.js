//axios的封装
import axios from 'axios' 
import Cookie from 'js-cookie'
import router from '@/router'

const instance = axios.create({
  timeout : 6000,
  baseURL: '/api/api/movie/'
})

const COOKIE_NAME = 'movie_trailer-user'

//响应拦截
instance.interceptors.response.use(res => {
  const {data} = res
  //登录失败(登录失效应该回到登录页面重新登录)
  if(data.code === 1003) {
    Cookie.remove(COOKIE_NAME)
    router.replace('/login')
    return
  }
  return Promise.resolve(data)
},()=>{
  router.push('/error')
})

export default {
  install:(Vue,options) => {
    Object.defineProperty(Vue.prototype,'$axios',{value: instance})
  }
}