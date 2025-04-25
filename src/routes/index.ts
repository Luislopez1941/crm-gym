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
        path: '/', // Elimina la barra inicial para rutas hijas
        name: 'dashboard',
        component: () => import('@/components/sidebar/sections/dashboard/Dashboard.vue'),
      },
      {
        path: 'clients', // Elimina la barra inicial para rutas hijas
        name: 'clients',
        component: () => import('@/components/sidebar/sections/clients/Clients.vue'),
      },
      {
        path: '/coaches',
        name: 'coaches',
        component: () => import('@/components/sidebar/sections/coaches/Coaches.vue')
      },
      {
        path: '/memberships',
        name: 'memberships',
        component: () => import('@/components/sidebar/sections/memberships/Memberships.vue')
      },
      {
        path: '/sales',
        name: 'sales',
        component: () => import('@/components/sidebar/sections/sales/Sales.vue')
      },
      {
        path: '/inventories',
        name: 'inventories',
        children: [
          {
            path: 'products', // Elimina la barra inicial para rutas hijas
            name: 'products',
            component: () => import('@/components/sidebar/sections/inventories/sections/products/Products.vue'),
          },
          {
            path: 'inventory', // Elimina la barra inicial para rutas hijas
            name: 'inventory',
            component: () => import('@/components/sidebar/sections/inventories/sections/inventory/Inventory.vue'),
          }
        ]
      },
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