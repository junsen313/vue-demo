import Vue from 'vue'
import Router from 'vue-router'
// 引入路由所用到的页面或组件
import Layout from '../views/layout/Layout'
import Login from '../views/login/Login'
import Home from '../views/home'
import Page1 from '../views/Page1'
import Page2 from '../views/Page2'
import Page3 from '../views/Page3'
import NotFound from '../views/NotFound'

Vue.use(Router)
// 返回一个新建的路由器，并设置路由规则
export default new Router({
  // 路由规则
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/login'
    },
    {
      path: '/home',            // 路由规则
      name: 'home',             // 路由名称
      component: Layout,        // 路由组件,此处使用布局组件
      // 子路由
      children: [
        {
          path: '',
          name: 'index',
          component: Home
        },
        {
          path: 'page1',
          name: 'Page1',
          component: Page1
        },
        {
          path: 'page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: 'page3',
          name: 'Page3',
          component: Page3
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
