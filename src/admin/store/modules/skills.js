import { generateStdError } from '../../helpers/errorHandler';

export default {
  namespaced: true,
  state: {
    skills: [],
    categories: [],
  },
  mutations: {
    CREATE_CATEGORY: (state, category) => {
      state.categories.unshift(category);
    },
    UPDATE_CATEGORY: (state, category) => {
      const categoryIndex = state.categories.findIndex((item) => item.id === category.id);
      state.categories[categoryIndex] = { ...category };
    },
    DELETE_CATEGORY: (state, id) => {
      state.categories = state.categories.filter((item) => item.id !== id);
    },
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    SET_SKILLS: (state, skills) => {
      state.skills = skills;
    },
    ADD_SKILL: (state, newSkill) => {
      state.skills.push(newSkill);
    },
    REMOVE_SKILL: (state, deletedSkillId) => {
      state.skills = state.skills.filter((skill) => skill.id !== deletedSkillId);
    },
    EDIT_SKILL: (state, editedSkill) => {
      state.skills = state.skills.map((skill) => (skill.id === editedSkill.id ? editedSkill : skill));
    },
  },
  actions: {
    async addNewSkillGroup({ commit }, groupTitle) {
      try {
        const response = await this.$axios.post('/categories', {
          title: groupTitle,
        });
        commit('CREATE_CATEGORY', response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async updateSkillGroup({ commit }, { id, title }) {
      try {
        const response = await this.$axios.post(`/categories/${id}`, { title });
        commit('UPDATE_CATEGORY', response.data.category);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async removeSkillGroup({ commit }, id) {
      try {
        const response = await this.$axios.delete(`/categories/${id}`);
        commit('DELETE_CATEGORY', id);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async fetchCategories({ rootGetters, commit }) {
      try {
        const userId = rootGetters['user/userId'];
        const response = await this.$axios.get(`/categories/${userId}`);
        commit('SET_CATEGORIES', response.data.reverse());
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async addSkill({ commit }, skill) {
      try {
        const response = await this.$axios.post('/skills', skill);
        commit('ADD_SKILL', response.data);
      } catch (error) {
        generateStdError(error);
      }
    },

    async fetchSkills({ rootGetters, commit }, skill) {
      try {
        const userId = rootGetters['user/userId'];
        const response = await this.$axios.get(`/skills/${userId}`, skill);
        commit('SET_SKILLS', response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },

    async removeSkill({ commit }, skillId) {
      try {
        const response = await this.$axios.delete(`/skills/${skillId}`);
        commit('REMOVE_SKILL', skillId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },

    async editSkill({ commit }, skill) {
      try {
        const response = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit('EDIT_SKILL', response.data.skill);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
  },
};
