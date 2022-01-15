<template lang="pug">
  card.new-review
    .new-review__header(slot="title") Новый отзыв
    template(slot="content")
      form.new-review__form(@submit.prevent="onSubmit")
        .new-review__photo
          avatar-upload(
            v-model="reviewData.photo"
            :error-message="validation.firstError('reviewData.photo')"
          )
        .new-review__name
          simple-input(
            label="Имя автора"
            v-model="reviewData.author"
            :error-message="validation.firstError('reviewData.author')"
          )
        .new-review__position
          simple-input(
            label="Титул автора"
            v-model="reviewData.occ"
            :error-message="validation.firstError('reviewData.occ')"
          )
        .new-review__text
          simple-textarea(
            label="Отзыв"
            v-model="reviewData.text"
            :error-message="validation.firstError('reviewData.text')"
          )
        .new-review__controls
          basic-button.new-review__button(
            size="small"
            display="flat"
            :disabled="isSending"
            @click="$emit('reset')"
          ) Отмена
          basic-button.new-review__button.new-review__button_save(
            type="submit"
            size="small"
            :bordered="true"
            :disabled="isSending"
          ) Сохранить
</template>

<script>
import SimpleVueValidation, { Validator } from 'simple-vue-validator';
import Card from './Card';
import SimpleInput from './SimpleInput.vue';
import SimpleTextarea from './SimpleTextarea.vue';
import BasicButton from './BasicButton.vue';
import AvatarUpload from './AvatarUpload.vue';

const emptyReviewData = {
  author: '',
  occ: '',
  text: '',
  photo: null,
};

export default {
  components: {
    Card,
    SimpleInput,
    SimpleTextarea,
    BasicButton,
    AvatarUpload,
  },
  props: {
    currentReview: {
      type: Object,
      default: null,
    },
    isSending: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    currentReview() {
      this.updateReviewData();
      this.validation.reset();
    },
  },
  mixins: [SimpleVueValidation.mixin],
  data() {
    return {
      reviewData: emptyReviewData,
    };
  },
  validators: {
    'reviewData.author': (value) => {
      return Validator.value(value).required('Введите автора');
    },
    'reviewData.occ': (value) => {
      return Validator.value(value).required('Введите титул');
    },
    'reviewData.text': (value) => {
      return Validator.value(value).required('Введите текст отзыва');
    },
    'reviewData.photo': (value) => {
      return Validator.value(value).required('Загрузите фото');
    },
  },
  computed: {
    title() {
      return this.currentReview ? 'Редактирование отзыва' : 'Новый отзыв';
    },
  },
  methods: {
    updateReviewData() {
      this.reviewData = this.currentReview ? { ...this.currentReview } : { ...emptyReviewData };
    },
    onSubmit() {
      this.$validate().then((success) => {
        if (success) {
          const eventType = this.currentReview ? 'update' : 'create';
          this.$emit(eventType, this.reviewData);
          this.validation.reset();
        }
      });
    },
  },
  created() {
    this.updateReviewData();
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.new-review {
  &__header {
    font-size: 18px;
    padding: 10px;
  }
  &__form {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 30px;
    max-width: 841px;
    font-weight: 700;
    margin: 20px 0;
  }

  &__photo {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  &__name {
  }

  &__position {
  }

  &__text {
    grid-column: 2 / 4;
  }

  &__button_save {
    text-transform: uppercase;
  }

  &__controls {
    grid-column: 2 / 4;
    display: flex;
    justify-content: flex-end;
  }
}
</style>