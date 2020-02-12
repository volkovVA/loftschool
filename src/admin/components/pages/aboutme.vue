<template lang="pug">
  section.about-section
    .about-section__heading
      h2.title.about-section__title Блок  &laquo;Обо мне&raquo;
      button(@click="showNewSkill" v-if="!isShowNewSkill").about-section__btn Добавить группу
    .about-section__content
      .about-section__skill-group(v-if="isShowNewSkill")
        new-skill-group(
          @create-category="createCategory"
          @reset="isShowNewSkill = false"
        )
      .about-section__skill-group(
        v-for="category in categories"
      )
        skill-group(
          :key="category.id"
          :title="category.category"
          :category-id="category.id"
          :skills="skillsByCategory[category.id]"
          @update-category="updateCategory(category.id, $event)"
          @delete-group="deleteSkillGroup(category.id)"
          @add-skill="createSkill(category.id, $event)"
          @update-skill="updateSkill"
          @delete-skill="deleteSkill"
        )
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ClipLoader } from '@saeris/vue-spinners';
import * as variables from '../../../styles/variables.json';
import PageTitle from '../PageTitle.vue';
import BasicButton from '../BasicButton.vue';
import NewSkillGroup from '../NewSkillGroup';
import SkillGroup from '../SkillGroup.vue';
export default {
  components: {
    NewSkillGroup,
    SkillGroup,
    PageTitle,
    BasicButton,
    NewSkillGroup,
    SkillGroup
  },
  data() {
    return {
      isShowNewSkill: false,
      isLoading: false,
      accentColor: variables['content-color']
    }
  },
  computed: {
    ...mapState('skills', {
      categories: (state) => state.categories,
      skills: (state) => state.skills,
    }),
    skillsByCategory() {
      const result = {};
      this.categories.forEach((category) => {
        result[category.id] = [];
      });
      this.skills.forEach((skill) => {
        if (result[skill.category]) {
          result[skill.category].push(skill);
        }
      });
      return result;
    }
  },
  methods: {
    ...mapActions('tooltips', ['showTooltip']),
    ...mapActions('skills', [
      'fetchSkills',
      'addSkill',
      'editSkill',
      'removeSkill',
      'fetchCategories',
      'addNewSkillGroup',
      'updateSkillGroup',
      'removeSkillGroup',
    ]),
    showNewSkill() {
      this.isShowNewSkill = true;
    },
    hideNewSkill() {
      this.isShowNewSkill = false;
    },
    async createCategory(value) {
      try {
        await this.addNewSkillGroup(value);
        this.showTooltip({ type: 'success', text: 'Группа успешно добавлена', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
      this.isShowNewSkill = false;
    },
    async updateCategory(id, title) {
      const sourceCategory = this.categories.find((item) => item.id);
      if (sourceCategory && sourceCategory.category === title) {
        return;
      }
      try {
        await this.updateSkillGroup({ id, title });
        this.showTooltip({ type: 'success', text: 'Группа успешно обновлена', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    async createSkill(category, data) {
      try {
        await this.addSkill({ ...data, category });
        this.showTooltip({ type: 'success', text: 'Навык успешно добавлен', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    async updateSkill(data) {
      try {
        await this.editSkill(data);
        this.showTooltip({ type: 'success', text: 'Навык успешно обновлен', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    async deleteSkill(id) {
      try {
        await this.showTooltip({ type: 'success', text: 'Навык успешно удален', duration: 3000 });
        this.removeSkill(id);
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    async deleteSkillGroup(id) {
      try {
        await this.removeSkillGroup(id);
        this.showTooltip({ type: 'success', text: 'Группа успешно удалена', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    async fetchData() {
      this.isLoading = true;
      try {
        await Promise.all([this.fetchSkills(), this.fetchCategories()]);
      } catch (e) {
        this.showTooltip({ type: 'error', text: 'Произошла ошибка при загрузке данных', duration: 3000 });
      } finally {
        this.isLoading = false;
      }
    }
  },
  created() {
    this.fetchData();
  },
}
</script>  


<style lang="postcss" scoped>

  @import "../../../styles/mixins.pcss";

  .about-section {
    padding: 58px 0;
    margin-right: auto;

    @include Iphone {
      padding: 40px 0;
    }

    &__heading {
      display: flex;
      align-items: center;
      margin-right: auto;
      margin-bottom: 50px;
      @include phones {
        display: block;
        margin-bottom: 30px;
      }
      @include Iphone {
        padding: 0 20px;
      }
    }
    &__title {       
      margin-right: 55px;

      @include phones {
        margin-bottom: 30px;
      }
    }
    &__btn {
      position: relative;
      color: $content-color;
      font-size: 1rem;
      font-weight: 700;
      padding-left: 30px;
      &:before {
        content: "+";
        position: absolute;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        font-size: 0.8rem;
        background-image: $primary-gradient;
        color: #fff;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:after {
        display: block;
        position: absolute;
        left: 0;
        width: 0;
        height: 2px;
        background-color: $content-color;
        content: "";
        transition: width $trans-hover;
      }
      &:hover:after {
        width: 100%;
      }
    }
    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    &__skill-group {
      margin-right: 28px;
      margin-bottom: 28px;
      &:nth-child(even) {
        margin-right: 0;
      }

      @include phones {
        margin-right: 0;
      }
    }
  }  

</style>
