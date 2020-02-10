import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
import App from './App.vue'
import router from './router'
import store from './store'
import $axios from './requests';

Vue.use(SimpleVueValidation);
store.$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});