<template>
  <div>
    <div v-if="!isAnswered">
      <b-button class="budgetButton" v-for="option in options" :key="option" :variant="selectedBudget === option ? 'primary' : 'primary-outline'" @click="onBudgetClick(option)">{{option}}억원</b-button>
      <b-input-group>
        <b-form-input v-model="text" placeholder="이유를 적어주세요"></b-form-input>
        <b-input-group-append>
          <b-btn @click="onReasonClick" variant="primary">등록</b-btn>
        </b-input-group-append>
      </b-input-group>
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
      selectedBudget: 0,
      text: ''
    }
  },
  methods: {
    onBudgetClick: function (option) {
      this.selectedBudget = option
    },
    onReasonClick: function () {
      this.isAnswered = true
    },
    onNextClick: function () {
      this.$emit('next-prompt', { option: this.selectedBudget, text: this.text })
    }
  }
}
</script>
<style scoped>

.budgetButton {
  margin: 1em;
}
</style>


