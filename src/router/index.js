import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Form from '@/components/Form'
import Echarts from '@/components/Echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    }
  ]
})
