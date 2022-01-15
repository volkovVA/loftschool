<template lang="pug">
  .root-container
    .tooltip-container(:class="{ 'tooltip-container_showed': showed }")
      tooltip 
    .header-container
      header.header
        .header__desc
          app-header
        .header__navigation  
          tabs 
    main.content-container 
      .container
        router-view
                           
</template>

<script>
  import { mapState, mapActions, mapGetters } from "vuex";
  import Tooltip from './components/Tooltip';
  import appHeader from './components/header';
  import tabs from './components/tabs';

  export default {
    components:{
      appHeader,
      tabs,
      Tooltip
    },
    computed: {
      ...mapState('tooltips', {
        showed: (state) => state.showed,
      }), 
    } 
  };
</script>

<style lang="postcss">

@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base-admin.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.header {
  &__desc {
    background-color: $dark-content-color;
    padding: 18px 0;
  }
  &__navigation {
    padding: 24px 0;
    background-color: #fff;
  }
}

.tooltip-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  transition: transform $trans-hover;
  z-index: 1;
  &_showed {
    transform: translate(0);
  }
}

</style>