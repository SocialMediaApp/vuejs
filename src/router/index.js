import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Newsfeed from '@/components/Newsfeed'

Vue.use(Router)

export default new Router({
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
