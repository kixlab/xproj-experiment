<template>
  <div>
    <b-button v-for="i in maxRating" :key="i" @click="onButtonClick(i)">{{i}}</b-button>
  </div>
</template>
<script>
export default {
  props: {
    maxRating: Number
  },
  methods: {
    onButtonClick: function (i) {
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


