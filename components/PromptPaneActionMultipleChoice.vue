<template>
  <div>
    <b-button v-for="choice in choices" :key="choice" :pressed="choicesSelected.includes(choice)" @click="onChoiceClick(choice)">{{choice}}</b-button>

    <b-button @click="onNextClick">다음</b-button>
  </div>
</template>
<script>
import db from '~/firebase.js'

export default {
  props: {
    choices: Array,
  },
  methods: {
    onChoiceClick: function (choice) {
      if(this.choicesSelected.includes(choice)){
        let idx = this.choicesSelected.indexOf(choice)
        this.choicesSelected.splice(idx, 1)
      } else {
        this.choicesSelected.push(choice)
      }
      db.ref('clicks/' + this.$store.state.userId + '/' + (this.$route.params.id) + '/' + this.$store.state.promptIdx).push(
        {
          name: 'multipleChoiceChoiceButton',
          value: choice,
          time: new Date().toLocaleString('ko-KR')
        }
      )
    },
    onNextClick: function () {
      db.ref('clicks/' + this.$store.state.userId + '/' + (this.$route.params.id) + '/' + this.$store.state.promptIdx).push(
        {
          name: 'multipleChoiceNextButton',
          time: new Date().toLocaleString('ko-KR')
        }
      )
      this.$emit('next-prompt', { choicesSelected: this.choicesSelected})
    }
  },
  data: function () {
    return {
      choicesSelected: [],
    }
  }
}
</script>
<style scoped>

button {
  margin: 1em;
}
</style>


