import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Newsfeed from '@/components/NewsFeed/Newsfeed'
import auth from '@/mixins/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
      name: 'newsfeed',
      component: Newsfeed,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  auth.onAuthChanged(user => {
    if (to.meta.requiresAuth && !user) {
      console.warn(`Auth required for ${to.name}`)
      next('/login')
    } else {
      next()
    }
  })
})

export default router
