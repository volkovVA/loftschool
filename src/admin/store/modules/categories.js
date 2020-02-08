export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {},
  actions: {
    async addCategory(store, title) {
      const response = await this.$axios.post("/categories", { title });
      console.log(title);
    }
  }
};