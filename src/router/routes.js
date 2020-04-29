
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayoutLogin.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', name: 'register', component: () => import('pages/register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout1.vue'),
    children: [
      { path: 'home', name: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'jualmobil', name: 'jualMobil', component: () => import('pages/jualmobil.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/profile.vue') }
    ]
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
