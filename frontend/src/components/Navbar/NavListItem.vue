<template>
  <li class="C-footer-li">
    <router-link :to="to" class="C-footer-li__link">
      <button class="C-footer-li__btn btn rounded-pill p-1 px-2 p-md-2 px-md-3">
        {{ text }}
        <span
          v-if="newMessages"
          class="
            C-footer-li__badge
            position-absolute
            top-0
            start-100
            translate-middle
            bg-danger
            rounded-circle
          "
          :style="newMessagesWidth"
        >
          {{ newMessagesFormatted }}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "Link" },
    newMessages: { type: Number, default: null },
    to: {
      type: Object,
      default() {
        return { name: "Chats" };
      },
    },
  },
  computed: {
    newMessagesFormatted() {
      const value = this.newMessages;
      if (value) {
        if (value < 100) return String(value);
        if (value >= 100) return "99+";
      }
      return value;
    },
    newMessagesWidth() {
      const value = this.newMessagesFormatted;
      switch (value.length) {
        case 1:
          return {
            padding: `0.1rem 0.35rem`,
          };
        case 2:
          return {
            padding: `0.1rem 0.25rem`,
          };
        case 3:
          return {
            padding: `0.15rem 0.1rem`,
            fontSize: "0.5rem",
          };
      }
      return "";
    },
  },
};
</script>

<style lang="scss">
.C-footer-li {
  $block: &;
  &__btn {
    background-color: var(--color__bg);
    color: var(--color__text-primary);
    position: relative;
    font-weight: 300;
    &:hover {
      #{$block}__badge {
        color: #fff;
      }
    }
    &:focus {
      box-shadow: none;
    }
    font-size: 0.7rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
  &__link.router-link-exact-active {
    #{$block}__btn {
      color: #fff;
      background-color: #5ebc7b !important;
    }
  }
  &__badge {
    background-color: #5ebc7b !important;
    border: 2px solid var(--color__bg);
    font-size: 0.6rem;
    padding: 0.15rem 0.1rem;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
</style>