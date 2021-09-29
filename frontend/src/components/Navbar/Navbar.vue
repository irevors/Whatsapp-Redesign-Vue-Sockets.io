<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark C-navbar">
      <div class="container C-navbar__container">
        <a class="C-navbar__title" href="#" v-text="title" />
        <div class="C-navbar__actions-wrapper">
          <div class="C-navbar__action-darkmode">
            <button
              @click="toggleTheme"
              class="btn rounded-circle me-4 C-navbar__action-btn"
            >
              <font-awesome-icon
                :icon="['fas', 'moon']"
                class="C-navbar__icon"
                v-if="isThemeLight"
              />
              <font-awesome-icon
                :icon="['fas', 'sun']"
                class="C-navbar__icon"
                v-else
              />
            </button>
          </div>
          <div class="C-navbar__action-search">
            <button class="btn rounded-circle me-4 C-navbar__action-btn">
              <font-awesome-icon
                :icon="['fas', 'search']"
                class="C-navbar__icon"
              />
            </button>
          </div>
          <div class="C-navbar__action-expand">
            <button class="btn rounded-circle C-navbar__action-btn">
              <font-awesome-icon
                :icon="['fas', 'ellipsis-h']"
                class="C-navbar__icon"
              />
            </button>
          </div>
        </div>
        <!-- <button @click="logout" class="btn btn-info ms-auto">
          Logout
        </button> -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      title: "WhatsApp",
    };
  },
  methods: {
    logout() {
      this.$router.push("login");
    },
    toggleTheme() {
      this.$store.commit("toggleTheme");
    },
  },
  computed: {
    isThemeLight() {
      return this.$store.getters.getCurrentTheme === "light";
    },
  },
};
</script>

<style lang="scss">
.C-navbar {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: var(--color__bg);
  // padding: 0 1.4rem !important;
  &__container {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
  }
  &__title {
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--color__text-title);
    font-weight: 600;
    &:hover {
      color: var(--color__text-title);
    }
  }
  &__actions-wrapper {
    display: flex;
  }
  &__action-btn {
    background-color: var(--color__navbar-btn-bg) !important;
    padding: 1px 6px !important;
  }
  &__icon {
    color: var(--color__navbar-btn-icons);
  }
}
</style>
