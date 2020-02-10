import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: () => import('./components/pages/login.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/',
    component: () => import('./components/pages/aboutme.vue'),
    meta: {
      title: 'Блок «Обо мне»'
    }
  },
  {
    path: '/works',
    component: () => import('./components/pages/works.vue'),
    meta: {
      title: 'Блок «Работы»'
    }
  },
  {
    path: '/reviews',
    component: () => import('./components/pages/reviews.vue'),
    meta: {
      title: 'Блок «Отзывы»'
    }
  }
];

export default new VueRouter({ routes });

