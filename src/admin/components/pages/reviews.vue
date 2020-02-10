<template lang="pug">
  .reviews-page
    .reviews-page__preloader(v-if="isLoading")
      clip-loader(:color="accentColor" :size="70")
    template(v-else)
      .reviews-page__title
        page-title
      .reviews-page__form(ref="form" v-if="isShowForm")
        review-form(
          :is-sending="isSendingForm"
          :current-review="currentReview"
          @reset="cancelReviewChanges"
          @create="createNewReview"
          @update="updateCurrentReview"
        )
      .reviews-page__grid
        card-gradient-button.reviews-page__item(
          :is-disabled="isShowForm && !currentReview"
          @click="addReview"
        ) Добавить #[br] отзыв
        review-item.reviews-page__item(
          v-for="item in reviews"
          :key="item.id"
          :review="item"
          :is-active="item === currentReview"
          @edit="editReview(item)"
          @delete="deleteReview(item.id)"
        )
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { ClipLoader } from '@saeris/vue-spinners';
import * as variables from '../../../styles/variables.json';
import PageTitle from '../PageTitle.vue';
import CardGradientButton from '../CardGradientButton.vue';
import ReviewForm from '../ReviewForm.vue';
import ReviewItem from '../ReviewItem.vue';

export default {
  components: {
    PageTitle,
    CardGradientButton,
    ReviewForm,
    ReviewItem,
    ClipLoader
  },
  data() {
    return {
      currentReview: null,
      isShowForm: false,
      isSendingForm: false,
      isLoading: false,
      accentColor: variables['content-color'],
    };
  },
  computed: {
    ...mapState('reviews', {
      reviews: (state) => state.reviews,
    }),
  },
  methods: {
    ...mapActions('reviews', ['fetchReviews', 'createReview', 'updateReview', 'removeReview']),
    ...mapActions('tooltips', ['showTooltip']),
    async createNewReview(data) {
      this.isSendingForm = true;
      try {
        await this.createReview(data);
        this.showTooltip({ type: 'success', text: 'Отзыв успешно создан', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      } finally {
        this.isSendingForm = false;
      }
      this.hideForm();
    },
    async updateCurrentReview(data) {
      this.isSendingForm = true;
      try {
        await this.updateReview(data);
        this.showTooltip({ type: 'success', text: 'Отзыв успешно обновлен', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      } finally {
        this.isSendingForm = false;
      }
      this.hideForm();
    },
    async deleteReview(id) {
      try {
        await this.removeReview(id);
        this.showTooltip({ type: 'success', text: 'Отзыв успешно удален', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    showForm() {
      this.isShowForm = true;
      // this.$nextTick(() => {
      //   this.$scrollTo(this.$refs.form, 500, {
      //     container: '.inner-page__content',
      //     offset: -50,
      //   });
      // });
    },
    hideForm() {
      this.isShowForm = false;
      this.currentReview = null;
    },
    addReview() {
      this.currentReview = null;
      this.showForm();
    },
    cancelReviewChanges() {
      this.currentReview = null;
      this.hideForm();
    },
    editReview(review) {
      this.currentReview = review;
      this.showForm();
    },
    async fetchData() {
      this.isLoading = true;
      try {
        await this.fetchReviews();
      } catch (e) {
        this.showTooltip({ type: 'error', text: 'Произошла ошибка при загрузке отзывов', duration: 3000 });
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.reviews-page {
  padding: 60px;

  @include desktop {
    padding: 50px 30px;
  }

  @include phones {
    padding: 40px 20px;
  }

  &__preloader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__title {
    margin-bottom: 60px;
    @include phones {
      padding: 0 20px;
      margin-bottom: 48px;
    }
  }

  &__form {
    margin-bottom: 32px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    @include desktop {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }

    @include phones {
      grid-template-columns: 1fr;
    }
  }
}
</style>