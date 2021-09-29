import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/(*)*',
    redirect: '/login',
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      login: true,
    },
    children: [
      {
        path: '',
        redirect: { name: 'Chats' },
      },
      {
        path: 'chats',
        name: 'Chats',
        component: () =>
          import(
            /* webpackChunkName: "chats" */ '@/components/Chats/Chats.vue'
          ),
      },
      {
        path: 'groups',
        name: 'Groups',
        component: () =>
          import(
            /* webpackChunkName: "chats" */ '@/components/Groups/Groups.vue'
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
});

export default router;
