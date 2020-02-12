<template lang="pug">
  .tooltip(:class="`tooltip_${type}`")
    .tooltip__title {{ text }}
    a.tooltip__close(@click="closeTooltip")
      icon(name="cross")
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Icon from './Icon.vue';

export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState('tooltips', {
      text: (state) => state.text,
      type: (state) => state.type,
    }),
  },
  methods: {
    ...mapActions('tooltips', ['closeTooltip']),
  },
};
</script>

<style lang="postcss">
@import '../../styles/mixins.pcss';

.tooltip {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  margin: 0 auto;
  width: 390px;
  color: white;

  @include tablets {
    margin-left: 0;
  }
  @include phones {
    width: 100vw;
  }

  &_success {
    background-color: $success-notify;
  }

  &_error {
    background-color: $error-notify;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &__close {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    fill: white;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>