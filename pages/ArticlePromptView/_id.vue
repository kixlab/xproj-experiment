<template>
  <div>
    <article-content :id="id"></article-content>
    <promise-pane :id="id" :isPromptVisible="true"></promise-pane>
    <div class="nextPromiseButtonDiv">
      <b-button @click="nextPromise" variant="primary">다음 공약 보기</b-button>
    </div>
  </div>
</template>

<script>
import PromisePane from '~/components/PromisePane.vue'
import ArticleContent from '~/components/ArticleContent.vue'
export default {
  computed: {
    id: function () {
      return parseInt(this.$route.params.id)
    }
  },
  components: {
    PromisePane,
    ArticleContent
  },
  methods: {
    nextPromise: function () {
      if(this.id == 2) {
        this.$router.push({name: 'PostTest'})
      } else {
        this.$router.push({name: 'ArticlePromptView-id', params: {id: this.id + 1}})
      }
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

