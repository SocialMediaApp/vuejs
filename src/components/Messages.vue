<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Messages</p>
      <span 
        class="icon is-small"
        @click="$parent.close()">
        <i class="fa fa-close"></i>
      </span>
    </header>
    <div class="modal-card-body">
      <article class="media" v-for="conversation in conversations" :key="conversation.id">
        <!-- <div class="media-left">
          <sma-avatar :uid="'test@test.com'"></sma-avatar>
        </div> -->
        <div class="media-content">
          <strong>{{ conversation.from }}</strong>
          <br>
          <p>{{ conversation.messages[0].text }}</p>
        </div>
        <div class="media-right">
          <small>Mar 1</small>
        </div>
      </article>
      <level>
        <div class="level-left"></div>
        <div class="level-right">
          <div class="level-item">
            <button class="button is-info">New Message</button>
          </div>
        </div>
      </level>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      conversations: [
        {
          id: 1,
          from: 'Tim Waite',
          messages: [
            {
              text: 'real text',
              from: 'Tim Waite'
            }
          ]
        },
        {
          id: 1,
          from: 'Tim Waite',
          messages: [
            {
              text: 'real text',
              from: 'Tim Waite'
            }
          ]
        },
        {
          id: 1,
          from: 'Tim Waite',
          messages: [
            {
              text: 'real text',
              from: 'Tim Waite'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
