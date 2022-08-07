import {createRouter, createWebHistory, Router} from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404/index.vue')
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
