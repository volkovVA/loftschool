<template lang="pug">
  .popup
    .popup__container
      .popup__title Авторизация
      form.popup__form
        label.popup__text Логин
          input.popup__input(type="text" name="name")
          img(src="../images/admin_icons/avatar.png" role="presentation").popup__icon
        label.popup__text Пароль
          input.popup__input(type="text" name="name")
          img(src="../images/admin_icons/key.png" role="presentation").popup__icon
      button.button-oval.popup__close Закрыть
      <svg class="popup__cross" tabindex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        <g><path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/></g>
      </svg>
</template>


<style lang="postcss" scoped>

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.7);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1;
    &__title {
        font-size: 2.3rem;
        font-weight: 500;
        opacity: 0.8;
        margin-bottom: 30px;
    }
    &__container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 565px;
        height: 520px;
        background-color: #fff;
        @include phones {
        height: 100%;
        }  
    }
    &__text {
        position: relative; 
        opacity: 0.5;
        font-size: 1rem;
        font-weight: 500;
        padding-left: 40px;
        margin-bottom: 40px;
    }
    &__input {
        display: block;
        width: 400px;
        border-bottom: 1px solid #000;
        margin-bottom: 30px;
        padding: 20px 0 20px 45px;
        @include phones {
        width: 260px;
        } 
    }
    &__close {
        padding: 34px 120px;
        border-radius: 50px;
        @include phones {
        padding: 34px 75px;
        } 
    }
    &__icon {
        position: absolute;
        top: 35px;
    }
    &__cross {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }  
    &.active {
        display: flex;
    } 
  }

</style>