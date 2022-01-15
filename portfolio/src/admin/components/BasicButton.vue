<template lang="pug">
   button.basic-button(
     :class="buttonClass"
     :type="type"
     :disabled="disabled"
     v-on="listerers"
    )
    .basic-button__icon-wrapper(v-if="icon")
      icon.basic-button__icon(:name="icon")
    .basic-button__text
      slot
</template>

<script>
import Icon from './Icon';

export default {
  components: {
    Icon,
  },
  props: {
    theme: {
      type: 'primary' | 'default',
      default: 'primary',
    },
    type: {
      type: String,
      default: 'button',
    },
    display: {
      type: 'filled' | 'border' | 'flat',
      default: 'filled',
    },
    size: {
      type: 'large' | 'default' | 'small',
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    listerers() {
      return {
        ...this.$listeners,
        click: (event) => {
          if (!this.disabled) {
            this.$emit('click', event);
          }
        },
      };
    },
    buttonClass() {
      return {
        'basic-button_circle': this.circle,
        'basic-button_disabled': this.disabled,
        'basic-button_bordered': this.bordered,
        [`basic-button_${this.size}`]: true,
        [`basic-button_${this.display}`]: true,
        [`basic-button_${this.theme}`]: true,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.basic-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
  background-image: $primary-gradient;
  color: white;
  font-size: 18px;
  font-weight: 700;
  transition: background-image $trans-hover;
  cursor: pointer;
  @include phones {
    width: 100%;
    padding: 24px 50px;
  }
  &:hover {
    background-image: $reverse-gradient;
  }

  &_disabled {
    cursor: default;
    &:hover {
      background-image: $primary-gradient;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(white, 0.3);
    }
  }

  &_flat {
    background-image: none;
    &:hover {
      background-image: none;
    }
    &:not(.basic-button_disabled):hover {
      background-image: none;
      opacity: 0.6;
    }
  }

  &_small {
    font-size: 16px;
    padding: 21px 40px;
  }

  &_small &__text {
    padding: 0 13px;
  }

  &_small&_bordered {
    border-radius: 30px;
  }

  &_primary&_flat &__text {
    color: $content-color;
  }

  &_circle {
    background: none;
    padding: 0;
    &:hover {
      background-image: none;
    }
  }

  &_circle &__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: $primary-gradient;
    transition: background-image $trans-hover;
  }

  &_circle:hover &__icon-wrapper {
    background-image: $reverse-gradient;
  }

  &_circle:hover &__text {
    opacity: 0.8;
  }

  &_small&_circle &__icon-wrapper {
    width: 21px;
    height: 21px;
  }

  &_circle&_disabled &__icon-wrapper {
    background: $admin-text-color;
    cursor: default;
    opacity: 0.3;
  }

  &__icon {
    width: 15px;
    height: 15px;
    fill: white;
  }

  &_small &__icon {
    width: 8px;
    height: 8px;
  }
}
</style>