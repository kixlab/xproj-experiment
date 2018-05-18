<template>
  <div>
    <stakeholder-tree :tree-data="treeData"></stakeholder-tree>
    <stakeholder-pane-action-add-path @add-path="onAddPath" :implementation-plans="implementationPlans"></stakeholder-pane-action-add-path>
  </div>
</template>

<script>
import StakeholderTree from '~/components/StakeholderTree.vue'
import StakeholderPaneActionAddPath from '~/components/StakeholderPaneActionAddPath.vue'
// import db from './firebase.js'

export default {
  name: 'StakeholderPane',
  props: {
    treeData: Object
  },
  components: {
    StakeholderTree,
    StakeholderPaneActionAddPath
  },
  computed: {
    implementationPlans: function () {
      return Object.values(this.treeData.children).map((node) => {
        return node.name
      })
    }
  },
  data: function () {
    return {
      // treeData: {
      //   name: '도심 광폭도로 다이어트 추진',
      //   children: [
      //     {
      //       name: '도심 내 차로 수 축소',
      //       children: [
      //         { name: '교통체증 심화' },
      //         { name: '도심 내 차량 수 감소' }
      //       ]
      //     },
      //     {
      //       name: '보도 및 자전거도로 확대',
      //       children: [
      //         {
      //           name: '걷기 좋은거리',
      //           children: [
      //             {
      //               name: '보행자'
      //             }
      //           ]
      //         },
      //         { name: 'grandson4' }
      //       ]
      //     }
      //   ]
      // },
    }
  },
  methods: {
    onAddPath: function (payload) {
      this.$emit('add-path', payload)
      // // find implementation plan
      // let implementationPlan = this.treeData.children.find((child) => {
      //   return child.name === payload.implementationPlan
      // })
      // if (!implementationPlan) {
      //   return
      // }
      
      // //find effect
      // let effect = implementationPlan.children.find((child) => {
      //   return child.name === payload.effect
      // })

      // if(!effect) {
      //   implementationPlan.children.push({
      //     name: payload.effect,
      //     children: []
      //   })
      //   effect = implementationPlan.children.find((child) => {
      //     return child.name === payload.effect
      //   })
      // }

      // let stakeholder = effect.children.find((child) => {
      //   return child.name === payload.stakeholder
      // })

      // if(!stakeholder) {
      //   effect.children.push({
      //     name: payload.stakeholder
      //   })
      // }
    }
  }
}
</script>

<style scoped>

</style>
