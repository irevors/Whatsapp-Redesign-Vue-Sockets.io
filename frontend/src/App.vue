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
// theme colors
$color__bg: #fafbff;
$color__text-title: #5ebc7b;
$color__bg--dark: #171f33;
$color__text-title--dark: #fff;
$color__text-primary: #36446a;
$color__text-primary--dark: #fff;
$color__status-border: #1977f3;
$color__status-border--dark: #8000ff;

.theme {
  --color__bg: #{$color__bg};
  --color__text-title: #{$color__text-title};
  --color__text-primary: #{$color__text-primary};
  --color__status-border: #{$color__status-border};
  &--dark {
    --color__bg: #{$color__bg--dark};
    --color__text-title: #{$color__text-title--dark};
    --color__text-primary: #{$color__text-primary--dark};
    --color__status-border: #{$color__status-border--dark};
  }
}

#main-container {
  font-family: "Inter", sans-serif;
  background-color: var(--color__bg);
}
</style>
