<template>
  <div class="C-avatar__img" :style="{ backgroundImage: `url(${src})` }"></div>
</template>

<script>
export default {
  props: { src: { type: String, default: "" } },
};
</script>

<style lang="scss">
.C-avatar {
  &__img {
    padding: 2rem;
    border-radius: 50%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>