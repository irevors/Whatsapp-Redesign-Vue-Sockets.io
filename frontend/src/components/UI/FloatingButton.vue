<template>
  <button class="btn rounded-circle C-floating-btn">
    <slot
      ><span
        ><font-awesome-icon
          :icon="['fas', 'plus']"
          class="C-floating-btn__icon" /></span
    ></slot>
  </button>
</template>

<style lang="scss">
.C-floating-btn {
  position: fixed;
  padding: 0;
  background-color: #5ebc7b;
  color: #fff;
  width: 50px;
  height: 50px;
  bottom: 18%;
  right: 20px;
  &:hover {
    color: #36446a;
  }
  &__icon {
    color: #fff;
  }
}
</style>