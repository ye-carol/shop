<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections" @click="chosenSelection(index)" :title="item.label" :class="{active: index === nowIndex}">{{item.label}}</li>
    </ul>
  </div>
</template>
<script >
  export default {
    name: 'VChooser',
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
        nowIndex: 0
      }
    },
    methods: {
      chosenSelection (index) {
        this.nowIndex = index
        this.$emit('on-change',this.selections[index])
      }
    }
  }
</script>
<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    margin-right: 5px;
    padding: 0 8px;
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
