import firebase from 'firebase'
import 'firebase/firestore'

let auth = {
  state: {
    current: {}
  },
  mutations: {
    setCurrent (state, user) {
      console.log('setting current')
      state.current = user
    }
  },
  actions: {
    loginWithGoogle ({ commit, state }, cb) {
      console.log(cb)
      let provider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(provider).then(result => {
        // TODO create user in our db
        commit('setCurrent', {
          uid: result.user.uid,
          name: result.user.displayName
        })
        firebase.firestore().collection('users').doc(result.user.uid).get().then(doc => {
          if (!doc.exists) {
            this.create({
              uid: user.uid,
              name: user.displayName
            })
          }
        });
        cb()
      }).catch(error => {
        console.error(error)
      })
    },
    logout ({commit}, cb) {
      firebase.auth().signOut().then(response => {
        cb()
        commit('setCurrent', {})
      }).catch(error => {
        console.error(error)
      })
    },
    onAuthChanged ({commit, state}, cb) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          firebase.firestore().collection('users').doc(user.uid).get().then(doc => {
            commit('setCurrent', doc.data())
            cb(state.current)
          });
        } else {
          cb(user)
        }
      })
    },
    updateCurrent ({commit}, user) {
      let data = {
        uid: user.uid,
        name: user.name
      }
      firebase.firestore().collection('users').doc(data.uid).update(data)
      commit('setCurrent', data)
    }
  }
}

export default auth
