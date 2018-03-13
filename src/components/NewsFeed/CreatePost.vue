<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <v-gravatar class="avatar" :email="user.uid"/>
        <!-- <img :src="user.photoURL"> -->
      </p>
    </figure>
    <div class="media-content">
      <div class="field">
        <p class="control">
          <textarea 
            class="textarea"
            placeholder="Create a post..."
            v-model="post">
          </textarea>
        </p>
      </div>
      <nav class="level">
        <div class="level-left"></div>
        <div class="level-right">
          <div class="level-item">
            <a class="button is-info" @click="createPost">Submit</a>
          </div>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
import posts from '../../mixins/posts'

export default {
  mixins: [posts],
  data: function () {
    return {
      post: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.current
    }
  },
  methods: {
    createPost () {
      posts.createTextPost(this.post, this.user)
        .then(document => {
          this.post = ''
          this.$emit('new-post')
        })
    }
  }
}
</script>
