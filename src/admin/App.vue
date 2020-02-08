<template lang="pug">
  .root-container
    .header-container
      app-header
    main.content-container 
      .container
        router-view                    
</template>

<script>
  export default {
    components:{
      appHeader: () => import("./components/header")
    }
  };
</script>

<style lang="postcss">

@import "normalize.css";
@import "../styles/mixins-admin.pcss";
@import "../styles/layout/base-admin.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

</style>