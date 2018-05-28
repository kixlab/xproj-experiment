<template>
  <div>
    <b-form @submit="onAddPathClick">
      <span class="promiseTitle">{{promiseTitle}}</span>의
      <b-form-group label="이행 계획" label-for="implementationPlanSelect">
        <b-form-select id="implementationPlanSelect" :options="implementationPlans" v-model="implementationPlan" :plain="true"></b-form-select>
      </b-form-group>
      <b-form-group label="예상되는 효과" label-for="effectInput">
        <b-input-group append="이/가 예상됩니다">
          <b-form-input id="effectInput" placeholder="효과" v-model="effect"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group label="영향받는 사람" label-for="stakeholderInput">
        <b-input-group append="이/가 영향을 받습니다.">
          <b-form-input id="stakeholderInput" placeholder="이해 관계자" v-model="stakeholder"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-button @click="onAddPathClick">추가하기</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    implementationPlans: Array,
    promiseTitle: String
  },
  data: function () {
    return {
      implementationPlan: '',
      effect: '',
      stakeholder: ''
    }
  },
  methods: {
    onAddPathClick: function () {
      // LOG!!!
      this.$emit('add-path', {
        implementationPlan: this.implementationPlan,
        effect: this.effect.trim(),
        stakeholder: this.stakeholder.trim()
      })
    }
  }
}
</script>

<style scoped>
.promiseTitle {
  font-size: 1.2em;
}
b-form-input {
  width: auto;
}
</style>

