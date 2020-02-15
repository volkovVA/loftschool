import Vue from "vue";
import Flickity from 'vue-flickity';
import axios from 'axios';

new Vue({
  el: "#reviews-slider",
  template: "#reviews-container",  
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        prevNextButtons: true,
        pageDots: false,
        cellAlign: 'left',
        freeScroll: true
      }
    }
  }
});