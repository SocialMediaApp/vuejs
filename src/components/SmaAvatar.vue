<template>
  <img class="avatar" :src="avatar" v-if="avatar">
  <v-gravatar class="avatar" :email="uid" v-else-if="!avatar && !loading"/>
</template>

<script>
import storage from '../mixins/storage'

export default {
  mixins: [storage],
  props: ['uid'],
  data: () => {
    return {
      loading: true
    }
  },
  asyncComputed: {
    avatar () {
      return storage.getAvatarUrl(this.uid).then(url => {
        this.loading = false
        return url
      })
    }
  }
}
</script>
