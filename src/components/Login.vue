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

export default {
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    googleSignIn () {
      this.$store.dispatch('loginWithGoogle', () => {
        this.$router.push({name: 'newsfeed'}) // TODO why isn't this working
      })
    }
  }
}
</script>
