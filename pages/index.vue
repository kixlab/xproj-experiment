<template>
  <div class="preTest" v-if="isExperimentAvailable">
    <p>
      저희 실험에 참여해주셔서 감사합니다. 이 실험은 선거 공약에 관한 정보를 효과적으로 전달할 수 있는 인터페이스에 대한 연구의 일환입니다.
      이 실험은 본 실험과 실험 전/후의 설문조사로 이루어져 있습니다. 실험과 설문조사를 모두 합쳐 약 30-40분 정도 소요될 예정입니다.
    </p>
    
    <p>실험을 시작하기 전, <a href="https://goo.gl/forms/dTBO0izHS3sdiZyw1" target="_blank"><span class="userId">설문조사</span></a>에 먼저 응답해주세요.</p>
    <p>참가자 번호는 <span class="userId">{{userId}}</span>번 입니다.</p>

    <p>
      실험을 시작하시면, 박원순 서울시장의 2014년 지방선거 공약 세 가지를 차례대로 보시게 됩니다.
      인터페이스를 사용하시면서 공약 내용을 자유롭게 탐색하시면 됩니다. 
      공약에 대해 궁금한 점이 더 있으시다면, 인터넷 검색 등 다른 방법을 통해 공약에 대한 정보를 더 찾아보셔도 좋습니다.
    </p>
    <p>설문조사를 마치셨으면, 아래 텍스트 박스에 비밀번호를 넣고, '시작하기' 버튼을 눌러 실험을 시작해주세요.</p>
    <div class="startExperimentDiv">
      <b-input-group>
        <b-form-input v-model="checkKey" placeholder="비밀번호"></b-form-input>
        <b-input-group-append>
          <b-button @click="startExperiment" :disabled="!isKeyCorrect" variant="primary">시작하기</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
  <div class="preTest" v-else-if="isExperimentFull">
    <p>
      참가자 모집이 완료되었습니다. 관심 가져주셔서 감사합니다!
    </p>
    <stakeholder-tree></stakeholder-tree>
  </div>
  <div class="preTest" v-else>
    <p>
      참가자 ID를 받아오는 중 오류가 발생했습니다. 페이지를 새로고침 해주세요!
    </p>
  </div>
</template>
<script>
import db from '~/firebase.js'
import { hri } from 'human-readable-ids'
export default {
  computed: {
    userId: function () {
      return this.$store.state.userId
    },
    isKeyCorrect: function () {
      return 'promise' == this.checkKey.toLowerCase().trim()
    },
    expCondition: function () {
      return this.$store.state.expCondition
    },
    isExperimentAvailable: function () {
      return (this.$store.state.expCondition >= 0)
    },
    isExperimentFull: function () {
      return this.$store.state.expCondition == -1
    }
  },
  fetch: function ({store, params}) {
    if(localStorage.getItem('userId') && localStorage.getItem('expCondition')) {
      const userId = localStorage.getItem('userId')
      const expCondition = localStorage.getItem('expCondition')
      store.commit('setUserId', {userId: userId})
      store.commit('setExpCondition', {expCondition: expCondition})
    } else {
      db.ref('counts').transaction(function (c) {
        if (c){
          console.log(c)
          const max = Math.max(...c)
          if(max > 0) {
            const idx = c.indexOf(max)
            store.commit('setExpCondition', {expCondition: idx})
            localStorage.setItem('expCondition', idx)
            c[idx] = max - 1
          } else {
            store.commit('setExpCondition', {expCondition: -1})
            localStorage.setItem('expCondition', -1)
          }
        }
        return c
      }, function(err) {
        if(!err) {
          db.ref(`conditions`).transaction(function(c) {
            if(c) {
              console.log(c)
              while(true) {
                let userId = hri.random()
                if (!Object.keys(c).includes(userId)){
                  c[userId] = store.state.expCondition
                  store.commit('setUserId', {userId: userId})
                  localStorage.setItem('userId', userId)
                  break
                }
              }
            } else {
              c = {}
              let userId = hri.random()
              c[userId] = store.state.expCondition
              store.commit('setUserId', {userId: userId})
              localStorage.setItem('userId', userId)
            }
            return c
          })
        } else {
          store.commit('setExpCondition', {expCondition: -2})
        }
      })

    }
  },
  data: function () {
    return {
      checkKey: ''
    }
  },
  methods: {
    startExperiment: function () {
      db.ref('clicks/' + this.$store.state.userId + '/expStart').push(
        {
          name: 'startExperimentButton',
          time: new Date().toLocaleString('ko-KR')
        }
      )
      const nextPromiseId = localStorage.getItem('nextPromiseId') || 0
      console.log(nextPromiseId)
      if(this.expCondition == 0){
        this.$router.push({name: 'PromiseView-id', params: {id: nextPromiseId}})
      } else if( this.expCondition == 1 || this.expCondition == 2) {
        this.$router.push({name: 'ArticlePromptView-id', params: {id: nextPromiseId }})
      } else if (this.expCondition == 3 || this.expCondition == 4) {
        this.$router.push({name: 'PromptView-id', params: {id: nextPromiseId}})
      }
    }
  }
}
</script>
<style scoped>
.userId {
  font-size: 1.5em;
  /* font-weight: bold; */
}

.preTest {
  text-align: left;
  padding: 2em;
}

.startExperimentDiv {
  text-align: center;
}
</style>
