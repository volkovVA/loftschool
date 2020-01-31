<style lang="postcss">

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

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
}

input {
  border: none;
}

button {
  border: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  list-style: none;
}

.content {
  background-color: #f7f9fe;
}

.container {
  margin: 0 auto;
  max-width: 1080px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include tablets {
    max-width: 700px;
  }

  @include phones {
    max-width: 340px;
  }

  @include iphone {
    max-width: 320px;
    width: 100%;
  }
}

.title {
  color: #000;
  opacity: 0.8;
  font-size: 21px;
  font-weight: 700;
}

.button-oval {
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 25px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  padding: 15px 30px;
}

.button-edit {
  font-size: 1rem;
  font-weight: 500;
  color: #43436a;
  &__icon {
    padding-left: 10px;
  }
}

.button-add {
  &__plus {
    width: 150px;
    height: 150px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: 300;
    margin-bottom: 25px;
    color: #fff;

    @include phones {
      width: 50px;
      height: 50px;
      font-size: 2rem;
      margin-bottom: 0;
      margin-right: 25px;
    }
  }
  &__instruction {  
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 30px;
    width: 90px;
    text-align: center;
    margin: 0 auto;

    @include phones {
      width: 155px;
    }
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
  }
}

.about-section {
  padding: 50px 0;

  @include iphone {
    padding: 40px 0;
  }

  &__heading {
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-bottom: 50px;
    @include phones {
      display: block;
      margin-bottom: 30px;
    }
    @include iphone {
      padding: 0 20px;
    }
  }
  &__title {       
    margin-right: 55px;

    @include phones {
      margin-bottom: 30px;
    }
  }
  &__btn {
    position: relative;
    color: #383bcf;
    font-size: 1rem;
    font-weight: 700;
    background-color: #f7f9fe;
    padding-left: 30px;
    &:before {
      content: "+";
      position: absolute;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      font-size: 0.8rem;
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
      color: #fff;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  &__item {
    margin-right: 20px;
    margin-bottom: 25px;
    &:nth-child(even) {
      margin-right: 0;
    }

    @include phones {
      margin-right: 0;
    }
  }
}
.about {
  width: 520px;
  background-color: #fff;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.1);
  
  @include tablets {
    width: 340px;
  }

  @include phones {
    padding: 0;
  }

  @include iphone {
    width: 320px;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0;
    border-bottom: 1px solid #e6e6e7;

    @include phones {
      padding: 17px 10px;
    }

    @include iphone {
      padding: 17px 20px;
    }
  }
  &__group {
    width: 250px;
    border-bottom: 1px solid #000;
    padding: 10px 0;

    @include tablets {
      width: 200px;
    }
  }
  &__button-accept {
    margin-right: 15px;
  }
  &__content {
    height: 100%;
    padding: 15px 0;
    margin-bottom: 10px;

    @include phones {
      padding: 15px 10px;
    }

    @include iphone {
      padding: 15px 20px;
    }
  }
  &__table {
    opacity: 0.7;
  }
  &__row {
    height: 30px;
  }
  &__col:first-child {
    width: 80%;

    @include tablets {
      width: 67%;
    }

    @include iphone {
      width: 66%;
    }
  }
  &__col:last-child {
      text-align: right;
  }
  &__button-edit {
    margin-right: 15px;
  }
  &__new-skill {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 27px;

    @include phones {
      padding: 0 10px 27px;
    }

    @include iphone {
      justify-content: center;
    }

    @include iphone {
      padding: 0 20px 27px;
    }
    &_name {
      width: 160px;
      border-bottom: 1px solid #000;
      margin-right: 10px;
      padding: 10px 15px;
    }
    &_value {
      width: 75px;
      border-bottom: 1px solid #000;
      padding: 10px 0;
      margin-right: 15px;
      text-align: center;

      @include phones {
        margin-right: 10px;
        width: 60px;
      }
    }
  }
  &__add {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    color:#fff;
    font-size: 2.2rem;

    @include phones {
      width: 35px;
      height: 35px;
    }
  } 
}

.work-section {
  width: 100%;
  padding-bottom: 50px;

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

.review-section {
  width: 100%;
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

<template lang="pug">
  .content
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
    header.header
      .header__desc
        .container.header__container
          .header__avatar
            img(src="../images/content/userfiles/avatar.jpg" alt="аватарка").header__photo
          .header__content  
            .header__name Волков Вячеслав
            .header__info Панель администрирования
            a(href="#").header__exit Выйти
      .header__navigation
        .container.header__container
          nav.header__nav
            - var menu = ["Обо мне", "Работы", "Отзывы"]
            ul.header__list
              each item in menu
                  li.header__item.text
                      a(href=`#`).header__link #{item}
    .container                    
      section.about-section
        .about-section__heading
          h2.title.about-section__title Блок  &laquo;Обо мне&raquo;
          button.about-section__btn Добавить группу
        .about-section__form
          .about-section__item
            form.about  
              .about__head
                input(type="text" name="name" placeholder="Название новой группы").about__group
                .about__button
                  button(type="button").about__button-accept
                    img(src="../images/admin_icons/tick.png")
                  button(type="button").about__button-close
                    img(src="../images/admin_icons/cross.png")
              .about__content
                - 
                  var items = []
                table.about__table
                    each row in items
                        tr.about__row
                            each cell in row
                                td.about__col #{cell}
                            td.about__col
                              button(type="button").about__button-edit
                                img(src="../images/admin_icons/pencil.png")
                              button(type="button").about__button-delete
                                img(src="../images/admin_icons/trash.png") 
              .about__new-skill
                input(type="text" name="name" placeholder="Новый навык").about__new-skill_name
                input(type="number" name="name" min="0" max="100" placeholder="100%").about__new-skill_value
                button(type="button").about__add +
          .about-section__item      
            form.about  
              .about__head
                input(type="text" name="name" placeholder="Название новой группы" value="Frontend").about__group
                .about__button
                  button(type="button").about__button-accept
                    img(src="../images/admin_icons/tick.png")
                  button(type="button").about__button-close
                    img(src="../images/admin_icons/cross.png")
              .about__content
                - 
                  var items = [
                      ['HTML', '30 %'],
                      ['CSS', '50 %',],
                      ['Javascript', '100 %',],
                  ]
                table.about__table
                    each row in items
                        tr.about__row
                            each cell in row
                                td.about__col #{cell}
                            td.about__col
                              button(type="button").about__button-edit
                                img(src="../images/admin_icons/pencil.png")
                              button(type="button").about__button-delete
                                img(src="../images/admin_icons/trash.png")   
              .about__new-skill
                input(type="text" name="name" placeholder="Новый навык").about__new-skill_name
                input(type="number" name="name" min="0" max="100" placeholder="100%").about__new-skill_value
                button.about__add +     
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
                img(src="../images/content/slider/car.png").add-work__img
              .add-work__content  
                h3.add-work__title Сайт школы образования
                .add-work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").add-work__link http://loftschool.ru
                .add-work__button
                  button(type="button").button-edit Править
                      img(src="../images/admin_icons/pencil-blue.png").button-edit__icon
                  button(type="button").button-edit Удалить
                      img(src="../images/admin_icons/cross.png").button-edit__icon
      section.review-section
        h2.title.review-section__title Блок  &laquo;Отзывы&raquo;
        .review-section__wrapper
          form.review
            .review__heading Новый отзыв
            .review__content
              .review__load
                .review__avatar
                  img(src="../images/admin_icons/man-user.png").review__photo
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
                  img(src="../images/content/userfiles/vladimir.png").add-review__photo
                .add-review__user-info
                  h3.add-review__name Владимир Сабанцев
                  .add-review__position Преподаватель
              .add-review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.       
              .add-review__button
                button(type="button").button-edit Править
                    img(src="../images/admin_icons/pencil-blue.png").button-edit__icon
                button(type="button").button-edit Удалить
                    img(src="../images/admin_icons/cross.png").button-edit__icon
</template>