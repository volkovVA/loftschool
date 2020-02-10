<template lang="pug">
  tr.skill
    td.skill__title
      simple-input(
        v-model="skillTitle"
        :readonly="!isEditMode"
        :error-message="validation.firstError('skillTitle')"
        placeholder="Название навыка"
        @keydown.enter="onSave"
      )
    td.skill__percent
      simple-input(
        v-model="skillPercent"
        :readonly="!isEditMode"
        :error-message="validation.firstError('skillPercent')"
        type="number"
        measure="%"
        @keydown.enter="onSave"
      )
    td.skill__controls
      .skill__buttons(v-if="isEditMode")
        button.skill__button.skill__button_save(
          key="save"
          @click="onSave"
        )
          icon(name="tick")
        button.skill__button.skill__button_cancel(
          key="cancel"
          @click="onCancel"
        )
          icon(name="cross")
      .skill__buttons(v-else)
        button.skill__button.skill__button_edit(
          key="edit"
          @click="onEdit"
        )
          icon(name="pencil")
        button.skill__button.skill__button_remove(
          key="delete"
          @click="onDelete"
        )
          icon(name="trash")
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator';
import SimpleInput from './SimpleInput.vue';
import Icon from './Icon.vue';

const Validator = SimpleVueValidation.Validator;

export default {
  components: {
    SimpleInput,
    Icon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    percent: {
      type: Number,
      default: 100,
    },
  },
  mixins: [SimpleVueValidation.mixin],
  watch: {
    isEditMode(value) {
      if (value) {
        const inputElements = this.$el.querySelectorAll('input');
        inputElements[0].focus();
      }
    },
  },
  data() {
    return {
      isEditMode: false,
      skillTitle: '',
      skillPercent: '',
    };
  },
  validators: {
    skillTitle: (value) => {
      return Validator.value(value).required('Введите навык');
    },
    skillPercent: (value) => {
      return Validator.value(value).between(0, 100, 'Ошибка');
    },
  },
  methods: {
    onSave() {
      this.$validate().then((success) => {
        if (success) {
          this.$emit('save', { title: this.skillTitle, percent: this.skillPercent });
          this.isEditMode = false;
          this.validation.reset();
        }
      });
    },
    onCancel() {
      this.skillTitle = this.title;
      this.skillPercent = this.percent;
      this.isEditMode = false;
    },
    onDelete() {
      this.$emit('delete');
    },
    onEdit() {
      this.isEditMode = true;
    },
  },
  created() {
    this.skillTitle = this.title;
    this.skillPercent = this.percent;
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.skill {
  &__percent {
    padding: 0 30px 0 20px;
    width: 124px;
  }
  &__controls {
    width: 70px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__button {
    padding: 0;
    margin: 0 10px;
    width: 16px;
    height: 16px;
    fill: $admin-text-color;
    border: none;
    background: none;
    cursor: pointer;
    transition: opacity $trans-hover;
    &:hover {
      opacity: 0.5;
    }

    &_save {
      fill: $success-color;
    }
    &_cancel {
      fill: $danger-color;
    }
  }
}
</style>