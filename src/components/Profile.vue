<template>
  <section class="section">
    <div class="container is-fluid">
      <b-field label="Name">
        <b-input v-model="user.name"></b-input>
      </b-field>
      <b-field>
        <b-upload 
          v-model="files"
          accept="image/*"
          native>
            <a class="button is-primary">
                <b-icon class="fa fa-upload"></b-icon>
                <span>Click to upload</span>
            </a>
        </b-upload>
        <div v-if="files.length">
            <span class="file-name">
                {{ files[0].name }}
            </span>
        </div>
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
import firebase from 'firebase'

export default {
  data: function () {
    return {
      files: []
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.current
    }
  },
  methods: {
    save () {
      users.update(this.user)
      if (this.files.length) {
        this.upload()
      }
    },
    upload () { // TODO move to mixin
      let ref = firebase.storage().ref()
      let refChild = ref.child(this.user.uid + '-avatar.jpg')
      refChild.put(this.files[0]).then(snapshot => {
        console.log('uploaded', snapshot)
      })
    }
  }
}
</script>