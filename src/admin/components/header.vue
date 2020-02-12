<template lang="pug">
  .container.header__container
    .header__avatar
      img(src="../../images/content/userfiles/avatar.jpg").header__photo
    .header__content  
      .header__username Волков Вячеслав
      .header__info Панель администрирования
      a.header__exit(@click="signOut") Выйти    
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"]),
    signOut() {
      this.logout();
      this.$router.replace('login');
    }
  }
};
</script>

<style lang="postcss" scoped>

  @import '../../styles/mixins.pcss';

  .header {
    &__container {
      flex-direction: row;
      justify-content: space-between;
      color: #fff;

      @include phones {
        justify-content: center;
      }

      @include Iphone {
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
    &__username {
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
  }

</style>