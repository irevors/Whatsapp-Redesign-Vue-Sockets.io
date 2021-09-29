<template>
  <article class="container C-group-card">
    <h5 class="C-group-card__title">{{ title }}</h5>
    <Avatar
      :src="require('../../assets/logo.png')"
      class="C-group-card__group-icon"
    />
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
      <li class="C-group-card__members-li">
        <Avatar
          class="C-group-card__members-avatar"
          :text="`+${unshownMembers}`"
          :padding="1"
          :fontSize="0.8"
        />
      </li>
    </ul>
    <hr />
    <h6 class="C-group-card__last-sender">{{ lastMessage.sender }}</h6>
    <p class="C-group-card__last-msg">{{ lastMessage.msg }}</p>
  </article>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Titulo de la tarjeta" },
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
  background-color: var(--color__bg);
  &__group-icon {
    display: inline-block;
  }
  &__members-list {
    display: flex;
    list-style-type: none;
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
}
</style>