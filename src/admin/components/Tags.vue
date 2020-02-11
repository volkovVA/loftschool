<template lang="pug">
  .tags
    .tags__item(v-for="(tag, i) in tags" :key="i")
      tag(:is-readonly="isReadonly" :color="color" @remove="$emit('remove', i)") {{ tag }}
</template>

<script>
import Tag from './Tag.vue';

export default {
  components: {
    Tag,
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
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

.tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &__item {
    margin: 5px 8px;
    margin-left: 0;
    background-color: white;
    color: rgba($admin-text-color, 0.7);
    font-size: 13px;
    font-weight: 600;
    line-height: 30px;
    border-radius: 15px;
  }
}
</style>