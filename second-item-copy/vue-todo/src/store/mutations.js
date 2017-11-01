import * as types from './mutation-types'

// mutation是前端 "数据库" 的API
export default {
  [types.DELETE_PLAN] (state, index) {
    state.list.splice(index, 1)
  },
  [types.TEST_ADD] (state) {
    state.test++
  }
}
