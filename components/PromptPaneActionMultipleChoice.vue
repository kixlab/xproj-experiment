<template>
  <div>
    <b-button v-for="choice in choices" :key="choice" :pressed="choicesSelected.includes(choice)" @click="onChoiceClick(choice)">{{choice}}</b-button>

    <b-button @click="$emit('next-prompt', { choicesSelected: choicesSelected})">다음</b-button>
  </div>
</template>
<script>
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


