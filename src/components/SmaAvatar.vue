<template>
  <img class="avatar" :src="avatar" v-if="avatar">
  <v-gravatar class="avatar" :email="uid" v-else/>
</template>

<script>
import storage from '../mixins/storage'

export default {
  mixins: [storage],
  props: ['uid'],
  asyncComputed: {
    avatar () {
      return storage.getAvatarUrl(this.uid)
    }
  }
}
</script>
