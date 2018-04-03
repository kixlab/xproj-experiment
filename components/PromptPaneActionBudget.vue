<template>
  <div>
    <div v-if="!isAnswered">
      <b-button v-for="option in options" :key="option" @click="onBudgetClick(option)">{{option}}억원</b-button>
    </div>
    <div v-else>
      이 공약에 실제 사용된 예산은 {{budget}}억원입니다. 
      <br>
      <b-button @click="onNextClick">다음</b-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: Array,
    budget: Number
  },
  data: function () {
    return {
      isAnswered: false,
      selectedBudget: 0
    }
  },
  methods: {
    onBudgetClick: function (option) {
      this.selectedBudget = option
      this.isAnswered = true
    },
    onNextClick: function () {
      this.$emit('next-prompt', { option: this.selectedBudget })
    }
  }
}
</script>
<style scoped>

button {
  margin: 1em;
}
</style>


