<template>
  <div class="home">
    <Navbar />
    <Status />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Status from "@/components/Layout/Status.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Status,
  },
};
</script>
