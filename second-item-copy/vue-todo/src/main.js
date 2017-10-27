// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'

import App from './App'
import Hello from './components/Hello.vue'

// 注册两个插件
// Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Hello',
	component: Hello
}]
const router = new Vue({
	routes
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App />',
	components: { App }
})
