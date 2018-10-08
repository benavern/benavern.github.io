import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Subject from './views/Subject'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/subject/:subject',
      name: 'subject',
      component: Subject,
      props: true
    }
  ]
})
