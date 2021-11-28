<template>
  <footer class="C-conversation-input">
    <div class="C-conversation-input__container">
      <div>
        <button
          class="C-conversation-input__btn C-conversation-input__btn--more"
        >
          <font-awesome-icon
            :icon="['fas', 'plus']"
            class="C-conversation-input__icon"
          />
        </button>
      </div>
      <!-- input container -->
      <div class="C-conversation-input__input-container">
        <input
          type="text"
          class="C-conversation-input__input"
          placeholder="Escribe un mensaje"
        />
        <button
          class="C-conversation-input__btn C-conversation-input__btn--sticker"
        >
          <font-awesome-icon
            :icon="['fas', 'sticky-note']"
            class="C-conversation-input__icon"
          />
        </button>
        <button
          class="C-conversation-input__btn C-conversation-input__btn--camera"
        >
          <font-awesome-icon
            :icon="['fas', 'camera']"
            class="C-conversation-input__icon"
          />
        </button>
      </div>
      <!-- input container -->
      <div class="C-conversation-input__cta-container">
        <button
          class="C-conversation-input__btn C-conversation-input__btn--send"
        >
          <font-awesome-icon
            :icon="['fas', 'play']"
            class="C-conversation-input__icon"
          />
        </button>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.C-conversation-input {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  &__container {
    display: flex;
    justify-content: center;
    width: var(--conversation-input-width);
  }
  &__input-container {
    position: relative;
    width: auto;
    flex-grow: 1;
    margin: 0 0.5rem;
    caret-color: #5dbc7b;
  }
  &__input {
    width: 100%;
    min-height: 100%;
    height: fit-content;
    border-radius: 50rem;
    border: none;
    padding: 0 5rem 0 1.5rem;
    background-color: #383d52;
    color: #fff;
    outline: none;
    font-size: var(--conversation-text);
    &::placeholder {
      color: #fff;
      opacity: 40%;
    }
  }
  &__btn {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: relative;
    padding: 0;
    border: 0;
    background-color: inherit;
    &--sticker,
    &--camera {
      position: absolute;
      top: 50%;
      margin: 0;
      transform: translateY(-50%);
    }
    &--sticker {
      right: 0.2rem;
    }
    &--camera {
      right: 2.4rem;
    }
    &--send {
      background-color: #5dbc7b;
      width: 2.2rem;
      height: 2.2rem;
    }
    &--more {
      background-color: #383d52;
      width: 2.2rem;
      height: 2.2rem;
    }
    &:active {
      box-shadow: inset 0 1px 11px -3px #000;
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
}
</style>