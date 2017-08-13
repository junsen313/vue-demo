import Vue from 'vue'
import Router from 'vue-router'
// 引入路由所用到的页面或组件
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
      path: '/',            // 路由规则
      name: 'Home',         // 路由名称
      component: Home       // 路由组件
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
