<template lang="pug">
  button.card-button(
    :class="{ 'card-button_disabled': isDisabled }"
    v-on="$listeners"
  )
    .card-button__icon
    .card-button__text
      slot
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.card-button {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 0;
  background-image: $primary-gradient;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  transition: background-image $trans-hover;
  &:hover {
    background-image: $reverse-gradient;
  }
  &_disabled::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(white, 0.7);
    cursor: default;
  }

  &__icon {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid white;
    &::before,
    &::after {
      position: absolute;
      content: '';
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
    }
    &::before {
      height: 34px;
      width: 2px;
    }
    &::after {
      width: 34px;
      height: 2px;
    }
    @include tablets {
      width: 100px;
      height: 100px;
    }
  }

  &__text {
    margin-top: 30px;
  }
}
</style>