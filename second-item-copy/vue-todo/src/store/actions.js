// 其实action是负责对接的。负责 mutation 和 我们组件中的 method 对接.
import * as types from './mutation-types'

export default {
  deletePlan ({commit}, plan) {
    commit(types.DELETE_PLAN, plan)
  },
  testAdd ({ commit }) {
    commit(types.TEST_ADD)
  },
  addHour ({ commit }, hour) {
    commit(types.ADD_HOUR, hour)
  },
  savePlan ({ commit }, plan) {
    commit(types.SAVE_PLAN, plan)
  }
}
