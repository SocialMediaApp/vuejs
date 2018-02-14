// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

// CSS
import 'font-awesome/css/font-awesome.css'
import Buefy from 'buefy'


// TODO move to it's own config file
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_APP}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_APP}.firebaseio.com`,
  projectId: `${process.env.FIREBASE_APP}`,
  storageBucket: `${process.env.FIREBASE_APP}.appspot.com`,
  messagingSenderId: process.env.FIREBASE_SENDER_ID
}

firebase.initializeApp(firebaseConfig)

Vue.use(Buefy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  template: '<App/>',
  components: { App }
})
