/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Criative from '@/components/Criative'
import PlusTextos from '@/components/PlusTextos'
import PlusVideos from '@/components/PlusVideos'
import Cadastro from '@/components/User/Cadastro'
import Login from '@/components/User/Login'
import Profile from '@/components/User/Profile'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/criative',
      name: 'Criative',
      component: Criative,
      beforeEnter: AuthGuard
    },
    {
      path: '/plustextos',
      name: 'PlusTextos',
      component: PlusTextos,
      beforeEnter: AuthGuard
    },
    {
      path: '/plusvideos',
      name: 'PlusVideos',
      component: PlusVideos,
      beforeEnter: AuthGuard
    },
  ],
  mode: 'history'
})
