<template>
  <div class="postTest">
    <p>본 실험은 모두 종료되었습니다. 마지막으로, 실험 후 <a :href="surveyTarget" target="_blank"><span class="userId">설문조사</span></a>에 응답해주세요.</p>

    <p>참가자 번호는 <span class="userId">{{userId}}</span> 입니다.</p>

    <p>실험에 참여해주셔서 감사합니다!</p>
  </div>
</template>
<script>
export default {
  computed: {
    userId: function () {
      return this.$store.state.userId
    },
    surveyTarget: function () {
      if (this.userId % 3 === 0) {
        return 'https://goo.gl/forms/bow3L13Bbg68earz2'
      } else if (this.userId % 3 === 1) {
        return 'https://goo.gl/forms/ZwR3R58jEJUSeCB62'
      } else {
        return 'https://goo.gl/forms/U45JDBPOkDaAnotN2'
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
.postTest {
  text-align: left;
  padding: 2em;
}
</style>
