import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import OrderListPage from '@/pages/orderList'
import DetailPage from '@/pages/detail'
import DetailAccPage from '@/pages/detail/account'
import DetailAnaPage from '@/pages/detail/analyze'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'



// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analyze',
      children: [
        {
          path: 'account',
          component: DetailAccPage
        },
        {
          path: 'analyze',
          component: DetailAnaPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },

        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
