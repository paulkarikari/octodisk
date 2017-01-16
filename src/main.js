// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLanding from './components/AppLanding'
import AdminViewContainer from './components/AdminViewContainer'
import ListDrug from './components/ListDrug'

Vue.use(VueRouter) // This makes all the magic hapen and Vue recognizes the router-view and router-link

const routes = [
  { path: '/',
    component: AppLanding },
  { path: '/wholesaler',
    component: AdminViewContainer,
    children: [{path: '/', component: ListDrug}]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
