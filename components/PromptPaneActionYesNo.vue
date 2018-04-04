<template>
  <div class="promptPaneAction">
    <b-button-group class="yesNoButton">
      <b-button :variant="option !== '찬성한다' ? 'outline-success' : 'success'" @click="onButtonClick('찬성한다')">찬성한다</b-button>
      <b-button :variant="option !== '반대한다' ? 'outline-danger' : 'danger'" @click="onButtonClick('반대한다')">반대한다</b-button>
    </b-button-group>
    <br>
    <b-form-textarea class="reasonTextBox" v-model="text" placeholder="이유를 적어주세요" rows="3"></b-form-textarea>
    <b-btn block @click="onSubmitClick" variant="primary">등록</b-btn>
  </div>
</template>
<script>

export default {
  data: function () {
    return {
      text: '',
      option: ''
    }
  },
  methods: {
    onSubmitClick: function () {
      this.$emit('next-prompt', {text: this.text, option: this.option})
      this.text = ''
    },
    onButtonClick: function (option) {
      this.option = option
    }
  }
}
</script>
<style scoped>
/* .yesNoButtons {
  margin-bottom: 1em;
  margin-top: 1em;
} */

.reasonTextBox {
  margin-top: 0.5em;
}

</style>
