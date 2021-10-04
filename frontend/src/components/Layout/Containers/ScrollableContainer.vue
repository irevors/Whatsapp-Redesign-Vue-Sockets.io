<template>
  <perfect-scrollbar ref="scroll">
    <slot></slot>
  </perfect-scrollbar>
</template>

<script>
export default {
  computed: {
    currentParth() {
      return this.$route.path;
    },
  },
  watch: {
    currentParth() {
      this.$refs.scroll.$el.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss">
.ps {
  height: 100vh;
  &__thumb-y {
    background-color: var(--color__scrollbar-thumb) !important;
    opacity: 0.5;
  }
  &__rail-y:hover,
  &__rail-y:focus,
  &__rail-y.ps--clicking {
    background-color: var(--color__scrollbar-track) !important;
  }
}
</style>