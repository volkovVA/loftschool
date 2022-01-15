import { setToken, removeToken, setAuthHttpHeaderToAxios } from '../../helpers/token';
import { generateStdError } from '../../helpers/errorHandler';

export default {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET_USER: (state) => {
      state.user = {};
    },
  },
  getters: {
    userIsLogged: (state) => {
      const userObj = state.user;
      const userObjectIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object;

      return userObjectIsEmpty === false;
    },
    userId: (state) => {
      return state.user.id;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const { data } = await this.$axios.get('/user');
        commit('SET_USER', data.user);
      } catch (error) {
        generateStdError(error);
      }
    },
    async login({ dispatch }, params) {
      try {
        const response = await this.$axios.post('/login', params);
        const token = response.data.token;
        setAuthHttpHeaderToAxios(this.$axios, token);
        setToken(token);
        await dispatch('fetchUser');
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async logout({ commit }, params) {
      try {
        const response = await this.$axios.post('/logout');
        removeToken();
        commit('RESET_USER');
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
  },
};
