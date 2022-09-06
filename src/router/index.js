import { createRouter, createWebHistory } from 'vue-router';
// import store from '@/store';
// import auth from '@store/auth.js';
import HomeView from '../views/HomeView.vue';
import TourDetails from '../views/TourDetails.vue';
import LoginView from '../views/auth/LoginView.vue';
import SignupView from '../views/auth/SignupView.vue';
import UserDetails from '../views/UserDetails.vue';
import ManageTours from '../views/ManageTours.vue';
import ManageUsers from '../views/ManageUsers.vue';

// Route Gaurd
// const requireAuth = (to, from, next) => {
//   const user = store.state.token;
//   console.log(user);
//   if (user) {
//     next();
//   } else {
//     next({ name: 'login' });
//   }
// };

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },

  {
    path: '/tourdetails/:id',
    name: 'tourdetails',
    component: TourDetails,
    props: true,
    // beforeEnter: requireAuth,
  },

  {
    path: '/userdetails',
    name: 'userdetails',
    component: UserDetails,
  },

  {
    path: '/managetours',
    name: 'managetours',
    component: ManageTours,
  },

  {
    path: '/manageusers',
    name: 'manageusers',
    component: ManageUsers,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
