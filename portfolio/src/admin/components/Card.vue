<template lang="pug">
  .card
    .card__media(v-if="$slots.media")
      slot(name="media")
    .card__header(v-if="$slots.title")
      slot(name="title")
    .card__body
      slot(name="content")
</template>

<style lang="postcss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: white;

  &__header {
    padding: 20px 0;
    margin: 0 20px;
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
    font-size: inherit;
    font-weight: 700;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: 30px;
  }
}
</style>