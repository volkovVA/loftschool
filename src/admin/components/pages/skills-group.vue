<template lang="pug">
  form(@submit.prevent="addNewCategory").about  
    .about__head
      input(type="text" name="name" placeholder="Название новой группы" v-model="title").about__group
      .about__button
        button(type="submit").about__button-accept
          img(src="../../../images/admin_icons/tick.png")
        button(type="button").about__button-close
          img(src="../../../images/admin_icons/cross.png")
    .about__content
      table.about__table
        tr.about__row
          td.about__col Скилл
          td.about__col Процент
          td.about__col
            button(type="button").about__button-edit
              img(src="../../../images/admin_icons/pencil.png")
            button(type="button").about__button-delete
              img(src="../../../images/admin_icons/trash.png") 
    .about__new-skill
      input(type="text" name="name" placeholder="Новый навык").about__new-skill_name
      input(type="number" name="name" min="0" max="100" placeholder="100%").about__new-skill_value
      button(type="button").about__add + 
</template>

<script>
export default {
   props: {
    value
    // category: {
    //   type: Object,
    //   default: () => {},
    //   required: true
    // }
  }
}
</script>

<style lang="postcss" scoped>

  @import "../../../styles/mixins-admin.pcss";

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
    &__table {
      opacity: 0.7;
    }
    &__row {
      height: 30px;
    }
    &__col:first-child {
      width: 60%;

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


</style>