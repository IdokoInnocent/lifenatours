import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import '@/assets/main.css';

// require('@/assets/img/tours');

require('@/store/suscriber');

axios.defaults.baseURL = 'https://natour-api.onrender.com/api/v1';
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  const app = createApp(App);
  app.use(store);
  app.use(router);
  app.mount('#app');
});
