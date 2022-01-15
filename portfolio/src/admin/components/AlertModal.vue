<template lang="pug">
  .alert-modal(@click.self="$emit('close')")
    transition(name="slide-up" appear)
      .alert-modal__form
        .alert-modal__text
          slot
        .alert-modal__button
          basic-button(@click="$emit('close')") Закрыть
</template>

<script>
import BasicButton from './BasicButton.vue';

export default {
  components: {
    BasicButton,
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.alert-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($text-color, 0.9);
  transition: opacity 0.3s ease;

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 563px;
    min-height: 264px;
    color: $text-color;
    font-family: 600;
    font-size: 36px;
    line-height: 60px;
    background-color: white;
    padding: 57px;
    transition: all 0.3s ease;

    @include desktop {
      font-size: 34px;
    }
    @include tablets {
      font-size: 32px;
    }
    @include phones {
      font-size: 28px;
    }
  }
  &__text {
    margin-bottom: 30px;
  }
}

.slide-up {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }
  &-enter,
  &-leave-to {
    transform: translateY(50%);
    opacity: 0;
  }
}

.modal-enter,
.modal-leave-active {
  transform: translate(0, 0);
  opacity: 1;
}

.modal-enter .modal,
.modal-leave-active .modal {
  transform: translate(0, 50%);
  opacity: 0;
}
</style>