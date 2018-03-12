// TODO split into multiple files
import firebase from 'firebase'
import 'firebase/firestore'

function db () {
  return firebase.firestore()
}

export default {
  subscribeToPosts (cb) {
    return db().collection('posts').orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        cb(snapshot.docs.map(post => (
          Object.assign(post.data(), {id: post.id})
        )))
      })
  },
  likePost (post, uid) {
    if (post.likedBy.includes(uid)) return
    let dislikedIndex = post.dislikedBy.indexOf(uid)
    if (dislikedIndex !== -1) {
      post.dislikedBy.splice(dislikedIndex, 1)
      post.likes++
    }
    post.likedBy.push(uid)
    post.likes++
    db().collection('posts').doc(post.id).set(post)
  },
  dislikePost (post, uid) {
    if (post.dislikedBy.includes(uid)) return
    let likedIndex = post.likedBy.indexOf(uid)
    if (likedIndex !== -1) {
      post.likedBy.splice(likedIndex, 1)
      post.likes--
    }
    post.dislikedBy.push(uid)
    post.likes--
    db().collection('posts').doc(post.id).set(post)
  },
  createTextPost (text, user) {
    return db().collection('posts').add({
      text: text,
      userId: user.uid,
      username: user.displayName,
      createdAt: new Date(),
      likes: 0,
      likedBy: [],
      dislikedBy: []
    })
  }
}
