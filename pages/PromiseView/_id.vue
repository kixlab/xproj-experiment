<template>
  <div>
    <promise-pane :id="id" :isPromptVisible="false"></promise-pane>
    <div class="nextPromiseButtonDiv">
      <b-button @click="nextPromise" variant="outline-primary">다음 공약 보기</b-button>
    </div>
  </div>
</template>

<script>
import PromisePane from '~/components/PromisePane.vue'
import db from '~/firebase.js'

export default {
  computed: {
    id: function () {
      return parseInt(this.$route.params.id)
    },
    promisesCount: function () {
      return this.$store.state.promises.length
    }
  },
  components: {
    PromisePane,
  },
  methods: {
    nextPromise: function () {
      db.ref('clicks/' + this.$store.state.userId + '/' + (this.$route.params.id) + '/' + this.$store.state.promptIdx).push(
        {
          name: 'promiseViewNextPromiseButton',
          time: new Date().toLocaleString('ko-KR')
        }
      )
      localStorage.setItem('nextPromiseId', (this.id + 1))
      this.$router.push({name: 'PostTest'})
      // if(this.id >= this.promisesCount - 1) {
      //   this.$router.push({name: 'PostTest'})
      // } else {
      //   this.$store.commit('resetPromptIdx')
      //   this.$router.push({name: 'PromiseView-id', params: {id: this.id + 1}})
      // }
    }
  }
  // async asyncData: function (context) {
  //   let { data } = await axios.get('')
  // }
}
</script>

<style scoped>
.nextPromiseButtonDiv {
  text-align: center;
}
</style>

