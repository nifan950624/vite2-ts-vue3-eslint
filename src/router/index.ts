import { createRouter, createWebHistory, Router } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/views/Home/index.vue') },
  { path: '/detail', component: () => import('@/views/Detail/index.vue') },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
