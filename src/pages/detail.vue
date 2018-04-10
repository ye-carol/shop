<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <img :src="productIcon">
          <ul>
            <router-link v-for="item in products" :to="{path: item.path}" active-class="active" tag="li">{{item.name}}</router-link>
          </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script >
  export default {
    name: 'DetailPage',
    data () {
      return {
        products: [
          {
            name: '数据统计',
            path: 'account',
            icon: require('../assets/images/1.png'),
            active: false
          },
          {
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            name: '流量分析',
            path: 'analyze',
            active: false
          },
          {
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        imgMap: {
          '/detail/account': require("../assets/images/1.png"),
          '/detail/forecast': require("../assets/images/2.png"),
          '/detail/analyze': require("../assets/images/3.png"),
          '/detail/publish': require("../assets/images/4.png")
        }
      }
    },
    computed: {
      productIcon () {
        return this.imgMap[this.$route.path]
      }
    }
  }
</script>

<style>
  .detail-wrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    overflow: hidden;
  }
  .detail-left {
    float: left;
    width: 200px;
    text-align: center;
  }
  .detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .product-board {
    padding: 20px 0;
    background: #fff;
  }
  .product-board ul {
    margin-top: 20px;
  }
  .product-board li {
    padding: 10px 15px;
    cursor: pointer;
    text-align: left;
  }
  .product-board li.active,
  .product-board li:hover {
    background: #4fc08d;
    color: #fff;
  }
  .product-board li a {
    display: block;
  }
  .sales-board {
    background: #fff;
  }
  .sales-board-form {

  }
  .sales-board-intro h2 {
    padding: 20px;
    font-size: 20px;
  }
  .sales-board-intro p {
    padding: 10px 20px;
    line-height: 1.8;
    background: #f7fcff;
    color: #999;
  }
  .sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
  }
  .sales-board-line {
    padding-bottom: 20px;
    clear: both;
  }
  .sales-board-line-left {
    display: inline-block;
    width: 100px;
  }
  .sales-board-line-right {
    display: inline-block;
    width: 75%;
  }
  .sales-board-des {
    padding: 15px 20px;
    border-top: 20px solid #f0f2f5;
  }
  .sales-board-des p {
    line-height: 1.6;
  }
  .sales-board-des h2 {
    padding-bottom: 15px;
    font-size: 20px;
  }
  .sales-board-des h3 {
    padding: 20px 0 10px 0;
    font-size: 18px;
    font-weight: bold;
  }
  .sales-board-des li {
    padding: 5px 0;
  }
  .sales-board-table {
    width: 100%;
    margin-top: 20px;
  }
  .sales-board-table th {
    background: #4fc08d;
    color: #fff;
  }
  .sales-board-table td {
    padding: 15px;
    border: 1px solid #f0f2f5;
  }
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
  }
  .buy-dialog-btn {
    margin-top: 20px;
  }
  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-dialog-table td,
  .buy-dialog-table th{
    padding: 5px 0;
    border: 1px solid #e3e3e3;
    text-align: center;
  }
  .buy-dialog-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
  }
</style>
