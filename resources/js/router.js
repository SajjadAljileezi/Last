import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Register from './components/Register'
import Signing from './components/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
        path: '/register',
        name: 'Register',
        component:Register
      },
      {
        path: '/signing',
        name: 'Signing',
        component:Signing
      },


  ]
})
