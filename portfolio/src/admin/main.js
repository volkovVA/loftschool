import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
// import VueScrollTo from 'vue-scrollto';
import App from './App.vue'
import router from './router'
import store from './store'
import requests from './requests'

Vue.use(SimpleVueValidation);
// Vue.use(VueScrollTo);
store.$axios = requests;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});