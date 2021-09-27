<template>
  <div class="C-avatar__spacer">
    <div class="C-avatar__stories-count">
      <svg
        class="C-avatar__svg-border"
        viewBox="-2 -2 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="96%"
          height="96%"
          fill="none"
          rx="100"
          ry="100"
          :stroke-dasharray="`${numberOfStories}%`"
        />
      </svg>

      <div
        class="C-avatar__img"
        :style="{ backgroundImage: `url(${data.img})` }"
      ></div>
    </div>
    <p class="C-avatar__text">{{ data.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    numberOfStories() {
      const count = [0, "0,100", 50, 75, 14];
      const random = Math.floor(Math.random() * (count.length - 0));
      return count[random];
    },
  },
};
</script>
<style lang="scss">
.C-avatar {
  &__spacer {
    width: 5rem;
    height: 8rem;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  &__stories-count {
    position: relative;
    padding: 0.4rem;
    border-radius: 100px;
    cursor: pointer;
  }
  &__svg-border {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    rect {
      fill: none;
      stroke: var(--color__status-border);
      stroke-width: 3;
      // stroke-dasharray: 50%;
      stroke-dashoffset: 100;
    }
  }
  &__img {
    padding: 2rem;
    border-radius: 50%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  &__text {
    color: var(--color__text-primary);
    font-size: 0.8rem;
    margin-top: 0.5rem;
    user-select: none;
  }
}
</style>