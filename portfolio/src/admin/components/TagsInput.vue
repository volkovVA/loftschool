<template lang="pug">
  .tags-input
    simple-input(
      :value="value"
      :label="label"
      :error-message="errorMessage"
      @input="$emit('input', $event)"
    )
    .tags-input__tags
      tags(:tags="tags" :is-readonly="false" color="gray" @remove="onRemoveTag")
</template>

<script>
import SimpleInput from './SimpleInput.vue';
import Tags from './Tags.vue';

export default {
  components: {
    SimpleInput,
    Tags,
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
  },
  computed: {
    tags() {
      return this.value
        .split(',')
        .map((tag) => tag.trim())
        .filter((value) => !!value);
    },
  },
  methods: {
    onRemoveTag(index) {
      const filteredTags = this.tags.filter((tag, i) => i !== index);
      this.$emit('input', filteredTags.join(', '));
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.tags-input {
  position: relative;
  width: 100%;

  &__tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 15px;
  }
  &__tag {
    margin-right: 9px;
  }
}
</style>