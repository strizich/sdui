import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/components/buttons',
    name: 'Buttons',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "button" */ '../views/DemoButton.vue')
  },
  {
    path: '/components/icons',
    name: 'Icons',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "icons" */ '../views/DemoIcons.vue')
  },
  {
    path: '/components/form-controls',
    name: 'FormControls',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "form" */ '../views/DemoForm.vue')
  },
  {
    path: '/components/dialog',
    name: 'Dialog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dialog" */ '../views/DemoDialog.vue')
  },
  {
    path: '/components/slider',
    name: 'Slider',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "slider" */ '../views/DemoSlider.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 110,
        behavior: 'auto'
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        left: 0
      }
    }
  }
})

export default router
