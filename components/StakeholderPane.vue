<template>
  <div>
    <stakeholder-tree></stakeholder-tree>
  </div>
</template>

<script>
import StakeholderTree from '~/components/StakeholderTree.vue'
export default {
  name: 'StakeholderPane',
  props: {
    id: Number
  },
  components: {
    StakeholderTree
  }
}
</script>

<style scoped>

</style>
