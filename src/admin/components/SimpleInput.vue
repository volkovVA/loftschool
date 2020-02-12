<template lang="pug">
  .simple-input(
    :class="{ 'simple-input_disabled': disabled }"
  )
    .simple-input__label(v-if="label") {{ label }}
    input.simple-input__control(
      :type="type"
      :value="value"
      :min="minValue"
      :max="maxValue"
      :step="step"
      :readonly="readonly"
      :placeholder="placeholder"
      :class="inputClass"
      v-on="listeners"
    )
    .simple-input__measure(v-if="measure") {{ measure }}
    transition(name="slide-up")
      .simple-input__error(v-if="errorMessage")
        error-tooltip {{ errorMessage }}
</template>

<script>
import ErrorTooltip from './ErrorTooltip.vue';

export default {
  components: {
    ErrorTooltip,
  },
  props: {
    value: {
      type: String | Number,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    maxValue: {
      type: Number,
    },
    minValue: {
      type: Number,
    },
    step: {
      type: Number,
      default: 1,
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    size: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    measure: {
      type: String,
      default: '',
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          if (!this.disabled) {
            this.$emit('input', event.target.value);
          }
        },
      };
    },
    inputClass() {
      return {
        [`simple-input__control_${this.size}`]: true,
        'simple-input__control_error': this.errorMessage,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.simple-input {
  position: relative;
  width: 100%;
  &__control {
    width: 100%;
    color: #000;
    font-size: 16px;
    font-weight: inherit;
    line-height: 36px;
    background: none;
    border: none;
    border-bottom: 1px solid $admin-text-color;
    transition: border $trans-hover;

    &:focus {
      border-bottom-color: $content-color;
    }
    &:hover {
      border-bottom-color: $content-color;
    }
    &:read-only {
      border-color: transparent;
    }
    @include desktop {
      font-size: 14px;
    }

    &_error,
    &_error:focus {
      border-bottom-color: $danger-color;
    }

    &_large {
      font-size: 18px;
      font-weight: 600;
      line-height: 44px;

      &::placeholder {
        font-weight: 400;
      }
    }
  }

  &__label {
    color: rgba($admin-text-color, 0.5);
    margin-bottom: 8px;
  }

  &__measure {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  &_disabled {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(white, 0.8);
    }
  }
  &__error {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
  }
}

.slide-up {
  &-enter-to,
  &-leave {
    transition: all $trans-hover;
  }
  &-enter,
  &-leave-to {
    transform: translateY(50%);
    opacity: 0;
  }
}
</style>