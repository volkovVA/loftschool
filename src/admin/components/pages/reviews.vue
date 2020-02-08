<template lang="pug">
  section.review-section
    h2.title.review-section__title Блок  &laquo;Отзывы&raquo;
    .review-section__wrapper
      form.review
        .review__heading Новый отзыв
        .review__content
          .review__load
            .review__avatar
              img(src="../../../images/admin_icons/man-user.png").review__photo
            button.review__button Добавить фото
          .review__entry
            .review__row           
              label.review__title Имя автора
                input.review__text(type="text" name="name")
              label.review__title Титул автора
                input.review__text(type="text" name="name")
            label.review__title Отзыв
              textarea.review__text.review__text--area(type="textarea" name="name")
            .review__button
              button(type="button").review__button-cancel Отмена
              button(type="button").button-oval.work__button-save Сохранить
    .add-review
      ul.add-review__list
        li.add-review__item.add-review__item--new
          button.add-review__button-plus.button-add
            .button-add__plus +
            .button-add__instruction Добавить отзыв
        li.add-review__item
          .add-review__user
            .add-review__avatar
              img(src="../../../images/content/userfiles/vladimir.png").add-review__photo
            .add-review__user-info
              h3.add-review__name Владимир Сабанцев
              .add-review__position Преподаватель
          .add-review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.       
          .add-review__button
            button(type="button").button-edit Править
                img(src="../../../images/admin_icons/pencil-blue.png").button-edit__icon
            button(type="button").button-edit Удалить
                img(src="../../../images/admin_icons/cross.png").button-edit__icon
</template>

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

.review-section {
  width: 100%;
  padding: 50px 0;
  &__title {
    margin-right: auto;
    margin-bottom: 55px;

    @include iphone {
      padding: 0 20px;
      margin-bottom: 40px;
    }
  }
  &__wrapper {
    margin-bottom: 30px;
  }
}

.review {
  background-color: #fff;
  box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.1);
  padding: 0 25px;
  width: 100%;

  @include iphone {
    padding: 0 20px;
  }

  &__heading {
    padding: 27px 0;
    font-size: 1.1rem;
    font-weight: 700;
    opacity: 0.8;
    border-bottom: 1px solid #e6e6e7;
  }
  &__content {
    display: flex;
    padding: 50px 0;

    @include phones {
      display: block;
    }
  }
  &__load {
    flex-basis: 20%;
    margin-right: 30px;
    text-align: center;

    @include phones {
      margin-right: 0;
      margin-bottom: 60px;
    }
  }
  &__avatar {
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin-bottom: 25px;

    @include phones {
      margin: 0 auto 25px;
    }
  }
  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__button {   
    color: #383bcf;
    font-size: 1rem;
    font-weight: 700;  
  }
  &__entry {
    flex-basis: 80%;
    padding-right: 200px;

    @include tablets {
      padding-right: 0;
    }
  }
  &__row {
    display: flex;

    @include tablets {
      display: block;
      padding-right: 130px;
    }

    @include phones {
      padding-right: 0;
    }
  }
  &__title {
    display: block;    
    opacity: 0.5;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 25px;
    margin-right: 35px;
    width: 100%;
    &:nth-child(2) {
      margin-right: 0;
    }
  }
  &__text {
    display: block;
    width: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.9);;
    padding: 17px;
    &--area {
      height: 120px;
      margin-top: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.9);
      resize: vertical;
    }
  }
  &__button {
    text-align: right;
  }
  &__button-cancel {    
    color: #383bcf;
    font-size: 16px;
    font-weight: 700;
    margin-right: 60px;
  } 
}

.add-review {
  width: 100%;
  &__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  &__item {
    width: 340px;
    margin-bottom: 30px;
    box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-right: 30px;
    padding: 0 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include tablets {
      margin-right: 20px;
      &:nth-child(even) {
        margin-right: 0;
      }
    }
      &:nth-child(3n) {
        margin-right: 0;

        @include tablets {
          margin-right: 20px;
      }
    }
    &--new {
      background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      height: 380px;

      @include phones {
        height: 110px;
        margin-right: 0;
      }
    }

    @include iphone {
      width: 320px;
    }
  }
  &__button-plus {
    @include iphone {
      display: flex;
      align-items: center;
    }
    
  }
  &__user {
    display: flex;
    padding: 25px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
  }
  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
  }
  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 10px;
    transform: scale(1.7);
  }
  &__name {
    font-size: 1.1rem;
    font-weight: 700;
    opacity: 0.8;
    margin-bottom: 5px;
  }
  &__position {
    opacity: 0.5;
    font-size: 1rem;
    font-weight: 500;
  }
  &__text {
    height: 100%;
    opacity: 0.7;
    font-size: 1rem;
    font-weight: 500; 
  }
  &__content {
    padding: 0 25px;
  }
  &__title {
    font-size: 1.1rem;
    font-weight: 700;
    opacity: 0.8;
    margin-bottom: 25px;
  }
  &__text {    
    opacity: 0.7;
    font-size: 1rem;
    font-weight: 500;
    line-height: 27px;
    margin-bottom: 25px;
  }
  &__button {   
    display: flex;
    justify-content: space-between;
  }
} 

</style>