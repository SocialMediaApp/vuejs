<template>
  <div class="content">
    <section class="section">
      <create-post></create-post>
      <article class="media" v-for="post in posts" :key="post.id">
        <figure class="media-left">
          <p class="image is-64x64">
            <sma-avatar :uid="post.userId"></sma-avatar>
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ post.username }}</strong> <small>{{ getTimeFromNow(post.createdAt) }}</small>
              <br>
              {{ post.text }}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" @click="dislike(post)">
                <span 
                  v-bind:class="{ 'has-text-twitter': post.dislikedBy.includes(user.uid) }"
                  class="icon is-small">
                  <i class="fa fa-thumbs-down"></i>
                </span>
              </a>
              <a class="level-item" @click="like(post)">
                <span 
                  v-bind:class="{ 'has-text-twitter': post.likedBy.includes(user.uid) }"
                  class="icon is-small">
                  <i class="fa fa-thumbs-up"></i>
                </span>
              </a>
              <small>Likes: {{ post.likes }}</small>
            </div>
          </nav>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
// Mixins
import posts from '../../mixins/posts'
import moment from 'moment'
import * as _ from 'lodash'

// Components
import CreatePost from './CreatePost'
import SmaAvatar from '../SmaAvatar'

export default {
  mixins: [posts],
  components: {
    CreatePost,
    SmaAvatar
  },
  data: function () {
    return {
      posts: []
    }
  },
  computed: {
    user () {
      return JSON.parse(JSON.stringify(this.$store.state.auth.current))
    }
  },
  created () {
    posts.subscribeToPosts(posts => {
      this.posts = posts
    })
  },
  methods: {
    getTimeFromNow (datetime) {
      return moment(datetime).fromNow()
    },
    like (post) {
      posts.likePost(post, this.user.uid)
    },
    dislike (post) {
      posts.dislikePost(post, this.user.uid)
    }
  }
}
</script>
