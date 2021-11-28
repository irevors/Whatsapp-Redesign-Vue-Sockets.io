<template>
  <main class="L-chat-view">
    <header class="L-chat-view__header container">
      <div class="L-chat-view__title-wrapper">
        <h1 class="chatApp-view-title">Mensajes</h1>
        <p class="chatApp-view-subtitle">
          Tienes dos {{ newChatsCount }} mensajes nuevos
        </p>
      </div>
      <button class="L-chat-view__header-btn btn rounded-0">
        <font-awesome-icon :icon="['fas', 'archive']" class="C-navbar__icon" />
      </button>
    </header>
    <section class="L-conversations">
      <ul class="L-conversations__list">
        <li
          class="L-conversations__list-item"
          v-for="(chat, index) in chats"
          :key="index"
        >
          <ConversationItem
            :data="chat"
            :to="{
              name: 'Conversation',
              params: { conversationId: chat.conversationId },
            }"
          />
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import ConversationItem from "./ConversationItem.vue";

export default {
  name: "Chats",
  computed: {
    newChatsCount() {
      return 2;
    },
    chats() {
      return this.$store.getters["conversations/getChats"];
    },
  },
  components: { ConversationItem },
  created() {
    window.scrollTo(0, document.body.scrollHeight);
  },
};
</script>

<style lang="scss">
.L-conversations {
  background-color: var(--color__main-view);
  &__list {
    list-style-type: none;
    padding: 0;
    padding-left: 0.3rem;
  }
  &__list-item {
    position: relative;
    display: flex;
    padding: 1rem 2rem;
    &:hover {
      background-color: var(--color__conversations-hover);
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 5px;
        background-color: var(--color__conversations-hover-before);
      }
    }
  }
  &__avatar {
    display: inline-block;
    width: 2rem;
  }
}
</style>