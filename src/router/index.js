import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Newsfeed from '@/components/Newsfeed'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/:shortname/feed',
      name: 'newsfeed',
      component: Newsfeed
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.getters.isLoggedIn) {
    next(false)
  }
  next()
})

export default router
