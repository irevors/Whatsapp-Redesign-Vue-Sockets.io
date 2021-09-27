<template>
  <article class="C-conversation-item">
    <div
      class="C-avatar__img C-conversation-item__img"
      :style="{ backgroundImage: `url(${data.img})` }"
    ></div>
    <div class="C-conversation-item__text">
      <p class="C-conversation-item__timestamp">{{ data.timestamp }}</p>
      <p class="C-conversation-item__sender">{{ data.name }}</p>
      <p class="C-conversation-item__msg text-truncate">{{ data.lastMsg }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "conversationItem",
  props: ["data"],
};
</script>

<style lang="scss">
.C-conversation-item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  &__img {
    display: inline-block;
  }
  &__text {
    display: inline-block;
    position: relative;
    justify-self: flex-end;
    width: 90%;
    height: 100%;
  }
  &__timestamp,
  &__sender,
  &__msg {
    margin-bottom: 0;
    user-select: none;
  }
  &__timestamp {
    position: absolute;
    right: 0;
    font-weight: 400;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.4);
  }
  &__sender {
    font-size: 1rem;
    font-weight: 500;
  }
  &__msg {
    max-width: 400px;
    font-weight: 400;
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.4);
    display: inline-block;
  }
  //   &--new-message {
  //   }
}
</style>