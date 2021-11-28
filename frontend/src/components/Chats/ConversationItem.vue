<template>
  <router-link
    :to="to"
    style="width: 100%; display: block; text-decoration: none"
  >
    <article class="C-conversation-item">
      <Avatar :src="data.img" class="C-conversation-item__img" />

      <div class="C-conversation-item__text">
        <p class="C-conversation-item__timestamp">{{ data.timestamp }}</p>
        <p class="C-conversation-item__sender">{{ data.name }}</p>
        <p class="C-conversation-item__msg text-truncate">
          {{ data.lastMsg }}
        </p>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  name: "conversationItem",
  props: ["data", "to"],
};
</script>

<style lang="scss">
.C-conversation-item {
  color: var(--color__main-view-primary-text);
  width: 100%;
  display: flex;
  justify-content: space-around;
  &__img {
    display: inline-block;
  }
  &__text {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    align-items: flex-start;
    justify-content: center;
    width: 90%;
    height: 4rem;
    margin-left: 0.5rem;
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
    top: 0;
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--color__main-view-secondary-text);
  }
  &__sender {
    font-size: 1rem;
    font-weight: 500;
  }
  &__msg {
    max-width: 70%;
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--color__main-view-secondary-text);
    display: inline-block;
  }
}
</style>