<template>
  <section class="section">
    <div class="container is-fluid">
      <b-field label="Name">
        <b-input v-model="name"></b-input>
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
import { clone, cloneDeep } from 'lodash'

export default {
  mixins: [users, storage],
  data: function () {
    return {
      file: {},
      name: clone(this.$store.state.auth.current.name)
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.current
    }
  },
  methods: {
    save () {
      let user = cloneDeep(this.user)
      user.name = this.name
      this.$store.dispatch('updateCurrent', user)
      if (this.file.hasImage()) {
        this.file.generateBlob(blob => {
          storage.uploadAvatar(this.user.uid, blob)
        })
      }
      this.toastSuccess()
    },
    toastSuccess () {
      this.$toast.open({
        duration: 3000,
        message: 'Updated profile',
        type: 'is-success'
      })
    }
  }
}
</script>