<template>
  <div>
    <b-button v-for="option in options" :key="option" @click="onButtonClick(option)">{{option}}</b-button>
  </div>
</template>
<script>
import db from '~/firebase.js'

export default {
  props: {
    options: Array
  },
  methods: {
    onButtonClick: function (option) {
      db.ref('clicks/' + this.$store.state.userId + '/' + (this.$route.params.id) + '/' + this.$store.state.promptIdx).push(
        {
          name: 'optionsOptionButton',
          value: option,
          time: new Date().toLocaleString('ko-KR')
        }
      )
      this.$emit('next-prompt', { option: option })
    }
  }
}
</script>
<style scoped>

button {
  margin: 1em;
}
</style>


