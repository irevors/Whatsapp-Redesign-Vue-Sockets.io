<template>
  <div class="home">
    <Navbar />
    <scrollable-container>
      <Status />
      <router-view></router-view>
    </scrollable-container>
    <floating-button>
      <font-awesome-icon
        v-if="$route.name === 'Groups'"
        :icon="['fas', 'user-friends']"
        class="C-floating-btn__icon"
      />
    </floating-button>
    <FooterNavigation class="L-navigation" />
    <MainModal />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Status from "@/components/Layout/Status/Status.vue";
import ScrollableContainer from "@/components/Layout/Containers/ScrollableContainer.vue";
import FloatingButton from "@/components/UI/FloatingButton.vue";
import FooterNavigation from "@/components/Navbar/FooterNavigation.vue";
import MainModal from "../components/UI/MainOptionsModal.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Status,
    ScrollableContainer,
    FloatingButton,
    FooterNavigation,
    MainModal,
  },
};
</script>
<style lang="scss">
.L-navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: var(--footer-nav-height);
  background-color: var(--color__bg);
}
</style>

