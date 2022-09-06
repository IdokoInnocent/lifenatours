import axios from 'axios';
// import { sign } from 'core-js/core/number';

export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
  },

  getters: {
    authenticated(state) {
      return state.token && state.user;
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },

    SET_USER: (state, user) => {
      state.user = user;
    },

  },

  actions: {
    async signIn({ dispatch }, credentials) {
      const response = await axios.post('users/login', credentials);
      return dispatch('attempt', response.data.token);
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit('SET_TOKEN', token);
      }

      if (!state.token) {
        return;
      }

      try {
        const response = await axios.get('users/me');

        const { data } = response.data.data;

        commit('SET_USER', data);
      } catch (e) {
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
      }
    },

    async updatePassword({ commit }, credentials) {
      try {
        const response = await axios.patch('users/updateMyPassword', credentials);
        const { token } = response.data;
        commit('SET_TOKEN', token);

        const { user } = response.data.data;
        commit('SET_USER', user);
      } catch (err) {
        console.log(err);
      }
    },

    async signOut({ commit }) {
      return axios.get('users/logout').then(() => {
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
      });
    },
  },

};
