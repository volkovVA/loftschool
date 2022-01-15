<template lang="pug">
  .simple-textarea(
    :class="{ 'simple-input_disabled': disabled }"
  )
    .simple-textarea__label(v-if="label") {{ label }}
    textarea.simple-textarea__control(
      ref="textarea"
      :value="value"
      :readonly="readonly"
      :placeholder="placeholder"
      :class="inputClass"
      v-on="listeners"
    )
    transition(name="slide-up")
      .simple-textarea__error(v-if="errorMessage")
        error-tooltip {{ errorMessage }}
</template>

<script>
import ErrorTooltip from './ErrorTooltip';

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
    errorMessage: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: Number,
      default: 120,
    },
    size: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
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
            const scrollHeight =
              this.$refs.textarea.scrollHeight > this.maxHeight ? this.maxHeight : this.$refs.textarea.scrollHeight;
            this.$refs.textarea.style.height = `${scrollHeight}px`;
          }
        },
      };
    },
    inputClass() {
      return {
        [`simple-textarea__control_${this.size}`]: true,
        'simple-textarea__control_error': this.errorMessage,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.simple-textarea {
  position: relative;
  line-height: 0;
  width: 100%;
  &__control {
    width: 100%;
    color: $admin-text-color;
    font-size: 16px;
    font-weight: inherit;
    line-height: 1.5;
    padding: 20px;
    background: none;
    border: 1px solid rgba($admin-text-color, 0.2);
    transition: border $trans-hover;

    &:focus {
      border-color: $content-color;
    }
    &:read-only {
      border-color: transparent;
    }
    @include desktop {
      font-size: 14px;
    }

    &_error,
    &_error:focus {
      border-color: $danger-color;
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

  &__label {
    line-height: 1.42;
    color: rgba($admin-text-color, 0.5);
    margin-bottom: 20px;
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