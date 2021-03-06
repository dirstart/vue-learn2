import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  hour: 6,
  test: 30,
  list: [{
    name: '漫改企划',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2017-10-31',
    hour: '6',
    comment: '做个ppt的demo'
  }]
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
