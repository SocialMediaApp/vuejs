<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="field is-grouped">
        <div class="control">
          <button 
            class="button is-primary"
            @click="googleSignIn()">
            <span class="icon">
              <i class="fa fa-google"></i>
            </span>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import auth from '../mixins/auth'

export default {
  mixins: [auth],
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    googleSignIn () {
      auth.loginWithGoogle(() => {
        this.$router.push({name: 'newsfeed'})
      })
    }
  }
}
</script>
