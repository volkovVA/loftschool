<template lang="pug">
  card.new-work
    .new-work__header(slot="title") {{ title }}
    template(slot="content")
      form.new-work__form(@submit.prevent="onSubmit")
        .new-work__photo
          image-upload(
            v-model="workData.photo"
            :error-message="validation.firstError('workData.photo')"
          )
        .new-work__info
          .new-work__form-control.new-work__form-control_title
            simple-input(
              label="Название"
              v-model="workData.title"
              :error-message="validation.firstError('workData.title')"
            )
          .new-work__form-control.new-work__form-control_link
            simple-input(
              label="Ссылка"
              v-model="workData.link"
              :error-message="validation.firstError('workData.link')"
            )
          .new-work__form-control.new-work__form-control_description
            simple-textarea(
              label="Описание"
              v-model="workData.description"
              :error-message="validation.firstError('workData.description')"
            )
          .new-work__form-control.new-work__form-control_tags
            tags-input(
              label="Добавление тэга"
              v-model="workData.techs"
              :error-message="validation.firstError('workData.techs')"
            )
          .new-work__controls
            basic-button.new-work__button(
              size="small"
              display="flat"
              @click="$emit('reset')"
            ) Отмена
            basic-button.new-work__button.new-work__button_save(
              type="submit"
              size="small"
              :bordered="true"
            ) Отправить
</template>

<script>
import SimpleVueValidation, { Validator } from 'simple-vue-validator';
import Card from './Card.vue';
import SimpleInput from './SimpleInput.vue';
import TagsInput from './TagsInput.vue';
import SimpleTextarea from './SimpleTextarea.vue';
import BasicButton from './BasicButton.vue';
import ImageUpload from './ImageUpload';

const emptyWorkData = {
  title: '',
  link: '',
  description: '',
  techs: '',
  photo: null,
};

export default {
  components: {
    Card,
    SimpleInput,
    TagsInput,
    SimpleTextarea,
    BasicButton,
    ImageUpload,
  },
  props: {
    currentWork: {
      type: Object,
      default: null,
    },
  },
  watch: {
    currentWork() {
      this.updateWorkData();
      this.validation.reset();
    },
  },
  mixins: [SimpleVueValidation.mixin],
  data() {
    return {
      workData: emptyWorkData,
    };
  },
  validators: {
    'workData.title': (value) => {
      return Validator.value(value).required('Введите название');
    },
    'workData.techs': (value) => {
      return Validator.value(value).required('Введите технологии');
    },
    'workData.link': (value) => {
      return Validator.value(value).required('Введите ссылку');
    },
    'workData.description': (value) => {
      return Validator.value(value).required('Введите описание');
    },
    'workData.photo': (value) => {
      return Validator.value(value).required('Загрузите фото');
    },
  },
  computed: {
    title() {
      return this.currentWork ? 'Редактирование работы' : 'Создание работы';
    },
  },
  methods: {
    updateWorkData() {
      this.workData = this.currentWork ? { ...this.currentWork } : { ...emptyWorkData };
    },
    onSubmit() {
      this.$validate().then((success) => {
        if (success) {
          const eventType = this.currentWork ? 'update' : 'create';
          this.$emit(eventType, this.workData);
          this.validation.reset();
        }
      });
    },
  },
  created() {
    this.updateWorkData();
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.new-work {
  &__header {
    font-size: 18px;
    padding: 10px;
  }
  &__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    font-weight: 700;
    margin: 20px 0;
    @include tablets {
      grid-template-columns: 1fr;
    }
  }

  &__form-control {
    margin-bottom: 30px;
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