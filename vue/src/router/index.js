import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/index'
import Design from '@/views/design/index'
import Tec from '@/views/tec/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/design',
      name: '设计',
      component: Design
    },
    {
      path: '/tec',
      name: '技术',
      component: Tec
    }
  ]
})

export default router
