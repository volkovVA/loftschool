<template lang="pug">
  .container.header__container
    nav.header__nav
      ul.header__list
        li.header__item(v-for="tab in tabs")
          router-link.header__link(  
            :to="tab.href"
            :data-text="tab.title"
            exact-active-class="active"
          )    
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          { title: "Обо мне", href: "/" },
          { title: "Отзывы", href: "/reviews" },
          { title: "Работы", href: "/works" }
        ]
      };
    }
  };
</script>

<style lang="postcss" scoped>

@import "../../../src/styles/mixins-admin.pcss";

.header {
  &__nav {
    margin-right: auto;
    @include phones {
    margin-right: 0;
  }
  }
  &__list {
    display: flex;

    @include phones {
      justify-content: space-between;
    }
  }
  &__item {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }

    @include phones {
      margin-right: 0;
    }
  } 
  &__link {
    color: $black-color;
    opacity: 0.7;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    padding: 25px 15px;
    transition: color $trans-hover; 
    &:hover {
      color: $content-color;
      opacity: 1;
    }
    &:before {
      content: attr(data-text);
    }
    &.active {
      color: $content-color;
      opacity: 1;
      border-bottom: 2px solid $content-color;
    }
  }
}

</style>

