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
        >
          <span class="C-footer-li__text"> {{ newMessagesFormatted }}</span>

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
      color: var(--color__nav-bottom-btn-hovered);
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
  &__text {
    padding: 0;
    font-size: 0.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__link {
    &.router-link-exact-active {
      #{$block}__btn {
        color: #fff;
        background-color: #5ebc7b !important;
      }
    }
  }
  &__badge {
    background-color: #5ebc7b !important;
    border: 2px solid var(--color__bg);
    padding: 0.6rem;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
</style>