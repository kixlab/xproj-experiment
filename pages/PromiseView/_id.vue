<template>
  <div>
    <promise-pane :id="id" :isPromptVisible="false"></promise-pane>
    <div class="nextPromiseButtonDiv">
      <b-button @click="nextPromise" variant="primary">다음 공약 보기</b-button>
    </div>
  </div>
</template>

<script>
import PromisePane from '~/components/PromisePane.vue'
export default {
  computed: {
    id: function () {
      return parseInt(this.$route.params.id)
    }
  },
  components: {
    PromisePane,
  },
  methods: {
    nextPromise: function () {
      if(this.id == 2) {
        this.$router.push({name: 'PostTest'})
      } else {
        this.$router.push({name: 'PromiseView-id', params: {id: this.id + 1}})
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

