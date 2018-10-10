import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EventList from '@/components/EventList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/EventList',
      name: 'EventList',
      component: EventList
    }
  ]
})
