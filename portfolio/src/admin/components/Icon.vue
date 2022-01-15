<template lang="pug">
  svg(:viewBox="icon.viewBox" preserveAspectRatio="none")
    use(:xlink:href="icon.url")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      defauilt: '',
    },
  },
  computed: {
    icon() {
      return require(`../../images/icons/${this.name}.svg`).default;
    }
  },
}
</script>