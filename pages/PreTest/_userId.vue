<template>
  <div class="preTest">
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
</template>
<script>
export default {
  computed: {
    userId: function () {
      return this.$route.params.userId
    },
    isKeyCorrect: function () {
      return true
      // return 'internet' == this.checkKey.toLowerCase().trim()
    }
  },
  fetch: function ({store, params}) {
    store.commit('setUserId', {userId: params.userId})
  },
  data: function () {
    return {
      checkKey: ''
    }
  },
  methods: {
    startExperiment: function () {
      // if(this.userId % 3 === 2) {
      //   this.$router.push({name: 'ArticlePromptView-id', params: {id: 0}})
      // } else if (this.userId % 3 === 1) {
      this.$router.push({name: 'PromptView-id', params: {id: 0}})
      // } else {
      //   this.$router.push({name: 'PromiseView-id', params: {id: 0}})
      // }
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
