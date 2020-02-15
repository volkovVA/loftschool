import Vue from "vue";
import flickity from 'vue-flickity';
import axios from 'axios';

const review = {
  template: '#review',
  props: {
   review: Object
  }
};

new Vue({
  el: "#reviews-slider",
  template: "#reviews-container",  
  components: {
    flickity,
    review
  },
  
  data() {
    return {
      reviews: [],
      flickityOptions: {
        prevNextButtons: true,
        pageDots: false,
        cellAlign: 'left',
        freeScroll: true
      }
    }
  },
  async created() {
    const {data: reviews} = await axios.get(`${process.env.BASE_URL}/reviews/${process.env.USER_ID}`);
    this.reviews = reviews.map((item) => ({
      ...item,
      photo: `${process.env.BASE_URL}/${item.photo}`,  
    }));
  }
});