import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'


import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuex)

import shop from './components/shop.vue'
import shopSon from './components/shopSon.vue'
import store from './store'

const router=new VueRouter({
  routes:[
    {
      name:"index",
      path:'/',
      component:shop
    },
    {
      name:"index",
      path:'/shop',
      component:shop,
      
      // children:[
      // {
      //   path:'/shop/son',
      //   component:shopSon,
      // }
      // ]
    }

  ]
})

new Vue({
  el:"#app",
  render:function(h){
    return h(App)
  },
  router,
  store
})