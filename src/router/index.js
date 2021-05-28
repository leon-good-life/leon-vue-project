import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import store from '../store/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/user-info',
    name: 'UserInfo',
    component: () => import('../views/UserInfo.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.getters.isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.name === 'Login' && store.getters.isAuthenticated) {
    next({ name: 'Welcome' });
  } else {
    next();
  }
});

// store.watch(state => !!state.loginData && !state.loginError, (value, oldValue) => {
//   if (value) {
//     router.push('/welcome');
//   } else {
//     router.push('/login');
//   }
// });

export default router
