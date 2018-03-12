import firebase from 'firebase'
import users from './users'

export default {
  getFirebase () {
    return firebase.app()
  },
  loginWithGoogle (cb) {
    var provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result => {
      users.createUser(result.user)
      cb()
    }).catch(error => {
      console.error(error)
    })
  },
  logout (cb) {
    firebase.auth().signOut().then(cb).catch(error => {
      // An error happened.
      console.error(error)
    })
  },
  getUser () {
    console.log('getting user', firebase.auth())
    return firebase.auth().currentUser
  },
  onAuthChanged (cb) {
    firebase.auth().onAuthStateChanged(user => {
      console.info('Auth State Changed')
      cb(user)
    })
  }
}
