<template>
  <base-modal :targetId="'main-options-modal'">
    <div class="C-main-modal__header"><h6>Whatsapp Options</h6></div>
    <div class="C-main-modal__actions">
      <div class="C-main-modal__btn-wrapper">
        <button type="button" class="btn rounded-circle C-main-modal__btn">
          <font-awesome-icon
            :icon="['fas', 'comment-dots']"
            class="C-main-modal__icon"
          ></font-awesome-icon>
        </button>
        <p class="C-main-modal__btn-text">Nuevo chat</p>
      </div>
      <div class="C-main-modal__btn-wrapper">
        <button type="button" class="btn rounded-circle C-main-modal__btn">
          <font-awesome-icon
            :icon="['fas', 'user-friends']"
            class="C-main-modal__icon"
          ></font-awesome-icon>
        </button>
        <p class="C-main-modal__btn-text">Nuevo grupo</p>
      </div>
      <div class="C-main-modal__btn-wrapper">
        <button type="button" class="btn rounded-circle C-main-modal__btn">
          <font-awesome-icon
            :icon="['fas', 'history']"
            class="C-main-modal__icon"
          ></font-awesome-icon>
        </button>
        <p class="C-main-modal__btn-text">Subir historia</p>
      </div>
    </div>
  </base-modal>
</template>



<style lang="scss">
.C-main-modal {
  &__header {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }
  &__title {
    font-size: 1rem;
    color: #222e4e;
  }
  &__actions {
    display: flex;
    justify-content: space-around;
    @media (min-width: 768px) {
      max-width: 80%;
    }
    margin: 0 auto;
  }
  &__btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__btn {
    background-color: #fff;
    padding: 1.5rem;
    position: relative;
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #5ebc7b;
    font-size: 1.2rem;
    &:hover,
    &:active {
      color: #5ebc7b;
    }
  }
  &__btn-text {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.7rem;
    color: #222e4e;
  }
}
</style>