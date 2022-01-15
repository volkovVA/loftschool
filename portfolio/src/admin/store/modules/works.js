import { wrapIntoFormData } from '../../helpers/forms';
import { generateStdError } from '../../helpers/errorHandler';

export default {
  namespaced: true,
  state: {
    works: [],
  },
  mutations: {
    SET_WORKS: (state, works) => {
      state.works = works;
    },
    ADD_WORK: (state, work) => {
      state.works.push(work);
    },
    REMOVE_WORK: (state, removedWorkId) => {
      state.works = state.works.filter((work) => work.id !== removedWorkId);
    },
    UPDATE_WORK: (state, updatedWork) => {
      state.works = state.works.map((work) => (work.id === updatedWork.id ? updatedWork : work));
    },
  },
  actions: {
    async createWork({ commit }, payload) {
      const data = wrapIntoFormData(payload);
      try {
        const response = await this.$axios.post('/works', data);
        commit('ADD_WORK', response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async fetchWorks({ commit, rootGetters }) {
      try {
        const userId = rootGetters['user/userId'];
        const response = await this.$axios.get(`/works/${userId}`);
        commit('SET_WORKS', response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async removeWork({ state, commit }, workId) {
      const work = state.works.find((item) => item.id === workId);
      try {
        commit('REMOVE_WORK', workId);
        const response = await this.$axios.delete(`/works/${workId}`);
        return response;
      } catch (error) {
        commit('ADD_WORK', work);
        generateStdError(error);
      }
    },
    async updateWork({ commit }, payload) {
      const data = wrapIntoFormData(payload);
      try {
        const response = await this.$axios.post(`/works/${payload.id}`, data);
        commit('UPDATE_WORK', response.data.work);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
  },
};
