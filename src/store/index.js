import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import todo from './modules/todo'
import clock from './modules/clock'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    todo,
    clock
  },
  strict: process.env.NODE_ENV !== 'production'
})
