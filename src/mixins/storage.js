import firebase from 'firebase'

function getAvatarRef (uid) {
  let ref = firebase.storage().ref()
  return ref.child(uid + '-avatar')
}

export default {
  uploadAvatar (uid, blob) { // TODO move to mixin
    getAvatarRef(uid).put(blob).then(snapshot => {
      return snapshot
    })
  },
  getAvatarUrl (uid) {
    return getAvatarRef(uid).getDownloadURL().catch(error => {
      console.error(error)
      return ''
    })
  }
}
