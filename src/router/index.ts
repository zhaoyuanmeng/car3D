import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/carsview',
    name: 'Carsview',
    meta: {
      title: '展台',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/carsview.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/about.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
