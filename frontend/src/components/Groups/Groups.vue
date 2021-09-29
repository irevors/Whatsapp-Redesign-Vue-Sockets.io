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
  </main>
</template>

<script>
export default {
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