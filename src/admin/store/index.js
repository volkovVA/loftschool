import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user';
import skills from './modules/skills';
import works from './modules/works';
import reviews from './modules/reviews';
import tooltips from './modules/tooltips';

export default new Vuex.Store ({
  modules: {
    user,
    skills,
    works,
    reviews,
    tooltips
  }
});