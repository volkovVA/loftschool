<template lang="pug">
  card.skill-group
    category-control.skill-group__category(
      slot="title"
      v-model="categoryTitle"
      :is-edit-mode="isEditMode"
      @edit="isEditMode = true"
      @cancel="onResetCategoryChanges"
      @delete="onDeleteSkillGroup"
      @save="onSaveCategoryChanges"
    )
    template(slot="content")
      table.skill-group__skills-table
        skill-row(
          v-for="skill in skills"
          :key="skill.id"
          :title="skill.title"
          :percent="skill.percent"
          @save="onUpdateSkill(skill, $event)"
          @delete="$emit('delete-skill', skill.id)"
        )
      .skill-group__new-skill
        new-skill(
          @add="$emit('add-skill', $event)"
        )
</template>

<script>
import Card from './Card.vue';
import CategoryControl from './CategoryControl.vue';
import SkillRow from './SkillRow.vue';
import NewSkill from './NewSkill.vue';

export default {
  components: {
    Card,
    CategoryControl,
    SkillRow,
    NewSkill,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    categoryId: {
      type: Number,
      default: 0,
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      categoryTitle: '',
      isEditMode: false,
    };
  },
  methods: {
    onUpdateSkill(prevValue, nextValue) {
      if (prevValue.title === nextValue.title && prevValue.percent === nextValue.percent) {
        return;
      }
      this.$emit('update-skill', { ...prevValue, ...nextValue });
    },
    onResetCategoryChanges() {
      this.categoryTitle = this.title;
      this.isEditMode = false;
    },
    onSaveCategoryChanges() {
      this.$emit('update-category', this.categoryTitle);
      this.isEditMode = false;
    },
    onDeleteSkillGroup() {
      this.$emit('delete-group');
    },
  },
  created() {
    this.categoryTitle = this.title;
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.skill-group {
  height: 100%;
  min-height: 415px;
  @include tablets {
    width: 336px;
  }

  &__category {
    padding: 0 10px;
  }

  &__skills-table {
    margin-bottom: 30px;
  }

  &__new-skill {
    align-self: flex-end;
    margin-top: auto;
    margin-bottom: 14px;
  }
}
</style>