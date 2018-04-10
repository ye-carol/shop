<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus">-</div>
    <div class="counter-show" >
      <input type="text" v-model="number" @keyup="fixNumber">
    </div>
    <div class="counter-btn" @click="add">+</div>
  </div>
</template>
<script >
  export default {
    name: 'VCounter',
    props:{
      max: {
        type: Number,
        default: 10
      },
      min: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        number: this.min
      }
    },
    methods: {
      fixNumber () {
        let fix
        if (typeof this.number === 'string') {
          fix = Number(this.number.replace(/\D/g, ''))
        } else {
          fix = this.number
        }
        if(fix > this.max) {
          fix = this.max
        }else if (fix < this.min) {
          fix = this.min
        }
        this.number = fix
      },
       add () {
        if (this.number >= this.max) {
          return
        }
        this.number++
      },
      minus () {
        if(this.number <= this.min) {
          return
        }
        this.number--
        console.log(this.number)
      }
    },
    watch: {
      number() {
        this.$emit('on-change', this.number)
      }
    }
  }
</script>
<style scoped>
  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .counter-show {
    float: left;
  }
  .counter-show input {
    width: 30px;
    height: 23px;
    line-height: 23px;
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    outline: none;
    /*text-indent: 4px;*/
    text-align: center;
  }
  .counter-btn {
    float: left;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    text-align: center;
    cursor: pointer;
  }
  .counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }

</style>
