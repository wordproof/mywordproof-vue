import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import(/* webpackChunkName: "Content" */ '../views/Content.vue'),
    redirect: '/content/sites',
    children: [
      {
        path: "/content/sites",
        name: "Sites",
        component: () =>
          import(
            /* webpackChunkName: "Sites" */ "../views/content/Sites.vue"
          ),
      },
      {
        path: "/content/files",
        name: "Files",
        component: () =>
          import(
            /* webpackChunkName: "Files" */ "../views/content/Files.vue"
          ),
      },
      {
        path: "/content/infringements",
        name: "Infringements",
        component: () =>
          import(
            /* webpackChunkName: "Infringements" */ "../views/content/Infringements.vue"
          ),
      },
    ]
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "Settings" */ '../views/Settings.vue')
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import(/* webpackChunkName: "Support" */ '../views/Support.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
