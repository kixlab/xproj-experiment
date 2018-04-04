<template>
  <div>
    <div v-if="!isAnswered">
      <b-button v-for="option in options" :key="option" @click="onBudgetClick(option)">{{option}}억원</b-button>
    </div>
    <div v-else>
      이 공약에 실제 사용된 예산은 {{budgetString}}입니다. 
      <br>
      <b-button @click="onNextClick" variant="primary">다음 질문 보기</b-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: Array,
    budget: Number
  },
  computed: {
    budgetString: function () {
      let int = Math.floor(budget)
      let fraction = Math.floor((budget - int) * 1000)
      if (int === 0 && fraction !== 0) {
        return `${fraction}천만원`
      } else if (int !== 0 && fraction === 0) {
        return `${int}억원`
      } else if (int !== 0 && fraction !== 0) {
        return `${int}억 ${fraction}천만원`
      } else {
        return ''
      }
    }
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


