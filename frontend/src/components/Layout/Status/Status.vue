<template>
  <div class="C-status">
    <swiper :free-mode="true" :slides-per-view="numberOfSlides">
      <swiper-slide v-for="(data, index) in fakeData" :key="index">
        <StatusItem :data="data" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import StatusItem from "./StatusItem.vue";

export default {
  name: "Status",
  components: { StatusItem },
  computed: {
    windowsWidth() {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      return width;
    },
    numberOfSlides() {
      const slides = this.windowsWidth / 106;
      return slides;
    },
  },
  data() {
    return {
      fakeData: [
        {
          img: "https://i.pravatar.cc/150?img=7",
          name: "Tu historia",
        },
        {
          img: "https://i.pravatar.cc/150?img=2",
          name: "Joffred",
        },
        {
          img: "https://i.pravatar.cc/150?img=3",
          name: "Luis",
        },
        {
          img: "https://i.pravatar.cc/150?img=4",
          name: "Claudio",
        },
        {
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
        },
        {
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
        },
        {
          img: "https://i.pravatar.cc/150?img=1",
          name: "Clara",
        },
        {
          img: "https://i.pravatar.cc/150?img=2",
          name: "Joffred",
        },
        {
          img: "https://i.pravatar.cc/150?img=3",
          name: "Luis",
        },
        {
          img: "https://i.pravatar.cc/150?img=4",
          name: "Claudio",
        },
        {
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
        },
        {
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
        },
        {
          img: "https://i.pravatar.cc/150?img=3",
          name: "Luis",
        },
        {
          img: "https://i.pravatar.cc/150?img=4",
          name: "Claudio",
        },
        {
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
        },
        {
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
        },
        {
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
        },
        {
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
        },
        {
          img: "https://i.pravatar.cc/150?img=3",
          name: "Luis",
        },
        {
          img: "https://i.pravatar.cc/150?img=4",
          name: "Claudio",
        },
        {
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
        },
        {
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
        },
        {
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
        },
        {
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
        },
        {
          img: "https://i.pravatar.cc/150?img=3",
          name: "Luis",
        },
        {
          img: "https://i.pravatar.cc/150?img=4",
          name: "Claudio",
        },
        {
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
        },
        {
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.C-status {
  position: relative;
  z-index: 0;
  margin-top: 4.7rem;
  background: var(--color__bg);
  display: flex;
  overflow: hidden;
  width: 100%;
}
</style>