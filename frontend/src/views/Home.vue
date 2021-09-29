<template>
  <div class="home">
    <Navbar />
    <scrollable-container>
      <Status />
      <router-view></router-view>
    </scrollable-container>
    <FloatingButton />
    <FooterNavigation class="L-navigation" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Status from "@/components/Layout/Status/Status.vue";
import ScrollableContainer from "@/components/Layout/Containers/ScrollableContainer.vue";
import FloatingButton from "@/components/UI/FloatingButton.vue";
import FooterNavigation from "@/components/Navbar/FooterNavigation.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Status,
    ScrollableContainer,
    FloatingButton,
    FooterNavigation,
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

