<template>
  <main class="L-chat-view">
    <header class="L-chat-view__header container">
      <div class="L-chat-view__title-wrapper">
        <h1 class="chatApp-view-title">Grupos</h1>
        <p class="chatApp-view-subtitle">{{ createdGroups }} grupos creados</p>
      </div>
      <button class="L-chat-view__header-btn btn rounded-0">
        <font-awesome-icon :icon="['fas', 'archive']" class="C-navbar__icon" />
      </button>
    </header>
    <section class="L-active-groups">
      <GroupCard />
    </section>
  </main>
</template>

<script>
import GroupCard from "@/components/Groups/GroupCard.vue";

export default {
  components: { GroupCard },
  computed: {
    createdGroups() {
      return 6;
    },
  },

  created() {
    window.scrollTo(0, document.body.scrollHeight);
  },
};
</script>