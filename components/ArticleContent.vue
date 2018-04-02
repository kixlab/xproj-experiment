<template>
  <div class="articleContent">
    <h3>{{articleTitle}}</h3>
    <p v-for="paragraph in articleContents" :key="paragraph">
      {{paragraph}}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    id: Number
  },
  computed: {
    articleTitle: function () {
      return this.$store.state.articles[this.id].title
    },
    articleContents: function () {
      return this.$store.state.articles[this.id].content.split('\n')
    }
  },
  data: function () {
    return {
      content: 'aaaaa'
    }
  }
}
</script>
<style scoped>
.articleContent {
  margin-top: 5em;
}

h3 {
  margin-bottom: 0.6em;
}
</style>
