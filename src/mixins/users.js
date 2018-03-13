import firebase from 'firebase'
import 'firebase/firestore'

function db () {
  return firebase.firestore()
}

export default {
  createUser (user) {
    return db().collection('users').doc(user.uid).get().then(doc => {
      if (!doc.exists) {
        this.create({
          uid: user.uid,
          name: user.displayName
        })
      }
    })
  },
  create (user) {
    return db().collection('users').doc(user.uid).set(user)
  },
  update (user) {
    return db().collection('users').doc(user.uid).update(user)
  }
}
