<template lang="pug">
  .error-tooltip
    slot
</template>

<style lang="postcss" scoped>
.error-tooltip {
  padding: 0 20px;
  color: white;
  background-color: $danger-color;
  font-size: 14px;
  font-weight: 400;
  line-height: 48px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    border: 3px solid $danger-color;
    border-left-width: 5px;
    border-right-width: 5px;
  }
  &::before {
    border-top-color: transparent;
    border-left-color: transparent;
    transform: translateX(-100%);
  }
  &::after {
    border-top-color: transparent;
    border-right-color: transparent;
  }
}
</style>