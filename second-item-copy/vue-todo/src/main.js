import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Hello from './components/Hello'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	component: Hello
}]

const router = new VueRouter({
	routes
})

let app = new Vue({
	el: '#app',
	router,
	...App
})
