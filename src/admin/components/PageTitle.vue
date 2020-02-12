<template lang="pug">
  h1.page-title {{ $route.meta.title }}
</template>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.page-title {
  color: $admin-text-color;
  font-size: 21px;
  font-weight: 700;

  @include phones {
    font-size: 18px;
  }
}
</style>