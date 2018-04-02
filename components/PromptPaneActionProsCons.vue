<template>
  <div>
    <div class="buttonHeader">
      찬성 의견
    </div>
    <b-button-group vertical>
      <b-button block variant="outline-success" v-for="pro in pros" :key="pro" :pressed="choicesSelected.includes(pro)" @click="onProClick(pro)">{{pro}}</b-button>
    </b-button-group>
    <div class="buttonHeader">
      반대 의견
    </div>
    <b-button-group vertical>
      <b-button block variant="outline-danger" v-for="con in cons" :key="con" :pressed="choicesSelected.includes(con)"  @click="onConClick(con)">{{con}}</b-button>
    </b-button-group>
    <br/>
    <b-button class="nextButton" @click="$emit('next-prompt', { choicesSelected: choicesSelected })">다음</b-button>
  </div>
</template>
<script>
export default {
  props: {
    pros: Array,
    cons: Array
  },
  methods: {
    onProClick: function (pro) {
      if(this.choicesSelected.includes(pro)){
        let idx = this.choicesSelected.indexOf(pro)
        this.choicesSelected.splice(idx, 1)
      } else {
        this.choicesSelected.push(pro)
      }
    },
    onConClick: function (con) {
      if(this.choicesSelected.includes(con)){
        let idx = this.choicesSelected.indexOf(con)
        this.choicesSelected.splice(idx, 1)
      } else {
        this.choicesSelected.push(con)
      }
    }
  },
  data: function () {
    return {
      choicesSelected: []
    }
  }
}
</script>
<style scoped>
.nextButton {
  margin: 1em;
}

.buttonHeader {
  font-size: 1.1em;
  text-align: left;
}

.btn-group-vertical {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  width: 100%;
}

.btn-group-vertical button {
  text-align: left;
  padding-left: 2em;
}
</style>


