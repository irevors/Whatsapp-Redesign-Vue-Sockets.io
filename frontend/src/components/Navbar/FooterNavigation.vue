<template>
  <footer class="C-footer-nav">
    <nav class="C-footer-nav__nav container">
      <ul class="C-footer-nav__list">
        <NavListitem
          class="C-footer-nav__list-item"
          v-for="(link, index) in navLinks"
          :key="index"
          :text="link.text"
          :newMessages="link.newMessages"
          :to="link.to"
        />
      </ul>
    </nav>
  </footer>
</template>

<script>
import NavListitem from "@/components/Navbar/NavListItem.vue";

export default {
  components: { NavListitem },
  data() {
    return {
      navLinks: [
        {
          text: "Chats",
          newMessages: 10,
          to: { name: "Chats" },
        },
        {
          text: "Grupos",
          newMessages: 5,
          to: { name: "Groups" },
        },
        {
          text: "Estados",
          newMessages: 100,
          to: { name: "Chats" },
        },
        {
          text: "Llamadas",
          newMessages: null,
          to: { name: "Chats" },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.C-footer-nav {
  &__nav,
  &__list {
    height: 100%;
  }
  &__list {
    padding-left: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  &__list-item {
    padding: 0;
  }
}
</style>