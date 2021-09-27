<template>
  <div id="main-container" :class="currentTheme">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    currentTheme() {
      return this.$store.getters.getCurrentTheme === "light"
        ? "theme"
        : "theme--dark";
    },
  },
};
</script>

<style lang="scss">
@import "./scss/base.scss";

#main-container {
  font-family: "Inter", sans-serif;
  background-color: var(--color__bg);
  max-height: 100vh;
}
</style>
