import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	totalTime: 0,
	list: [{
		name: '漫改企划',
		avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
		date: '2017-10-31',
		totalTime: '6',
		comment: '做个ppt的demo'
	}]
}

export default new Vuex.Store({
	state
})
