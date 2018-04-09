<template>
  <div>
    <b-button v-for="i in maxRating" :key="i" @click="onButtonClick(i)">{{i}}</b-button>
  </div>
</template>
<script>
import db from '~/firebase.js'

export default {
  props: {
    maxRating: Number
  },
  methods: {
    onButtonClick: function (i) {
      db.ref('clicks/' + this.$store.state.userId + '/' + (this.$route.params.id) + '/' + this.$store.state.promptIdx).push(
        {
          name: 'ratingsRatingButton',
          value: i,
          time: new Date().toLocaleString('ko-KR')
        }
      )
      this.$emit('next-prompt', {rating: i})
    }
  }
}
</script>
<style scoped>
div {
  text-align: center;
  margin-bottom: 0.6em;
}
b-button {
  margin: 0.1em;
}
</style>


