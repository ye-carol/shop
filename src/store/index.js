/*
* @Author: yao
* @Date:   2018-04-10 10:30:31
* @Last Modified by:   yao
* @Last Modified time: 2018-04-10 10:37:17
*/
import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/orderList'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    orderList
  }
})
