// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()
router.map({
  '/hello': {
    component: Hello
  }
})
router.redirect({
  '*': '/hello'
})
router.start(App, '#app')
