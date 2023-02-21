import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

/* 基础布局组件 */
import Layout from '@/layout/index.vue'

// 公共路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/index.vue'),
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router
