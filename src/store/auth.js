const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const tempUser = {
  firstName: 'Tim',
  lastName: 'Waite',
  email: 'tim@sma.com',
  phone: '222-222-2222',
  notifications: '3'
}

export default {
  state: {
    auth: false,
    user: {}
  },
  getters: {
    isLoggedIn: state => {
      return state.auth
    },
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    [LOGIN] (state) {
      state.auth = true
      state.user = tempUser
    },
    [LOGOUT] (state) {
      state.auth = false
      state.user = {}
    }
  }
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
