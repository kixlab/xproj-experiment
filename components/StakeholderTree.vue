<template>
  <div class="mySVGContainer" ref="mySVGContainer">
    <svg :width="svgWidth" :height="svgHeight" class="mySVG" >
      <transition-group tag="g" name="line">
        <path v-for="link in links" class="link" v-bind:key="link.id" v-bind:d="link.d" v-bind:style="link.style"></path>
      </transition-group>

      <transition-group tag="g" name="list">
        <g class="node" v-for="node in nodes" v-bind:key="node.id" v-bind:style="node.style" v-bind:class="[node.className, {'highlight': node.highlight}]">
          <!-- Circles for each node -->  
          <circle v-bind:r="node.r" v-bind:style="{'fill': '#bfbfbf'}" ></circle>
          <!-- Finally, text labels -->
          <text v-bind:dx="node.textpos.x" v-bind:dy="node.textpos.y" v-bind:style="node.textStyle">{{ node.text }}</text>
        </g>
      </transition-group>
    </svg>
  </div>
</template>
<script>
import * as d3 from 'd3';

export default {
  name: 'StakeholderTree',
  components: {},
  mounted: function () {
    // this.svgWidth = this.$refs.mySVGContainer.clientWidth
    // this.svgHeight = this.$refs.mySVGContainer.clientHeight
    // this.$watch(() => {
    //   return {
    //     width: this.$refs.mySVGContainer.clientWidth,
    //     height: this.$refs.mySVGContainer.clientHeight
    //   }
    // }, ({width, height}) => {
    //   alert('asdf')
    //   this.svgWidth = width
    //   this.svgHeight = height
    // })
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.svgWidth = this.$refs.mySVGContainer.clientWidth
        this.svgHeight = this.$refs.mySVGContainer.clientHeight
      })
    })
  },
  computed: {
    root: function() {
      return this.tree(d3.hierarchy(this.treeData));
    },
    tree: function() {
      return d3.tree().size([this.treeWidth, this.treeHeight]);
    },
    nodes: function() {
      let that = this
      if (this.root) {
        return this.root.descendants().map(function(d) {
          return {
            id: d.data.name,
            r: '0.5em',
            className: `node ${d.children ? ' node--internal' : ' node--leaf'}`,
            text: d.data.name,
            // highlight:
            //   d.id.toLowerCase().indexOf(that.search.toLowerCase()) != -1 &&
            //   that.search != '',
            style: {
              transform: `translate(${d.x + that.margin.left}px,${d.y + that.margin.top}px)`
            },
            textpos: {
              x: d.children ? '-0.3em' : '0.3em',
              y: d.children ? '-0.5em' : '0.5em'
            },
            textStyle: {
              textAnchor: d.children ? 'end' : 'start'
            }
          }
        })
      }
    },
    links: function() {
      let that = this
      if (this.root) {
        return this.root.descendants().slice(1).map(function(d) {
          return {
            d: `M${d.x + that.margin.left},${d.y + that.margin.top}C${d.x + that.margin.left},${(d.y + d.parent.y) / 2 + that.margin.top} ${d.parent.x + that.margin.left},${(d.y + d.parent.y) / 2 + that.margin.top} ${d.parent.x + that.margin.left},${d.parent.y + that.margin.top}`,
            id: `M${d.x + that.margin.left},${d.y}C${d.parent.x + 100},${d.y} ${d.parent.x + 100},${d.parent.y} ${d.parent.x},${d.parent.y}`,
            style: {
              stroke: '#000000'
            }
          }
        })
      }
    },
    treeWidth: function() {
      return this.svgWidth - this.margin.left - this.margin.right;
    },
    treeHeight: function() {
      return this.svgHeight - this.margin.top - this.margin.bottom;
    }
  },
  // methods: {
  //   select: function (index, node) {
  //     this.selected = index
  //   }
  // },
  data: function() {
    return {
      selected: 0,
      treeData: {
        name: '도심 광폭도로 다이어트 추진',
        children: [
          {
            name: '도심 내 차로 수 축소',
            children: [
              { name: '교통체증 심화' },
              { name: '도심 내 차량 수 감소' }
            ]
          },
          {
            name: '보도 및 자전거도로 확대',
            children: [
              {
                name: '걷기 좋은거리',
                children: [
                  {
                    name: '보행자'
                  }
                ]
              },
              { name: 'grandson4' }
            ]
          }
        ]
      },
      margin: {
        top: 20,
        right: 10,
        bottom: 20,
        left: 10
      },
      svgWidth: 960,
      svgHeight: 960
    }
  }
}
</script>

<style scoped>
.mySVGContainer {
  width: 100%;
  height: 20vh;
}


.node {
  opacity: 1;
}

.node circle {
  fill: #999;
  cursor: pointer;
}

.node text {
  font: 1em sans-serif;
  cursor: pointer;
}

.node--internal circle {
  fill: #555;
}

.node--internal text {
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
}

.link {
  fill: none;
  stroke: #555;
  stroke-opacity: 0.4;
  stroke-width: 1.5px;
  stroke-dasharray: 1000;
}

.node:hover {
  pointer-events: all;
  stroke: #ff0000;
}

.node.highlight {
  fill: red;
}

label {
  display: block;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.line-enter-active, .line-leave-active {
  transition: all 2s;
  stroke-dashoffset: 0;
}
.line-enter, .line-leave-to /* .list-leave-active for <2.1.8 */ {
  stroke-dashoffset: 1000;
}
</style>
