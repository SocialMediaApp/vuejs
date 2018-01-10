<template>
  <nav class="navbar has-shadow is-primary" role="navigation">
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

    <div class="navbar-end">
      <a v-if="isLoggedIn" class="navbar-item">
        <span class="badge is-badge-danger" data-badge="2">
          {{ user.firstName }} {{ user.lastName }}
        </span>
      </a>
      <a v-if="isLoggedIn" @click="logout" class="navbar-item">
        Logout
      </a>
      <a v-else @click="login" class="navbar-item">
        Login
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    user () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    login () {
      this.$store.commit('LOGIN')
      this.$router.push({name: 'newsfeed', params: { shortname: 'test' }})
    },
    logout () {
      this.$store.commit('LOGOUT')
      this.$router.push({name: 'login'})
    }
  }
}
</script>
