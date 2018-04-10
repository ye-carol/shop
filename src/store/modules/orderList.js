/*
* @Author: yao
* @Date:   2018-04-10 10:32:50
* @Last Modified by:   yao
* @Last Modified time: 2018-04-10 11:25:07
*/
import Vue from 'vue'

const state = {
  orderList: [],
  params: {}
}
const getters = {
  getOrderList: state => state.orderList
}
const actions = {
  fetchOrderList ({commit, state}) {
    Vue.http.post('/api/getOrderList', state.params)
    .then(req => {
      commit('updateOrderList',req.data.list)
    },err => {

    })
  }
}
const mutations = {
  updateOrderList (state, payload) {
    state.orderList = payload
  },
  updateParams (state, {key, val}) {
    state.params[key] = val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
