import Home from './pages/Home.vue'
import FirstPage from './pages/FirstPage.vue'
import Strategy from './pages/Strategy.vue'
import Community from './pages/Community.vue'
import MyInfo from './pages/MyInfo.vue'
import Simulate from './pages/Simulate.vue'
import VueRouter from 'vue-router'

const routes = [{
  path: '/home',
  name: 'Home',
  component: Home,
  children: [
    {
      path: 'firstpage',
      component: FirstPage
    },
    {
      path: 'strategy',
      component: Strategy
    },
    {
      path: 'community',
      component: Community
    },
    {
      path: 'info',
      component: MyInfo
    }
  ]
},
  {
    path: '/firstpage',
    component: FirstPage
  },
  {
    path: '/simulate',
    component: Simulate
  },
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
