// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'             // 引入路由，共全局使用
import iView from 'iview'                 // 引入iview
import 'iview/dist/styles/iview.css'      // 使用iview CSS

Vue.config.productionTip = false

Vue.use(iView)                            // 使用iview插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
