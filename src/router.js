import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import menuDetail from './views/menuDetail.vue'
import menuList from './views/menuList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home},
    {path: '/menuDetail/:mid',component: menuDetail,props:true},
    {path: '/menuList',component: menuList},
  ]
})
