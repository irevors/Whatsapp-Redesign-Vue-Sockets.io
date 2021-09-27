<template>
  <div class="chatApp-scrollable-container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.chatApp-scrollable-container {
  height: 100vh;
  overflow-y: hidden;
  &:hover,
  &:active,
  &:focus {
    overflow-y: scroll;
  }
}
</style>