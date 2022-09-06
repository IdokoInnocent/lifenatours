import { createStore } from 'vuex';
import auth from './auth';

export default createStore({

  // A store is a terminology for an object that contains your data
  state: {
  },

  // For changing and Updating state. Changing the values in our state, This would be called a mutation
  mutations: {
  },

  // Getters are way of retrieving a state property value
  getters: {
  },

  actions: {
  },
  modules: {
    auth,
  },
});
