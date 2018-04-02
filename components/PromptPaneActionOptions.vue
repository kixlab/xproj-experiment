<template>
  <div>
    <b-button v-for="option in options" :key="option" @click="onButtonClick(option)">{{option}}</b-button>
  </div>
</template>
<script>
export default {
  props: {
    options: Array
  },
  methods: {
    onButtonClick: function (option) {
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


