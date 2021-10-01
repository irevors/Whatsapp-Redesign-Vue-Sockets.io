<template>
  <div
    class="modal fade C-modal"
    :id="targetId"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog C-modal__dialog modal-lg backdrop-blur">
      <div class="modal-content C-modal__content">
        <div class="modal-body C-modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["targetId"],
};
</script>

<style lang="scss">
.C-modal {
  position: absolute;
  &__dialog {
    position: absolute;
    bottom: 0;
    left: 50%;
    // height: var(--base-modal-height);
    min-width: var(--base-modal-min-width);
    max-width: var(--base-modal-max-width);
    border-radius: 17px;
    background: inherit;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  &__content {
    background: transparent;
    border: none;
  }
  &__body {
    padding: 1rem;
    @media (min-width: 768px) {
      padding: 2rem;
    }
  }
}
</style>

