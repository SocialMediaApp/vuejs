import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
console.log('using vuex');

export default new Vuex.Store({
  state: {
    auth: false
  },
  getters: {
    isLoggedIn
  },
  mutations: {
    login,
    logout
  }
})

function login (state) {
  state.auth = true
  return true
}

function logout (state) {
  state.auth = false
  return true
}

function isLoggedIn (state, getters) {
  return state.auth
}

// function requireAuth (to, from, next) {
//   if (!isLoggedIn()) {
//     next({
//       path: '/',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// }
