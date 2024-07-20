import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: MainView,
    },
    {
      path: '/:typeId',
      name: 'TypePage',
      component: () => import('@/views/TypeView.vue'),
    },
    {
      path: '/:typeId/:categoryId',
      name: 'CategoryPage',
      component: () => import('@/views/CategoryView.vue'),
    },
    {
      path: '/:typeId/:categoryId/:focusId',
      name: 'FocusPage',
      component: () => import('@/views/FocusView.vue'),
    },
  ],
});

export default router;
