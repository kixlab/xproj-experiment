<template>
  <div>
    <article-content :id="id"></article-content>
    <stakeholder-pane :id="id"></stakeholder-pane>
    <div class="nextPromiseButtonDiv">
      <b-button @click="nextPromise" variant="outline-primary">다음 공약 보기</b-button>
    </div>
    <div class="progressText">
      {{this.id + 1}}/{{this.promisesCount}}
    </div>
  </div>
</template>

<script>
import StakeholderPane from '~/components/StakeholderPane.vue'
import ArticleContent from '~/components/ArticleContent.vue'
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
    StakeholderPane,
    ArticleContent
  },
  methods: {
    nextPromise: function () {
      db.ref('clicks/' + this.$store.state.userId + '/' + (this.$route.params.id) + '/' + this.$store.state.promptIdx).push(
        {
          name: 'articleStakeholderViewNextPromiseButton',
          time: new Date().toLocaleString('ko-KR')
        }
      )
      localStorage.setItem('nextPromiseId', (this.id + 1))
      this.$router.push({name: 'PostTest'})
      // if(this.id >= this.promisesCount - 1) {
      //   this.$router.push({name: 'PostTest'})
      // } else if (this.id === 1) {
      //   this.$store.commit('resetPromptIdx')
      //   this.$router.push({name: 'PromptView-id', params: {id: this.id + 1}})
      // } else {
      //   this.$store.commit('resetPromptIdx')
      //   this.$router.push({name: 'ArticlePromptView-id', params: {id: this.id + 1}})
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
.progressText {
  text-align: center;
  font-size: 0.8em;
  margin-bottom: 1em;
  margin-top: 1em;
}
</style>

