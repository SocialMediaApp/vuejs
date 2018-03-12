import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)
console.log('using vuex')

export default new Vuex.Store({
  modules: {
    users
  },
  strict: true
})
