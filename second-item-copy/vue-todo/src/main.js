import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

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
}]

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
