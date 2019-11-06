import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 2
}

const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  count: function (state) {
    return (state.count += 100)
  }
}
const actions = {
  addAction (context) {
    context.commit('add', 5)
  },
  reduceAction (context) {
    setTimeout(() => {
      context.commit('reduce')
    }, 3000)
    console.log('我比reduce提前执行')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
