<template lang="pug">
  .category-control
    .category-control__input
      simple-input(
        :value="value"
        :readonly="!isEditMode"
        :error-message="validation.firstError('value')"
        size="large"
        placeholder="Название новой группы"
        @input="$emit('input', $event)"
        @keydown.enter="save"
      )
    .category-control__buttons
      template(v-if="!isEditMode")
        button.category-control__button.category-control__button_edit(
          key="edit"
          @click="$emit('edit')"
        )
          icon(name="pencil")
        button.category-control__button.category-control__button_delete(
          key="delete"
          @click="$emit('delete')"
        )
          icon(name="trash")
      template(v-else)
        button.category-control__button.category-control__button_save(
          key="save"
          @click="save"
        )
          icon(name="tick")
        button.category-control__button.category-control__button_cancel(
          key="cancel"
          @click="$emit('cancel')"
        )
          icon(name="cross")
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
  mixins: [SimpleVueValidation.mixin],
  props: {
    value: {
      type: String,
      default: '',
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isEditMode(value) {
      if (value) {
        const inputElements = this.$el.querySelectorAll('input');
        inputElements[0].focus();
      }
    },
  },
  validators: {
    value: (value) => {
      return Validator.value(value).required('Введите название группы');
    },
  },
  methods: {
    save() {
      this.$validate().then((success) => {
        if (success) {
          this.$emit('save');
          this.validation.reset();
        }
      });
    },
  },
};
</script>

<style lang="postcss" scoped>

@import '../../styles/mixins.pcss'; 

.category-control {
  display: flex;
  justify-content: space-between;

  &__input {
    width: 415px;

    @include tablets {
    width: 315px;;
  }
  }

  &__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__button {
    padding: 0;
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

    &_delete {
      margin-left: 19px;
    }
    &_save {
      fill: $success-color;
      margin-right: 19px;
    }
    &_cancel {
      fill: $danger-color;
    }
  }
}
</style>