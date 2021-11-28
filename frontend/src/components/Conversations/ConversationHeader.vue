<template>
  <header class="C-conversation-header">
    <div class="C-conversation-header__container">
      <div class="C-conversation-header__btn-container">
        <button
          class="
            rounded-circle
            me-4
            C-conversation-header__btn C-conversation-header__btn--back
          "
        >
          <router-link :to="{ name: 'Chats' }">
            <font-awesome-icon
              :icon="['fas', 'chevron-left']"
              class="
                C-conversation-header__icon C-conversation-header__icon--no-bg
              "
            />
          </router-link>
        </button>
      </div>
      <div class="C-conversation-header__contact">
        <div class="C-conversation-header__avatar-container">
          <Avatar
            :src="img"
            class="C-conversation-header__avatar"
            :padding="0"
          />
        </div>
        <div class="C-conversation-header__info-container">
          <h4 class="C-conversation-header__contact-name">Diego Velázquez</h4>
          <p class="C-conversation-header__last-connection">
            Última conexión 11:00 pm
          </p>
        </div>
      </div>
      <div class="C-conversation-header__btn-container">
        <button class="rounded-circle me-4 C-conversation-header__btn">
          <font-awesome-icon
            :icon="['fas', 'video']"
            class="
              C-conversation-header__icon C-conversation-header__icon--video
            "
          />
        </button>
      </div>
      <div class="C-conversation-header__btn-container">
        <button class="rounded-circle me-4 C-conversation-header__btn">
          <font-awesome-icon
            :icon="['fas', 'phone-alt']"
            class="
              C-conversation-header__icon C-conversation-header__icon--call
            "
          />
        </button>
      </div>
      <div class="C-conversation-header__btn-container">
        <button class="rounded-circle C-conversation-header__btn">
          <font-awesome-icon
            :icon="['fas', 'ellipsis-h']"
            class="C-conversation-header__icon"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return { img: "https://i.pravatar.cc/150?img=3" };
  },
};
</script>

<style lang="scss">
.C-conversation-header {
  height: 100%;
  display: flex;
  align-items: center;
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    height: 80%;
  }
  &__btn {
    border: none;
    width: 2rem;
    height: 2rem;
    background-color: var(--color__conversation-header-btn-bg);
    color: #696f83;
    &:active:not(#{&}--back) {
      box-shadow: inset 0 1px 11px -3px #000;
    }
    &--back {
      background-color: transparent;
      color: #fff;
    }
  }
  &__contact {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  &__avatar-container {
    min-width: 3rem;
    height: 3rem;
  }
  &__avatar {
    display: block;
    border: 2px solid #fff;
  }
  &__info-container {
    color: #fff;
    padding: 0 1rem;
  }
  &__contact-name {
    font-size: 18px;
  }
  &__last-connection {
    font-size: 10px;
    margin: 0;
  }
  &__avatar {
    height: 100%;
  }
  &__icon {
    color: var(--color__navbar-btn-icons);
    &--no-bg {
      color: #fff;
      font-size: 2rem;
      margin-right: 3rem;
    }
    &--call {
      color: #5ebc7b;
    }
    &--video {
      color: #fff;
    }
  }
}
</style>