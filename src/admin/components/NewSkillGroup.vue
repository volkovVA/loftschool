<template lang="pug">
  card.skill-group
    category-control(
      slot="title"
      v-model="categoryTitle"
      :is-edit-mode="isEditMode"
      @edit="isEditMode = true"
      @cancel="onReset"
      @save="onSave"
    )
    template(slot="content")
      .skill-group__new-skill
        new-skill(:is-disabled="true")
</template>

<script>
import Card from './Card';
import CategoryControl from './CategoryControl.vue';
import NewSkill from './NewSkill.vue';

export default {
  components: {
    Card,
    CategoryControl,
    NewSkill,
  },
  data() {
    return {
      isEditMode: true,
      categoryTitle: '',
    };
  },
  methods: {
    onReset() {
      this.$emit('reset');
    },
    onSave() {
      if (this.categoryTitle) {
        this.$emit('create-category', this.categoryTitle);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.skill-group {
  height: 100%;
  min-height: 415px;
  &__new-skill {
    align-self: flex-end;
    margin-top: auto;
    margin-bottom: 14px;
  }
}
</style>