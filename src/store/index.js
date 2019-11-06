import Vue from 'vue'
import Vuex from 'vuex'

// modules 模块化写法

/* import footerStatus from './modules/footerStatus'
import collection from './modules/collection'
import cart from './modules/cart' */
import userInfo from './modules/userInfo'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    /*     collection,
    footerStatus,
    cart, */
    userInfo
  }
})
