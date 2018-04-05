<template>
  <div>
    <div v-if="!isAnswered">
      <b-button class="budgetButton" v-for="option in options" :key="option" @click="onBudgetClick(option)" :variant="selectedBudget === option ? 'primary' : 'outline-primary'">{{option}}억원</b-button>
      <!-- <b-input-group>
        <b-form-input v-model="text" placeholder="이유를 적어주세요"></b-form-input>
        <b-input-group-append>
          <b-btn @click="onReasonClick" variant="primary">등록</b-btn>
        </b-input-group-append>
      </b-input-group> -->
      <b-form-textarea class="reasonTextBox" v-model="text" placeholder="이유를 적어주세요" rows="3"></b-form-textarea>
      <b-btn block @click="onReasonClick" variant="primary">등록</b-btn>
    </div>
    <div v-else>
      이 공약에 실제 사용된 예산은 {{budgetString}}입니다. 
      <br>
      <b-button class="nextButton" @click="onNextClick" variant="primary">다음 질문 보기</b-button>
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
      let int = Math.floor(this.budget)
      let fraction = (this.budget * 10 - int * 10) * 1000
      if (int === 0 && fraction !== 0) {
        return `${fraction}만원`
      } else if (int !== 0 && fraction === 0) {
        return `${int}억원`
      } else if (int !== 0 && fraction !== 0) {
        return `${int}억 ${fraction}만원`
      } else {
        return ''
      }
    }
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
  margin: 1em 0.5em;
}

.nextButton {
  margin-top: 1em;
}
</style>


