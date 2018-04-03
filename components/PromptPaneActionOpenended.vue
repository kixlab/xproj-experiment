<template>
  <div class="promptPaneAction">
    <b-input-group>
      <b-form-input v-model="text"></b-form-input>
      <b-input-group-append>
        <b-btn @click="onButtonClick" variant="primary">등록</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script>

export default {
  data: function () {
    return {
      text: ''
    }
  },
  methods: {
    onButtonClick: function () {
      this.$emit('next-prompt', {text: this.text})
      this.text = ''
    }
  }
}
</script>
<style scoped>
/* div {
  text-align: center;
  margin-bottom: 0.6em;
} */
</style>


