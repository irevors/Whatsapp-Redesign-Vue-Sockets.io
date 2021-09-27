<template>
  <div class="home">
    <Navbar />
    <scrollable-container>
      <Status />
      <router-view></router-view>
    </scrollable-container>
    <FloatingButton />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Status from "@/components/Layout/Status/Status.vue";
import ScrollableContainer from "@/components/Layout/Containers/ScrollableContainer.vue";
import FloatingButton from "@/components/UI/FloatingButton.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Status,
    ScrollableContainer,
    FloatingButton,
  },
};
</script>

