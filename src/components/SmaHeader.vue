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

    <div class="navbar-end" v-if="user && user.uid">
      <a class="navbar-item">
        <sma-avatar :uid="user.uid"></sma-avatar>
      </a>
      <a class="navbar-item">
        {{ user.name }}
      </a>
      <a class="navbar-item">
        <span class="badge is-badge-danger" data-badge="2">
          Notifications
        </span>
      </a>
      <router-link class="navbar-item" to="profile">
        Profile
      </router-link>
      <a @click="logout" class="navbar-item">
        Logout
      </a>
    </div>
  </nav>
</template>

<script>
import storage from '../mixins/storage'
import SmaAvatar from './SmaAvatar'

export default {
  mixins: [storage],
  components: {
    SmaAvatar
  },
  computed: {
    user () {
      return this.$store.state.auth.current
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout', () => {
        this.$router.push({name: 'login'})
      })
    }
  }
}
</script>
