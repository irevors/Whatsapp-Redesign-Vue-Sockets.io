<template>
  <div
    class="C-message-item"
    :class="{
      'C-message-item--message-out': messageOut,
      'C-message-item--message-in': !messageOut,
    }"
  >
    <div class="C-message-item__container">
      <div class="C-message-item__bubble">
        <div class="C-message-item__msg">
          <slot />
        </div>
      </div>

      <span
        class="C-message-item__tail"
        :class="{
          'C-message-item__tail--out': messageOut,
          'C-message-item__tail--in': !messageOut,
        }"
        ><svg width="16" height="8">
          <path d="M0,0 L8,8 L16,0 L0,0"></path></svg
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageOut: { type: Boolean, default: null },
  },
};
</script>

<style lang="scss">
.C-message-item {
  $block: &;
  display: flex;
  width: 90%;
  margin-bottom: 2px;
  &__container {
    position: relative;
    max-width: 100%;
  }
  &__bubble {
    padding: 0.5rem 0.6rem;
    position: relative;
    border-radius: 9px;
    background: rgb(174, 79, 79);
    background: linear-gradient(90deg, #ae4f4f 0%, #283053 100%);
    z-index: 3;
  }
  &__msg {
    font-size: var(--conversation-text);
    color: #fff;
  }
  &__tail {
    position: absolute;
    opacity: 0;
    top: 0;
    z-index: 100;
    display: block;
    width: 8px;
    height: 20px;
    z-index: 2;
  }
  // show svg tail on first incoming msg & after an outcoming msg
  &--message-out + &--message-in,
  &--message-in:first-of-type {
    #{$block}__tail--in {
      opacity: 1;
      left: -8px;
      transform: translateY(-50%);
      svg {
        fill: #fff;
      }
    }
  }
  // show svg tail on first incoming msg & after an outcoming msg
  &--message-in + &--message-out,
  &--message-out:first-of-type {
    #{$block}__tail--out {
      opacity: 1;
      right: -4px;
      transform: translate(-50%, -50%);
      svg {
        fill: #283053;
      }
    }
  }
  // out msgs stylings
  &--message-out {
    justify-content: flex-end;
    margin-left: auto;
    & + #{$block}--message-in {
      margin-top: 10px;
    }
  }
  // incoming msgs stylings
  &--message-in {
    justify-content: flex-start;
    & + #{$block}--message-out {
      margin-top: 10px;
    }
    #{$block}__bubble {
      background: #fff;
    }
    #{$block}__msg {
      color: #000;
    }
  }
}
</style>