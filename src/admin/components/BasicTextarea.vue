<template lang="pug">
  .basic-textarea(:class="`basic-textarea_${theme}`")
    textarea.basic-textarea__control(
      ref="textarea"
      :value="value"
      :required="required"
      :class="inputClass"
      v-on="listeners"
    )
    .basic-textarea__icon(v-if="icon")
      icon(:name="icon")
    label.basic-textarea__label {{ label }}
    transition(name="slide-up")
      .basic-textarea__error(v-if="errorMessage")
        error-tooltip {{ errorMessage }}
</template>

<script>
import ErrorTooltip from './ErrorTooltip.vue';
import Icon from './Icon.vue';

export default {
  components: {
    ErrorTooltip,
    Icon,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'dark',
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          if (!this.disabled) {
            this.$emit('input', event.target.value);
            this.$refs.textarea.style.height = 'auto';
            this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
          }
        },
      };
    },
    inputClass() {
      return {
        'basic-textarea__control_dirty': this.value.length,
        'basic-textarea__control_disabled': this.disabled,
        'basic-textarea__control_invalid': this.errorMessage,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.basic-textarea {
  position: relative;
  line-height: 0;
  width: 100%;
  &__control {
    padding-left: 45px;
    width: 100%;
    color: $text-color;
    font-size: 18px;
    font-weight: 700;
    min-height: 56px;
    height: auto;
    line-height: 36px;
    background: none;
    border: none;
    border-bottom: 1px solid $light-gray;
    transition: border 0.2s ease;
    resize: none;
    &:focus {
      border-bottom-color: $accent-color;
    }
    &_invalid,
    &_invalid:focus {
      border-bottom-color: $danger-color;
    }
    @include desktop {
      font-size: 14px;
    }
  }
  &_light &__control {
    color: white !important;
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 0;
    width: 30px;
    height: 30px;
    fill: rgba(65, 76, 99, 0.3);
    transform: translateY(-50%);
    pointer-events: none;
  }
  &_light &__icon {
    fill: rgba(255, 255, 255, 0.3);
  }
  &__control:focus ~ &__icon,
  &__control_dirty ~ &__label {
    fill: $accent-color;
  }
  &__control_invalid ~ &__icon,
  &__control_invalid:focus ~ &__icon {
    fill: $danger-color;
  }
  &__label {
    position: absolute;
    top: 28px;
    left: 45px;
    bottom: auto;
    color: rgba(65, 76, 99, 0.3);
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    transform: translateY(-50%);
    transition: transform 0.2s ease;
    pointer-events: none;
    @include desktop {
      font-size: 14px;
    }
  }
  &_light &__label {
    color: rgba(255, 255, 255, 0.3);
  }
  &__control:focus ~ &__label,
  &__control_dirty ~ &__label {
    transform: translateY(-200%);
  }
  &__error {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 45px;
  }
}

.slide-up {
  &-enter-to,
  &-leave {
    transition: all 0.3s ease;
  }
  &-enter,
  &-leave-to {
    transform: translateY(50%);
    opacity: 0;
  }
}
</style>