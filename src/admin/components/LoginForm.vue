<template lang="pug">
    //- transition(name="slide-up" appear)
    .login-form
      .login-form__title Авторизация
      button.login-form__close(@click="exitFromAdmin")
        icon(name="remove")
      form.login-form__body(@submit.prevent="signIn")
        .login-form__control
          basic-input(
            v-model="name"
            icon="user"
            label="Логин"
          )
        .login-form__control
          basic-input(
            v-model="password"
            icon="key"
            label="Пароль"
            type="password"
          )
        .login-form__button
          basic-button(
            type="submit"
            :disabled="isLoading || !name.length || password.length < 4"
          ) ОТПРАВИТЬ
</template>

<script>
import { mapActions } from 'vuex';
import BasicInput from './BasicInput.vue';
import BasicButton from './BasicButton.vue';
import Icon from './Icon.vue';

export default {
  components: {
    BasicInput,
    BasicButton,
    Icon,
  },
  data() {
    return {
      name: '',
      password: '',
      isLoading: false,
    };
  },
  methods: {
    ...mapActions('user', ['login']),
    ...mapActions('tooltips', ['showTooltip']),
    async signIn() {
      this.isLoading = true;
      try {
        await this.login({ name: this.name, password: this.password });
        this.$router.replace('/');
      } catch (error) {
        this.showTooltip({ type: 'error', text: error.message, duration: 3000 });
        this.password = '';
      }
      this.isLoading = false;
    },
    exitFromAdmin() {
      location.href = 'https://github.com/volkovVA/portfolio';
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.login-form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 563px;
  width: 100vw;
  padding: 60px 78px;
  background-color: white;

  @include phones {
    height: 100vh;
    padding: 30px;
  }

  &__close {
    position: absolute;
    top: 30px;
    right: 30px;
    background: none;
    fill: $text-color;
    width: 20px;
    height: 20px;
    padding: 0;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.3;
    }
  }

  &__body {
    @include phones {
      align-self: stretch;
    }
  }

  &__title {
    color: $admin-text-color;
    font-size: 36px;
    font-weight: 700;

    @include phones {
      font-size: 30px;
    }
  }

  &__control {
    margin-top: 60px;
  }

  &__button {
    margin-top: 40px;
  }
}

/* .slide-up {
  &-enter-to,
  &-leave {
    transition: all 0.3s ease;
  }
  &-enter,
  &-leave-to {
    transform: translateY(50%);
    opacity: 0;
  }
  @include phones {
    &-enter-to,
    &-leave {
      transition: none;
    }
  }
} */
</style>