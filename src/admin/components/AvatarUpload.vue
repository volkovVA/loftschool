<template lang="pug">
  .avatar-upload
    label.avatar-upload__control(for="file-input")
      img.avatar-upload__image(v-if="renderedPhoto" :src="renderedPhoto")
    input.avatar-upload__file#file-input(
      ref="file-input"
      type="file"
      accept="image/jpeg,image/png"
      @change="handlePhotoUpload"
    )
    basic-button.avatar-upload__button(
      size="small"
      display="flat"
      @click="uploadFile"
    ) {{ value ? 'Изменить фото' : 'Добавить фото' }}
    transition(name="slide-up")
      .avatar-upload__error(v-if="errorMessage")
        error-tooltip {{ errorMessage }}
</template>

<script>
import ErrorTooltip from './ErrorTooltip.vue';
import BasicButton from './BasicButton.vue';
import uploader from '../mixins/uploader';

export default {
  components: {
    ErrorTooltip,
    BasicButton,
  },
  mixins: [uploader],
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.avatar-upload {
  position: relative;
  &__control {
    position: relative;
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: $placeholder-color;
    background-image: url('../../images/admin_icons/man-user.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 85px 113px;
    transition: opacity $trans-hover;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      opacity: 0.7;
    }
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 35px;
    transform: scale(1.7);
  }
  &__file {
    display: none;
  }
  &__button {
    width: 100%;
    white-space: nowrap;
  }
  &__error {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
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