<template lang="pug">
  header.header
    .header__desc
      .container.header__container
        .header__avatar
          img(src="../../images/content/userfiles/avatar.jpg").header__photo
        .header__content  
          .header__name Волков Вячеслав
          .header__info Панель администрирования
          a(href="#").header__exit Выйти
    .header__navigation
      .container.header__container
        nav.header__nav
          ul.header__list
            li.header__item(v-for="tab in tabs")
              router-link(
                :data-text="tab.title"
                :to="tab.href"
                exact-active-class="active"
              ).header__link
            
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          { title: "Обо мне", href: "/admin" },
          { title: "Работы", href: "/works" },
          { title: "Отзывы", href: "/reviews" }
        ]
      };
    }
  };
</script>

<style lang="postcss" scoped>

  @mixin tablets() {
    @media screen and (max-width: 768px) {
      @content;
    }
  }

  @mixin phones() {
    @media screen and (max-width: 460px) {
      @content;
    }
  }

  @mixin iphone() {
    @media screen and (max-width: 320px) {
      @content;
    }
  }

  .header {
    &__desc {
      background-color: #414166;
    }
    &__container {
      flex-direction: row;
      justify-content: space-between;
      color: #fff;

      @include phones {
        justify-content: center;
      }

      @include iphone {
        max-width: 280px;
      }
    }
    &__desc {
      padding: 14px 0;
    }
    &__avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
    }
    &__photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__content {
      width: 100%;
      display: flex;
      align-items: center;

      @include phones {
        display: block;
      }
    }
    &__name {
      font-size: 1.1rem;
      font-weight: 400;
      margin-right: 20px;
    }
    &__info {   
      opacity: 0.5;
      font-size: 0.9rem;
      font-weight: 400;

      @include phones {
        display: none;
      }
    }
    &__exit {
      opacity: 0.7;
      font-size: 16px;
      font-weight: 400;
      text-decoration: underline;
      color:#fff;
      margin-left: auto;
    }
    &__navigation {
      padding: 23px 0;
      background-color: #fff;
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
      color: #000;
      opacity: 0.7;
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      padding: 21px 15px;
      &:hover {
        color: #383bcf;
        opacity: 1;
        border-bottom: 2px solid #383bcf;
      }
      &:before {
        content: attr(data-text);
      }
    }
  }

</style>