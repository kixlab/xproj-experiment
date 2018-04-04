<template>
  <b-row class="justify-content-md-center">
    <b-col cols="12" lg="8">
      <div class="promisePane">
        <div class="prompt">이 기사와 연관된 박원순 서울시장의 2014년 선거 공약입니다.</div>
        <div class="promiseTitle">
          {{promise.title}}
        </div>
        <div class="promiseContent">
          <dl>
            <dt>공약 목적</dt>
            <dd v-for="goal in promise.goals" :key="goal">{{goal}}</dd>
            <dt>주요 정책</dt>
            <dd v-for="plan in promise.plans" :key="plan">{{plan}}</dd>
            <dt>관련 기사</dt>
            <dd v-for="article in promise.links" :key="article.title">
              <a :href="article.link" target="_blank" @click="onLinkClick(article.title)">{{article.title}}</a>
            </dd>
          </dl>
        </div>
        <prompt-pane v-if="isPromptVisible" :promise="promise"></prompt-pane>
        <!-- <div class="promptContent">{{promptContent}}</div> -->
      </div>
    </b-col>
  </b-row>
</template>
<script>
import PromptPane from '~/components/PromptPane.vue'
import db from '~/firebase.js'

export default {
  props: {
    isPromptVisible: Boolean,
    id: Number
  },
  components: {
    PromptPane
  },
  computed: {
    promise: function () {
      return this.$store.state.promises[this.id]
    }
  },
  methods: {
    onLinkClick: function (title) {
      store.commit('accessLink', this.id)
    }
  }
}
</script>
<style scoped>

.promisePane {
  border: 1px solid #DBDBDB;
  margin-top: 10%;
  margin-bottom: 10%;
  padding-left: 3em;
  padding-right: 3em;
}

.promiseTitle {
  margin-top: 0.6em;
  margin-bottom: 0.6em;
  border: 1px solid #DBDBDB;
  padding: 0.3em 0.8em;
  color: rgb(2, 84, 125);
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
}

.prompt {
  margin-top: 0.6em;
  margin-bottom: 0.6em;
}

dd {
  padding-left: 2em;
}
</style>

