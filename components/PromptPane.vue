<template>
  <div>
    <div v-if="endOfPrompts" class="prompt">
      질문에 모두 답하셨습니다. 다음 공약으로 넘어가주세요!
    </div>
    <div v-else>
      <div class="prompt">
        <p v-for="line in promptLines" :key="line" class="promptLines">
          {{line}}
        </p>
      </div>
      <div class="promptPaneAction">
        <prompt-pane-action-openended v-if="prompt.type === 'openended'" @next-prompt="onNextPrompt"></prompt-pane-action-openended>
        <prompt-pane-action-options v-else-if="prompt.type === 'options'" :options="prompt.options" @next-prompt="onNextPrompt"></prompt-pane-action-options>
        <prompt-pane-action-rating v-else-if="prompt.type === 'rating'" :max-rating="prompt.maxRating" @next-prompt="onNextPrompt"></prompt-pane-action-rating>
      </div>
    </div>
  </div>
</template>

<script>
import PromptPaneActionOpenended from '~/components/PromptPaneActionOpenended.vue'
import PromptPaneActionOptions from '~/components/PromptPaneActionOptions.vue'
import PromptPaneActionRating from '~/components/PromptPaneActionRating.vue'
import db from '~/firebase.js'

export default {
  components: {
    PromptPaneActionOpenended,
    PromptPaneActionOptions,
    PromptPaneActionRating
  },
  computed: {
    prompts: function () {
      return this.$store.state.prompts
    },
    prompt: function () {
      return this.prompts[this.promptIdx]
    },
    promptLines: function () {
      return this.prompt.promptContent.split('\n')
    },
    endOfPrompts: function () {
      return this.promptIdx >= this.prompts.length
    }
  },
  data: function () {
    return {
      promptIdx: 0,
    }
  },
  methods: {
    onNextPrompt: function (payload) {
      payload.prompt = this.prompt.promptContent
      db.ref('responses/' + this.$store.state.userId + '/' + this.$route.params.id + '/' + this.promptIdx).set(payload)
      this.promptIdx += 1
    }
  }
}
</script>
<style scoped>
.promptLines {
  margin: 0;
}
.prompt {
  margin-top: 0.6em;
  margin-bottom: 0.6em;
}
.promptPaneAction {
  text-align: center;
  margin-bottom: 1.2em;
}
</style>


