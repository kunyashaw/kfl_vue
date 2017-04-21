import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Detail from '@/components/Detail'
import Order from '@/components/Order'
import MyOrder from '@/components/MyOrder'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
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
