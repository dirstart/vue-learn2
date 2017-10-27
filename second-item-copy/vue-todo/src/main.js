import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
	path: '/',
	component: Home
}, {
	path: '/home',
	component: Home
}]

const router = new VueRouter({
	routes
})

let app = new Vue({
	el: '#app',
	router,
	...App
})
