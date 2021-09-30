<template>
  <article class="container C-group-card">
    <button class="C-group-card__actions btn rounded-circle">
      <font-awesome-icon
        :icon="['fas', 'ellipsis-v']"
        class="C-group-card__actions-icon"
      />
    </button>
    <header class="C-group-card__header">
      <Avatar :src="groupImg" class="C-group-card__group-icon" />
      <h5 class="C-group-card__title">{{ title }}</h5>
    </header>
    <ul class="C-group-card__members-list">
      <li
        v-for="(member, index) in iterableMembers"
        :key="index"
        class="C-group-card__members-li"
      >
        <Avatar
          class="C-group-card__members-avatar"
          :src="member.img"
          :padding="1"
        />
      </li>
      <li class="C-group-card__members-li" v-if="unshownMembers">
        <Avatar
          class="C-group-card__members-avatar"
          :text="`+${unshownMembers}`"
          :padding="1"
          :fontSize="0.8"
        />
      </li>
    </ul>
    <hr class="C-group-card__separator" />
    <footer class="C-group-card__footer">
      <h6 class="C-group-card__last-sender">{{ lastMessage.sender }}</h6>
      <p class="C-group-card__last-msg">{{ lastMessage.msg }}</p>

      <Avatar
        class="C-group-card__unread-msgs"
        :text="`${unreadMessages}`"
        :padding="0.8"
        :fontSize="0.6"
      />
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Titulo de la tarjeta" },
    groupImg: {
      type: String,
      default:
        "https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256",
    },
    members: {
      type: Array,
      default() {
        return [
          { img: "https://i.pravatar.cc/150?img=3" },
          { img: "https://i.pravatar.cc/150?img=7" },
          { img: "https://i.pravatar.cc/150?img=6" },
          { img: "https://i.pravatar.cc/150?img=8" },
          { img: "https://i.pravatar.cc/150?img=9" },
          { img: "https://i.pravatar.cc/150?img=1" },
        ];
      },
    },
    lastMessage: {
      type: Object,
      default() {
        return {
          sender: "Bryan Cantos",
          msg: "Alguien quiere que le pase el código?",
        };
      },
    },
    unreadMessages: { type: Number, default: 5 },
  },
  computed: {
    membersCount() {
      return this.members.length;
    },
    unshownMembers() {
      return this.members.length < 3 ? null : this.membersCount - 3;
    },
    iterableMembers() {
      if (this.members.length < 3) {
        return this.members;
      } else {
        return this.members.filter((_value, index) => index <= 2);
      }
    },
  },
};
</script>

<style lang="scss">
.C-group-card {
  border-radius: 1.5rem;
  position: relative;
  background-color: var(--color__bg);
  padding: 1rem;
  width: 90%;
  border: 1px solid #f4f4ff;
  border: 1px solid var(--color__group-card-border);
  margin-bottom: 1rem;

  &__actions {
    position: absolute;
    right: 30px;
    top: 30px;
    padding: 1rem;
  }

  &__actions-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.9rem;
    color: var(--color__navbar-btn-icons);
  }
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  &__group-icon {
    display: inline-block;
  }
  &__members-list {
    display: flex;
    list-style-type: none;
    padding-left: 0;
  }
  &__members-li {
    &:nth-child(2) {
      transform: translateX(-50%);
    }
    &:nth-child(3) {
      transform: translateX(-100%);
    }
    &:nth-child(4) {
      transform: translateX(-150%);
    }
  }
  &__members-avatar {
    border: 2.5px solid var(--color__bg);
  }
  &__title {
    color: var(--color__main-view-primary-text);
    margin: 0 2rem 0 1rem;
    max-width: 100%;
  }
  &__separator {
    color: #e5e5eb;
    opacity: 0.5;
    height: 1.2px !important;
    color: var(--color__group-card-separator);
  }
  &__footer {
    position: relative;
  }
  &__last-sender {
    color: var(--color__main-view-primary-text);
  }
  &__last-msg {
    color: var(--color__main-view-secondary-text);
  }
  &__unread-msgs {
    position: absolute;
    color: #fff;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>