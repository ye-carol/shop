<template>
  <div >
    <v-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">请确认你的支付状态！
      <div class="button" @click="checkStatus">支付成功</div>
      <div class="button" @click="checkStatus">支付失败</div>

    </v-dialog>
    <v-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">购买成功</v-dialog>
    <v-dialog :is-show="isShowFailDialog" @on-close="toOrderList">购买失败</v-dialog>

  </div>
</template>
<script>
import VDialog from './base/dialog'
  export default {
    components: {
      VDialog
    },
    props: {
      isShowCheckDialog: {
        type: Boolean,
        default: false
      },
      orderId: {
        type: [String,Number]
      }
    },
    data () {
      return {
        isShowSuccessDialog: false,
        isShowFailDialog: false
      }
    },
    methods:{
      checkStatus () {
        this.$http.post('/api/checkOrder',{orderId: this.orderId})
        .then(res => {
          this.$emit('on-close-check-dialog')
          this.isShowSuccessDialog = true
        }, err => {
          this.$emit('on-close-check-dialog')
          this.isShowFailDialog = true
        })
        setTimeout(() => {
          this.$router.push({path:'/orderList'})
        }, 2000);
      },
      toOrderList () {
        this.$router.push({path:'/orderList'})
      }
    }
  }
</script>
<style scoped>

</style>
