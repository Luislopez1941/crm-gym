// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import RootPage from '@/pages/home/RootPage.vue';
import LoginPage from '@/pages/login/Login.vue';
import { authGuard } from '@/guards/auth';

const routes = [
  {
    path: '/',
    name: 'rootPage',
    component: RootPage,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'clients', // Elimina la barra inicial para rutas hijas
        name: 'clients',
        component: () => import('@/components/sidebar/sections/clients/Clients.vue'),
      },
      // {
      //     // path: 'users', // Elimina la barra inicial para rutas hijas
      //     // name: 'users',
      //     // component: () => import('../components/view/users/users.vue'),
      // },
    ],
  },
  {
    path: '/checker',
    name: 'checker',
    component: () => import('@/components/sidebar/sections/checker/Checker.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(authGuard);

export default router;