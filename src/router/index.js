import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/detail'
import List from '@/pages/list/list'
import Mhome from '@/pages/Mhome/Mhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/Mhome',
      name: 'Mhome',
      component: Mhome
    }
  ],
  scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})
