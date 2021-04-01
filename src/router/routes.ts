import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/Index.vue') }]
  // },
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/Home.vue') }]
  // },
  {
    path: '/',
    component: () => import('layouts/SLayout.vue'),
    children: [{ path: '', component: () => import('pages/Home2.vue') }]
  },
  {
    path: '/tabel',
    component: () => import('layouts/SLayout.vue'),
    children: [{ path: '', component: () => import('pages/Tabel.vue') }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
