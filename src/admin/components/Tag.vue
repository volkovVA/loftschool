<template lang="pug">
  .tag(:class="`tag_${color}`")
    .tag__text
      slot
    icon.tag__close(v-if="!isReadonly" name="cross" @click.native="$emit('remove')")
</template>

<script>
import Icon from './Icon.vue';

export default {
  components: {
    Icon,
  },
  props: {
    isReadonly: {
      type: Boolean,
      default: true,
    },
    color: {
      type: 'white' | 'gray',
      default: 'white',
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.tag {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-right: 8px;
  background-color: white;
  color: rgba($admin-text-color, 0.7);
  font-size: 13px;
  font-weight: 600;
  line-height: 30px;
  border-radius: 15px;

  &_gray {
    background-color: #f4f4f4;
  }

  &__close {
    width: 11px;
    height: 11px;
    margin-left: 10px;
    fill: $admin-text-color;
    transition: opacity $trans-hover;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>