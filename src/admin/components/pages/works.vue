<template lang="pug">
  section.work-section
    h2.title.work-section__title Блок  &laquo;Работы&raquo;
    .work-section__wrapper
      form.work
        .work__heading Редактирование Работы
        .work__content
          .work__load
            .work__pic
              .work__instruction Перетащите или загрузите для загрузки изображения 
              button.button-oval.work__button загрузить
            .work__change
              a.work__link Изменить превью 
          .work__entry
            label.work__title Название
              input.work__text(type="text" name="name")
            label.work__title Ссылка
              input.work__text(type="text" name="name")
            label.work__title Описание
              textarea.work__text.work__text--area(type="textarea" name="name")
            label.work__title Добавление тэга
              input.work__text(type="text" name="name")
            - var tags = ["HTML", "CSS", "Javascript"]
            .work__skills
              each item in tags
                .work__item #{item}
            .work__button
              button(type="button").work__button-cancel Отмена
              button(type="button").button-oval.work__button-save cохранить  
    .add-work
      ul.add-work__list
        li.add-work__item.add-work__item--new
          button.add-work__button-plus.button-add
            .button-add__plus +
            .button-add__instruction Добавить работу
        li.add-work__item
          .add-work__pic
            img(src="../../../images/content/slider/car.png").add-work__img
          .add-work__content  
            h3.add-work__title Сайт школы образования
            .add-work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a(href="#").add-work__link http://loftschool.ru
            .add-work__button
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

.work-section {
  width: 100%;
  padding: 50px 0;

  @include iphone {
    padding-bottom: 40px;
  }
  &__container {
    padding-bottom: 50px;
  }
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

.work {
  background-color: #fff;
  box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.1);
  padding: 0 25px;
  width: 100%;

    @include tablets {
      padding: 0 120px;
    }

    @include phones {
      padding: 0 25px;
      width: 340px;
    }

    @include iphone {
      width: 320px;
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
    padding: 45px 0;
    display: flex;

    @include tablets {
      display: block;
    }
  }
  &__load {
    margin-right: 25px;
    flex-basis: 50%;
    @include tablets {
      margin-right: 0;
      margin-bottom: 60px;
    }
  }
  &__pic {
    flex-basis: 50%;
    height: 275px;
    border: 1px solid #a1a1a1;
    background-color: #dee4ed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include tablets {
      margin-bottom: 30px;
    }
  }
  &__instruction {    
    width: 230px;
    opacity: 0.5;
    font-size: 1rem;
    font-weight: 500;
    line-height: 35px;
    margin-bottom: 25px;
    text-align: center;

    @include phones {
      width: 200px;
    }
  }
  &__change {
    text-align: center;
    display: none;

    @include tablets {
      display: block;
    }
  }
  &__link {   
    color: #383bcf;
    font-size: 1rem;
    font-weight: 500;
  }
  &__entry {
    flex-basis: 50%;
  }
  &__title {
    display: block;    
    opacity: 0.5;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 25px;
  }
  &__text {
    display: block;
    width: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.9);
    padding: 17px;
    &--area {
      height: 90px;
      margin-top: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.9);
      resize: vertical;
    }
  }
  &__skills {
    display: flex;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }
  &__item {
    border-radius: 15px;
    background-color: #f4f4f4;  
    opacity: 0.7;
    font-size: 0.8rem;
    font-weight: 500;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 7px 30px 7px 15px;
    position: relative;
    display: flex;
    align-items: center;
    &:last-child {
      margin-right: 0;
    }
    &:after {
      content: "+";
      position: absolute;
      right: 10px;
      transform: rotate(45deg);
      font-size: 1.5rem;
    }
  }
  &__button {
    text-align: right;

    @include tablets {
      text-align: center;
    }
  }
  &__button-cancel {    
    color: #383bcf;
    font-size: 16px;
    font-weight: 700;
    margin-right: 60px;

    @include phones {
      margin-right: 30px;
    }
  } 
}

.add-work {
  width: 100%;

  @include phones {
    width: 340px;
  }

  @include iphone {
    width: 320px;
  }

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
    padding-bottom: 25px;

    @include tablets {
      margin-right: 20px;
    }

    @include phones {
      margin-right: 0;
    }

    @include iphone {
      width: 320px;
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
      height: 555px;
      padding-bottom: 0;

      @include phones {
        height: 110px;
      }
    }
    @include tablets {
      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }
  &__button-plus {
    @include phones {
      display: flex;
      align-items: center;
    }
  }
  &__pic {
    width: 100%;
    height: 190px;
    overflow: hidden;
    margin-bottom: 40px;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__content {
    padding: 0 25px;

    @include iphone {
      padding: 0 20px;
    }
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
  &__link {
    display: block;    
    color: #383bcf;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 45px;
  }
  &__button {   
    display: flex;
    justify-content: space-between;
  }
} 

</style>