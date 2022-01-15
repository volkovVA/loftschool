<template lang="pug">
  form.new-skill(@submit.prevent="createSkill")
    .new-skill__title
      simple-input(
        v-model="title"
        :disabled="isDisabled"
        :error-message="validation.firstError('title')"
        placeholder="Новый навык"
      )
    .new-skill__percent
      simple-input(
        v-model="percent"
        :disabled="isDisabled"
        :error-message="validation.firstError('percent')"
        type="number"
        measure="%"
      )
    .new-skill__button
      basic-button(
        type="submit"
        icon="plus"
        display="flat"
        :disabled="isDisabled"
        :circle="true"
      )
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator';
import SimpleInput from './SimpleInput.vue';
import BasicButton from './BasicButton.vue';

const Validator = SimpleVueValidation.Validator;

export default {
  components: {
    SimpleInput,
    BasicButton,
  },
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [SimpleVueValidation.mixin],
  data() {
    return {
      title: '',
      percent: 100,
    };
  },
  validators: {
    title: (value) => {
      return Validator.value(value).required('Введите навык');
    },
    percent: (value) => {
      return Validator.value(value).between(0, 100, 'Ошибка');
    },
  },
  methods: {
    createSkill() {
      this.$validate().then((success) => {
        if (success) {
          this.$emit('add', { title: this.title, percent: parseInt(this.percent) });
          this.resetSkillData();
          this.validation.reset();
        }
      });
    },
    resetSkillData() {
      this.title = '';
      this.percent = 100;
    },
  },
};
</script>

<style lang="postcss" scoped>
/* @import '../../styles/mixins.pcss'; */

.new-skill {
  display: flex;
  align-items: flex-end;

  &__title {
    flex-basis: 218px;
  }

  &__percent {
    margin-left: 10px;
    width: 74px;
  }

  &__button {
    margin-left: 30px;
  }
}
</style>