<template>
  <div class="selection-component">
    <div class="selection-show" @click="toggleDrop">
      <span>{{selections[nowIndex].label}}</span>
      <div class="arrow"></div>
    </div>
    <div class="selection-list" v-if="isDrop">
      <ul>
        <li v-for="(item, index) in selections" @click="chooseSelection(index)">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script >
import {eventBus} from '../../eventBus'
  export default {
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    data () {
      return {
        isDrop: false,
        nowIndex: 0
      }
    },
    mounted (){
      eventBus.$on('reset-component', () => {
        this.isDrop = false
      })
    },
    methods: {
      toggleDrop (event) {
        event.stopPropagation()
        eventBus.$emit('reset-component')
        this.isDrop = !this.isDrop
        console.log(this.isDrop)

      },
      chooseSelection (index) {
        this.nowIndex = index
        // this.isDrop = false
        this.$emit('on-change', this.selections[index])
      }
    }
  }
</script>
<style scoped>
  .selection-component {
    position: relative;
    display: inline-block;
  }
  .selection-show {
    display: inline-block;
    position: relative;
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    cursor: pointer;
    border-radius: 3px;
    background: #fff;
  }
  .selection-show .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: -14px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #e3e3e3;
    vertical-align: middle;
  }
  .selection-list {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 25px;
    width: 100%;
    z-index: 5;
    background: #fff;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
  }
  .selection-list li {
    padding: 5px 15px 5px 10px;
    border-left: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    cursor: pointer;
    background: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
  .selection-list li:hover {
    background: #e3e3e3;
  }
</style>
