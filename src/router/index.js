import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../components/Cart.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
