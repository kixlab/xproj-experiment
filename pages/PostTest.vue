<template>
  <div class="postTest">
    <p>오늘 실험은 모두 끝났습니다. 참여해주셔서 감사합니다. 내일 안내드릴 2일차 실험에도 참여해주세요! </p>
      
    <!-- <p>마지막으로, 실험 후 <a :href="surveyTarget" target="_blank"><span class="userId">설문조사</span></a>에 응답해주세요.</p>

    <p>참가자 번호는 <span class="userId">{{userId}}</span> 입니다.</p>

    <p>실험에 참여해주셔서 감사합니다!</p> -->
  </div>
</template>
<script>
import db from '~/firebase.js'
export default {
  fetch: function ({store, params}) {
    db.ref('clicks/' + store.state.userId + '/expEnd').push(
      {
        name: 'endExperimentPage',
        time: new Date().toLocaleString('ko-KR')
      }
    )
  },
  computed: {
    userId: function () {
      return this.$store.state.userId
    },
    surveyTarget: function () {
      // if (this.userId % 3 === 0) {
      //   return 'https://goo.gl/forms/bow3L13Bbg68earz2'
      // } else if (this.userId % 3 === 1) {
      //   return 'https://goo.gl/forms/ZwR3R58jEJUSeCB62'
      // } else {
      //   return 'https://goo.gl/forms/U45JDBPOkDaAnotN2'
      // }
      return 'https://goo.gl/forms/zdUYC5NvGMf4U7gs2'
    }
  }
}
</script>
<style scoped>
.userId {
  font-size: 1.5em;
  /* font-weight: bold; */
}
.postTest {
  text-align: left;
  padding: 2em;
}
</style>
