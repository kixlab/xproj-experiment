<template>
  <div>
    <b-form-group id="implementationPlan">
      <b-form-select :options="implementationPlans" v-model="implementationPlan"></b-form-select>
    </b-form-group>
    <b-form-input placeholder="효과" v-model="effect"></b-form-input>
    <b-form-input placeholder="이해 관계자" v-model="stakeholder"></b-form-input>
    <b-button @click="onAddPathClick">가지 추가하기</b-button>
  </div>
</template>

<script>
export default {
  props: {
    implementationPlans: Array
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
        effect: this.effect,
        stakeholder: this.stakeholder
      })
    }
  }
}
</script>

<style scoped>

</style>

