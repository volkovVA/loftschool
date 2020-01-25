import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
  el: "#reviews-slider",
  template: "#reviews-container",  
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        // groupCells: 2,
        // cellAlign: 'left',
        freeScroll: true 
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
});