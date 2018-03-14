<template>
  <nav class="navbar has-shadow is-primary is-fixed-top" role="dropdown navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <p class="title has-text-white">SMA</p>
      </router-link>
      <div
        class="navbar-burger"
        @click="navIsActive = !navIsActive"
        :class="{'is-active': navIsActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{'is-active': navIsActive}" @click="navIsActive = false">
      <div class="navbar-end" v-if="user && user.uid">
        <router-link class="navbar-item" to="/">
          <sma-avatar :uid="user.uid"></sma-avatar>
          {{ user.name }}
        </router-link>
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
  data: function () {
    return {
      navIsActive: false
    }
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

<style lang="scss" scoped>
  .is-active {
    .avatar {
      top: .5em;
      position: relative;
    }
  }

  .avatar {
    margin-right: 10px;
  }
</style>
 