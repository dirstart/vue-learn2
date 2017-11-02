import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import EleTable from './components/EleTable'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.use(ElementUI)

Vue.component('test1', {
  template: '<span>test</span>'
})
const test2 = { template: '<p>test</p>' }

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/time-entries',
  component: TimeEntries,
  children: [{
    path: 'log-time',
    // 懒加载
    component: resolve => require(['./components/LogTime.vue'], resolve)
    // component: resolve => require(['./components/test.vue'], resolve)
  }]
}, {
  path: '/test2',
  component: test2
}, {
  path: '/ele-ui',
  component: EleTable
}]
//  {
//   path: '/test1',
//   component: '<test1>'
// },
// 上面这个组件没有办法加载
const router = new VueRouter({
  routes
})

let app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
