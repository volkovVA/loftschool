<template lang="pug">
  card.review-item(:class="{ 'review-item_active': isActive }")
    .review-item__header(slot="title")
      img.review-item__user-avatar(:src="imageSrc")
      .review-item__user-info
        .review-item__user-name {{ review.author }}
        .review-item__user-position {{ review.occ }}
    template(slot="content")
      .review-item__text {{ review.text }}
      .review-item__controls
        button.review-item__button.review-item__button_edit(@click="$emit('edit')")
          .review-item__button-text Править
          icon.review-item__button-icon_edit(name="pencil")
        button.review-item__button.review-item__button_delete(@click="$emit('delete')")
          .review-item__button-text Удалить
          icon.review-item__button-icon_delete(name="cross")
</template>

<script>
import { getAbsoluteImgPath } from '../helpers/pictures';
import Card from './Card.vue';
import Icon from './Icon.vue';

export default {
  components: {
    Card,
    Icon
  },
  props: {
    review: {
      type: Object,
      default: {},
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    imageSrc() {
      return getAbsoluteImgPath(this.review.photo);
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.review-item {
  position: relative;
  &_active::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(white, 0.7);
  }
  &__header {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  &__user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-position: center 0;
    object-fit: cover;
  }
  &__user-info {
    margin-left: 20px;
  }
  &__user-name {
    color: $admin-text-color;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
  }
  &__user-position {
    color: rgba($admin-text-color, 0.5);
    font-size: 16px;
    font-weight: 700;
  }
  &__text {
    margin: 20px 0;
    color: rgba($admin-text-color, 0.7);
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
  }
  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
  }
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: transparent;
    &:hover {
      opacity: 0.7;
    }
  }
  &__button-text {
    margin-right: 10px;
    font-weight: 600;
    color: rgba($admin-text-color, 0.5);
  }
  &__button-icon {
    &_edit {
      width: 17px;
      height: 17px;
      fill: $links-color;
    }
    &_delete {
      width: 15px;
      height: 15px;
      fill: $danger-color;
    }
  }
}
</style>