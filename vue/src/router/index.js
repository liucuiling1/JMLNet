import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    }
  ]
})

export default router
