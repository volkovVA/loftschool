<style lang="postcss">
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
    background-color: #fff;
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
}

  .header {
    &__desc {
      background-color: #414166;
    }
    &__container {
      flex-direction: row;
      justify-content: space-between;
      color: #fff;
    }
    &__desc {
      padding: 20px 0;
    }
    &__avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      overflow: hidden;
    }
    &__photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__info {
      margin-right: 470px;
    }
    &__name {
      font-size: 1.1rem;
      font-weight: 400;
    }
    &__info {   
      opacity: 0.5;
      font-size: 0.9rem;
      font-weight: 400;
    }
    &__exit {
      opacity: 0.7;
      font-size: 16px;
      font-weight: 400;
      text-decoration: underline;
      color:#fff;
    }
    &__navigation {
      padding: 20px 0;
      background-color: #fff;
    }
    &__list {
      display: flex;
    }
    &__item {
      margin-right: 55px;
    } 
    &__link {
      color: #000;
      opacity: 0.7;
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      padding: 25px 0;
      &:hover {
        color: #383bcf;
        opacity: 1;
        border-bottom: 2px solid #383bcf;
      }
    }
  }

  .about {
      &__container {
        padding: 55px 0;
      }
      &__heading {
        display: flex;
        align-items: center;
        margin-right: auto;
        margin-bottom: 55px;
      }
      &__name {        
        color: #000;
        opacity: 0.8;
        font-size: 21px;
        font-weight: 700;
        margin-right: 55px;
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
      }
    }

  .form-about {
    width: 460px;
    height: 385px;
    background-color: #fff;
    margin-right: 15px;
    margin-bottom: 25px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.1);
    &:nth-child(even) {
      margin-right: 0;
    }
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 130px;
      border-bottom: 1px solid #e6e6e7;
    }
    &__group {
      width: 270px;
      border-bottom: 1px solid #000;
      padding: 10px 0;
    }
    &__button-accept {
      margin-right: 15px;
    }
    &__content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 15px 0;
    }
    &__table {
      opacity: 0.7;
    }
    &__row {
      height: 35px;
    }
    &__col:first-child {
        width: 65%;
    }
    &__col:last-child {
        text-align: right;
    }
    &__button-edit {
      margin-right: 10px;
    }
    &__new-skill {
      height: 130px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &_name {
        width: 220px;
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
      }
    }
    &__add {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
      color:#fff;
      font-size: 2.2rem;
    } 
  }  

</style>

<template lang="pug">
  .content
    header.header
      .header__desc
        .container.header__container
          .header__avatar
            img(src="../images/content/userfiles/avatar.jpg" alt="аватарка").header__photo
          .header__name Владимир Астаханов
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
    section.about
      .container.about__container
        .about__heading
          .about__name Блок  &laquo;Обо мне&raquo;
          button.about__btn Добавить группу
        .about__form
          form.form-about  
            .form-about__head
              input(type="text" name="name" placeholder="Название новой группы").form-about__group
              .form-about__button
                button(type="button").form-about__button-accept
                  img(src="../images/admin_icons/tick.png")
                button(type="button").form-about__button-close
                  img(src="../images/admin_icons/cross.png")
            .form-about__content
            .form-about__new-skill
              input(type="text" name="name" placeholder="Новый навык").form-about__new-skill_name
              input(type="number" name="name" min="0" max="100" placeholder="100%").form-about__new-skill_value
              button(type="button").form-about__add +
          form.form-about  
            .form-about__head
              input(type="text" name="name" placeholder="Название новой группы" value="Frontend").form-about__group
              .form-about__button
                button(type="button").form-about__button-accept
                  img(src="../images/admin_icons/tick.png")
                button(type="button").form-about__button-close
                  img(src="../images/admin_icons/cross.png")
            .form-about__content
              - 
                  var items = [
                      ['HTML', '30 %'],
                      ['CSS', '50 %',],
                      ['Javascript', '100 %',],
                  ]
              table.form-about__table
                  each row in items
                      tr.form-about__row
                          each cell in row
                              td.form-about__col #{cell}
                          td.form-about__col
                            button(type="button").form-about__button-edit
                              img(src="../images/admin_icons/pencil.png")
                            button(type="button").form-about__button-delete
                              img(src="../images/admin_icons/trash.png")   
            .form-about__new-skill
              input(type="text" name="name" placeholder="Новый навык").form-about__new-skill_name
              input(type="number" name="name" min="0" max="100" placeholder="100%").form-about__new-skill_value
              button.form-about__add +
</template>