<template>
  <nav class="navbar has-shadow is-primary is-fixed-top" role="navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <p class="title has-text-white">SMA</p>
      </div>
    </div>

    <div class="navbar-start">
      <div class="navbar-item">
        <b-field>
          <b-input
            placeholder="Search..."
            type="search"
            icon-pack="fa"
            icon="search">
          </b-input>
        </b-field>
      </div>
    </div>

    <div class="navbar-end" v-if="user">
      <a class="navbar-item">
        <img :src="user.photoURL">
      </a>
      <a class="navbar-item">
        <span class="badge is-badge-danger" data-badge="2">
          {{ user.displayName }}
        </span>
      </a>
      <a @click="logout" class="navbar-item">
        Logout
      </a>
    </div>
  </nav>
</template>

<script>
import auth from '../mixins/auth'

export default {
  mixin: [auth],
  data: function () {
    return {
      user: auth.getUser()
    }
  },
  created () {
    // Handle auth change event
    auth.onAuthChanged(user => {
      this.user = user
    })
  },
  methods: {
    logout () {
      auth.logout(() => {
        this.$router.push({name: 'login'})
      })
    }
  }
}
</script>
