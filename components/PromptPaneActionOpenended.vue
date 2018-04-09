<template>
  <div class="promptPaneAction">
    <!-- <b-input-group>
      <b-form-input v-model="text"></b-form-input>
      <b-input-group-append>
        <b-btn @click="onButtonClick" variant="primary">등록</b-btn>
      </b-input-group-append>
    </b-input-group> -->
    <b-form-textarea class="reasonTextBox" v-model="text" rows="3"></b-form-textarea>
    <b-btn block @click="onButtonClick" variant="primary">등록</b-btn>
  </div>
</template>
<script>
import db from '~/firebase.js'

export default {
  data: function () {
    return {
      text: ''
    }
  },
  methods: {
    onButtonClick: function () {
      db.ref('clicks/' + this.$store.state.userId + '/' + (this.$route.params.id) + '/' + this.$store.state.promptIdx).push(
        {
          name: 'openendedNextButton',
          time: new Date().toLocaleString('ko-KR')
        }
      )
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


