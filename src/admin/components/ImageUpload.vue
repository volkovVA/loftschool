<template lang="pug">
  .image-upload
    label.image-upload__control(for="file-input")
      .image-upload__placeholder(v-if="!renderedPhoto")
        .image-upload__placeholder-text Перетащите или загрузите #[br] для загрузки изображения
        basic-button.image-upload__button(
          size="small"
          :bordered="true"
          @click="uploadFile"
        ) Загрузить фото
      img.image-upload__value(v-else :src="renderedPhoto")
    input.image-upload__file#file-input(
      ref="file-input"
      type="file"
      accept="image/jpeg,image/png"
      @change="handlePhotoUpload"
    )
    basic-button.image-upload__change-image(
      v-if="renderedPhoto"
      display="flat"
      @click="uploadFile"
    ) Изменить превью
    transition(name="slide-up")
      .image-upload__error(v-if="errorMessage")
        error-tooltip {{ errorMessage }}
</template>

<script>
import ErrorTooltip from './ErrorTooltip.vue';
import BasicButton from './BasicButton';
import uploader from '../mixins/uploader';

export default {
  components: {
    BasicButton,
    ErrorTooltip,
  },
  mixins: [uploader],
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.image-upload {
  position: relative;
  &__control {
    display: block;
    width: 100%;
    height: 276px;
    cursor: pointer;
  }
  &__placeholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px dashed #a1a1a1;
    background-color: $placeholder-color;
    @include tablets {
      padding: 0 25px;
    }
  }
  &__placeholder-text {
    color: rgba($admin-text-color, 0.5);
    margin-bottom: 20px;
    line-height: 2;
  }
  &__value {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
  &__change-image {
    width: 100%;
  }
  &__file {
    display: none;
  }
  &__button {
    white-space: nowrap;
    text-transform: uppercase;
  }
  &__error {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
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