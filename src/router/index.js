import Vue from 'vue'
import Start from '@/components/Start'
import Main from '@/components/Main'
import Detail from '@/components/Detail'
import Order from '@/components/Order'
import MyOrder from '@/components/MyOrder'

import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
     {
      path: '/',redirect: '/start'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/order/:id',
      name: 'Order',
      component: Order
    },
    {
      path: '/myOrder',
      name: 'MyOrder',
      component: MyOrder
    }
  ]
})
