<template lang="pug">
  .root-container
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
  export default {
    components:{
      appHeader: () => import("./components/header"),
      tabs: () => import("./components/tabs")
    }
  };
</script>

<style lang="postcss">

@import "normalize.css";
@import "../styles/mixins-admin.pcss";
@import "../styles/layout/base-admin.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.header {
  &__desc {
    background-color: $dark-content-color;
    padding: 23px 0;
  }
  &__navigation {
    padding: 23px 0;
    background-color: #fff;
  }
}

</style>