<template lang="pug">
  .login-page
    .login-page__form
      login-form
</template>

<script>
import LoginForm from '../LoginForm';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style lang="postcss" scoped>
.login-page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.7);
  background-image: url(../../../images/admin_icons/gridtile.png)
}
</style>