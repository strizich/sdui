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
    component: () => import(/* webpackChunkName: "button" */ '../views/DemoButton.vue')
  },
  {
    path: '/components/containers',
    name: 'containers',
    component: () => import(/* webpackChunkName: "container" */ '../views/DemoContainer.vue')
  },
  {
    path: '/components/icons',
    name: 'Icons',
    component: () => import(/* webpackChunkName: "icons" */ '../views/DemoIcons.vue')
  },
  {
    path: '/components/form-controls',
    name: 'FormControls',
    component: () => import(/* webpackChunkName: "form" */ '../views/DemoForm.vue')
  },
  {
    path: '/components/dialog',
    name: 'Dialog',
    component: () => import(/* webpackChunkName: "dialog" */ '../views/DemoDialog.vue')
  },
  {
    path: '/components/dropdown',
    name: 'Dropdown',
    component: () => import(/* webpackChunkName: "dropdown" */ '../views/DemoDropdown.vue')
  },
  {
    path: '/components/slider',
    name: 'Slider',
    component: () => import(/* webpackChunkName: "slider" */ '../views/DemoSlider.vue')
  },
  {
    path: '/components/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/DemoCards.vue')
  },
  {
    path: '/components/charts',
    name: 'Charts',
    component: () => import(/* webpackChunkName: "charts" */ '../views/DemoChart.vue')
  },
  {
    path: '/components/tooltips',
    name: 'Tooltips',
    component: () => import(/* webpackChunkName: "tooltip" */ '../views/DemoTooltips.vue')
  },
  {
    path: '/components/toast',
    name: 'Toast',
    component: () => import(/* webpackChunkName: "toast" */ '../views/DemoToast.vue')
  },
  {
    path: '/components/loaders',
    name: 'loaders',
    component: () => import(/* webpackChunkName: "loaders" */ '../views/DemoLoaders.vue')
  },
  {
    path: '/components/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/DemoList.vue')
  },
  {
    path: '/components/elevation',
    name: 'elevation',
    component: () => import(/* webpackChunkName: "elevation" */ '../views/DemoElevation.vue')
  },
  {
    path: '/components/grid',
    name: 'Grid',
    component: () => import(/* webpackChunkName: "grid" */ '../views/DemoGrid.vue')
  },
  {
    path: '/about',
    name: 'About',
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
