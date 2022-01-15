<template lang="pug">
  .works-page
    .works-page__preloader(v-if="isLoading")
      clip-loader(:color="accentColor" :size="70")
    template(v-else)
      .works-page__title
        page-title
      .works-page__form(ref="form" v-if="isShowForm")
        work-form(
          :current-work="currentWork"
          @reset="cancelWorkChanges"
          @create="createNewWork"
          @update="updateCurrentWork"
        )
      .works-page__grid
        card-gradient-button.works-page__item(
          :is-disabled="isShowForm && !currentWork"
          @click="addWork"
        ) Добавить #[br] работу
        work-item.works-page__item(
          v-for="item in works"
          :key="item.id"
          :work="item"
          :is-active="item === currentWork"
          @edit="editWork(item)"
          @delete="deleteWork(item.id)"
        )
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { ClipLoader } from '@saeris/vue-spinners';
import * as variables from '../../../styles/variables.json';
import PageTitle from '../PageTitle.vue';
import WorkForm from '../WorkForm.vue';
import CardGradientButton from '../CardGradientButton.vue';
import WorkItem from '../WorkItem.vue';

export default {
  components: {
    PageTitle,
    WorkForm,
    CardGradientButton,
    WorkItem,
    ClipLoader
  },
  data() {
    return {
      currentWork: null,
      isShowForm: false,
      isLoading: false,
      accentColor: variables['content-color'],
    };
  },
  computed: {
    ...mapState('works', {
      works: (state) => state.works,
    }),
  },
  methods: {
    ...mapActions('works', ['fetchWorks', 'createWork', 'updateWork', 'removeWork']),
    ...mapActions('tooltips', ['showTooltip']),
    async createNewWork(data) {
      try {
        await this.createWork(data);
        this.showTooltip({ type: 'success', text: 'Работа успешно создана', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
      this.hideForm();
    },
    async updateCurrentWork(data) {
      try {
        await this.updateWork(data);
        this.showTooltip({ type: 'success', text: 'Работа успешно обновлена', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
      this.hideForm();
    },
    async deleteWork(id) {
      try {
        await this.removeWork(id);
        this.showTooltip({ type: 'success', text: 'Работа успешно удалена', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    showForm() {
      this.isShowForm = true;
      // this.$nextTick(() => {
      //   this.$scrollTo(this.$refs.form, 500, {
      //     container: '.inner-page__content',
      //     offset: -50,
      //   });
      // });
    },
    hideForm() {
      this.isShowForm = false;
      this.currentWork = null;
    },
    addWork() {
      this.currentWork = null;
      this.showForm();
    },
    cancelWorkChanges() {
      this.currentWork = null;
      this.hideForm();
    },
    editWork(work) {
      this.currentWork = work;
      this.showForm();
    },
    async fetchData() {
      this.isLoading = true;
      try {
        await this.fetchWorks();
      } catch (e) {
        this.showTooltip({ type: 'error', text: 'Произошла ошибка при загрузке работ', duration: 3000 });
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="postcss" scoped>
@import '../../../styles/mixins.pcss';

.works-page {
  padding: 50px;

  @include desktop {
    padding: 50px 30px;
  }

  @include phones {
    padding: 40px 20px;
  }

  &__item {
    @include phones {
      padding: 20px 0;
    }
  }

  &__title {
    margin-bottom: 60px;
    @include phones {
      padding: 0 20px;
      margin-bottom: 48px;
    }
  }

  &__preloader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__form {
    margin-bottom: 32px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    @include desktop {
      grid-gap: 20px;
    }

    @include tablets {
      grid-template-columns: 1fr 1fr;
    }

    @include phones {
      grid-template-columns: 1fr;
    }
  }
}
</style>  