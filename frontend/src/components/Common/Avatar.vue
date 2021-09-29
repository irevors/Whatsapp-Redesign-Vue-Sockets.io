<template>
  <div
    class="C-avatar__img"
    :style="{
      backgroundImage: `url(${src})`,
      padding: `${computedPadding}rem`,
    }"
    v-if="!text"
  ></div>
  <div
    class="C-conditional-text__wrapper"
    v-else
    :style="{ padding: `${computedPadding}rem` }"
  >
    <span
      class="C-conditional-text__text"
      :style="{ fontSize: `${computedFontSize}rem` }"
      >{{ text }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, default: "" },
    text: { type: String, default: null },
    padding: Number,
    fontSize: Number,
  },
  computed: {
    computedPadding() {
      return this.padding ? this.padding : 2;
    },
    computedFontSize() {
      return this.fontSize ? this.fontSize : 1;
    },
  },
};
</script>

<style lang="scss">
.C-avatar {
  &__img {
    border-radius: 50%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.C-conditional-text {
  &__wrapper {
    background-color: #5ebc7b;
    position: relative;
    border-radius: 50%;
  }
  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }
}
</style>