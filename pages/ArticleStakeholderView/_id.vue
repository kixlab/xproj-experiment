<template>
  <div>
    <article-content :id="id"></article-content>
    <promise-pane :id="id" :isPromptVisible="false"></promise-pane>
    <stakeholder-pane :tree-data="treeData" @add-path="onAddPath" ></stakeholder-pane>
    <div class="nextPromiseButtonDiv">
      <b-button @click="nextPromise" variant="outline-primary">다음 공약 보기</b-button>
    </div>
    <div class="progressText">
      {{this.id + 1}}/{{this.promisesCount}}
    </div>
  </div>
</template>

<script>
import PromisePane from '~/components/PromisePane.vue'
import StakeholderPane from '~/components/StakeholderPane.vue'
import ArticleContent from '~/components/ArticleContent.vue'
import { db, fs } from '~/firebase.js'

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
    ArticleContent,
    PromisePane
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
    },
    onAddPath: function (payload) {
      let that = this
      fs.runTransaction(function(transaction) {
        return transaction.get(that.ref).then(function(treeDoc) {
          let treeData = treeDoc.data()

          // find implementation plan
          let implementationPlan = treeData.children.find((child) => {
            return child.name === payload.implementationPlan
          })

          //find effect
          if (!implementationPlan.children) {
            implementationPlan.children = []
          }

          let effect = implementationPlan.children.find((child) => {
            return child.name === payload.effect
          })

          if(!effect) {
            implementationPlan.children.push({
              name: payload.effect,
              children: []
            })
            effect = implementationPlan.children.find((child) => {
              return child.name === payload.effect
            })
          }

          let stakeholder = effect.children.find((child) => {
            return child.name === payload.stakeholder
          })

          if(!stakeholder) {
            effect.children.push({
              name: payload.stakeholder
            })
          }
          console.log(that.treeData)
          transaction.update(that.ref, treeData)
        })
      })
    }
  },
  data: function () {
    return {
      treeData: {
        name: '',
        children: {}
      },
      ref: {}
    }
  },
  mounted: function () {
    let that = this
    fs.collection('stakeholders').where('id', '==', this.id)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
          console.log(doc)
          that.treeData = doc.data()
          that.ref = doc.ref
        })
      })
  },
  destroyed: function () {
    let unsubscribe = fs.collection('stakeholders').where('id', '==', this.id)
      .onSnapshot(() => {})
  }
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

