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
      path: '/meditation',
      name: 'MeditationPage',
      component: () => import('@/views/MeditationView.vue'),
    },
  ],
});

export default router;
