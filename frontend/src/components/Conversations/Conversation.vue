<template>
  <main
    class="L-conversation-view"
    :style="`background-image:url(${background});`"
  >
    <section class="L-conversation-view__header">
      <ConversationHeader />
    </section>
    <section class="L-conversation-view__body">
      <div class="L-conversation-view__body-container">
        <div class="L-conversation-view__date-container">
          <span class="L-conversation-view__date">11 de Nov 2021</span>
        </div>
        <scrollable-container class="L-conversation-view__scrollable-container">
          <MessageItem
            v-for="(c, i) in conversation.messages"
            :key="i"
            :messageOut="c.senderId === userId"
          >
            {{ c.message }}
          </MessageItem>

          <ConversationInput class="L-conversation-view__body-input" />
        </scrollable-container>
      </div>
    </section>
  </main>
</template>

<script>
import MessageItem from "./MessageItem.vue";
import ConversationInput from "./ConversationInput.vue";
import ConversationHeader from "./ConversationHeader.vue";

export default {
  components: { MessageItem, ConversationInput, ConversationHeader },
  data() {
    return {
      image: "3.webp",
    };
  },
  computed: {
    background() {
      return require(process.env.BASE_URL +
        "src/assets/backgrounds/" +
        this.image);
    },
    conversation() {
      const conversationId = this.$route.params.conversationId;
      return this.$store.getters["conversations/getConversation"](
        conversationId
      );
    },
    userId() {
      return this.$store.getters.getUserId;
    },
  },
};
</script>

<style lang="scss">
.L-conversation-view {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: lighten(#10152b, 55%);
  background-blend-mode: multiply;
  &__header {
    height: 25%;
  }
  &__body {
    height: 75%;
    background-color: #13182c;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
  &__body-container {
    height: 100%;
    position: relative;
    padding: 3.5rem 0.5rem 55px 0;
  }
  &__scrollable-container {
    height: 100%;
    padding: 0 1.5rem 0 2rem;
  }
  &__date-container {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #5dbc7b;
    padding: 0 1rem;
    border-radius: 6px;
    z-index: 4;
  }
  &__date {
    font-size: var(--conversation-text-date);
    color: #fff;
  }
  &__body-input {
    height: 55px;
    width: 100%;
    background-color: transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
  }
}
</style>