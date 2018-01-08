<template>
  <div class="container">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary bold title
          </h1>
          <h2 class="subtitle">
            Primary bold subtitle
          </h2>
        </div>
      </div>
    </section>

    <section class="section">

      <!-- Level -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
              <strong>123</strong> posts
            </p>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Find a post">
              </p>
              <p class="control">
                <button class="button">
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <p class="level-item"><strong>All</strong></p>
          <p class="level-item"><a>Published</a></p>
          <p class="level-item"><a>Drafts</a></p>
          <p class="level-item"><a>Deleted</a></p>
          <p class="level-item"><a class="button is-success">New</a></p>
        </div>
      </nav>

      <!-- Center level -->
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </div>
      </nav>

      <!-- Media -->
      <div class="box">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-reply"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
          <div class="media-right">
            <button class="delete"></button>
          </div>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
