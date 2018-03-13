<template>
  <section class="section">
    <div class="container is-fluid">
      <b-field label="Name">
        <b-input v-model="user.name"></b-input>
      </b-field>
      <b-field label="Avatar">
        <figure class="image">
          <croppa 
            v-model="file"
            canvas-color="whitesmoke"
            accept="image/*"
            :placeholder-font-size="12"
            :show-remove-button="false"
            :prevent-white-space="true">
          </croppa>
          <button 
            @click="file.chooseFile()" 
            class="button is-primary">
            Upload Avatar
          </button>
        </figure>
      </b-field>
      <div class="level">
        <div class="level-left"></div>
        <div class="level-right">
          <button
            class="button is-info"
            @click="save()">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import users from '../mixins/users'
import storage from '../mixins/storage'

export default {
  mixins: [users, storage],
  data: function () {
    return {
      file: {}
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.current
    }
  },
  methods: {
    save () {
      this.$store.dispatch('updateCurrent', this.user)
      if (this.file.hasImage()) {
        this.file.generateBlob(blob => {
          storage.uploadAvatar(this.user.uid, blob)
        })
      }
    }
  }
}
</script>