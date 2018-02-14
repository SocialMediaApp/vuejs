export default {
  getters: {
    isLoggedIn: state => {
      return state.auth
    },
    getUser: state => {
      return state.user
    }
  },
  // mutations: {
  //   [LOGIN] (state, user, token) {
  //     state.auth = token
  //     state.user = user
  //   },
  //   [LOGOUT] (state) {
  //     firebase.auth().signOut().then(() => {
  //       // Sign-out successful.
  //       state.auth = false
  //       state.user = {}
  //     }).catch(error => {
  //       // An error happened.
  //       console.error(error)
  //     })
  //   }
  // }
  actions: {

  }
}
