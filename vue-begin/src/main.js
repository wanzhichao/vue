import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routers'
import FastClick from 'fastclick'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

//  fastclick
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
