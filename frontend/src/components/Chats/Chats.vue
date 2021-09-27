<template>
  <main class="L-chat-view">
    <header class="L-chat-view__header container">
      <div class="L-chat-view__title-wrapper">
        <h1 class="chatApp-view-title">Mensajes</h1>
        <p class="chatApp-view-subtitle">
          Tienes dos {{ newChatsCount }} mensajes nuevos
        </p>
      </div>
      <button class="L-chat-view__header-btn btn rounded-0">
        <font-awesome-icon :icon="['fas', 'archive']" class="C-navbar__icon" />
      </button>
    </header>
    <section class="L-conversations">
      <ul class="L-conversations__list">
        <li
          class="L-conversations__list-item"
          v-for="(data, index) in fakeData"
          :key="index"
        >
          <ConversationItem :data="data" />
        </li>
      </ul>
    </section>
  </main>
  <footer>
    <div class="L-navigation"></div>
  </footer>
</template>

<script>
import ConversationItem from "./ConversationItem.vue";

export default {
  name: "Chats",
  computed: {
    newChatsCount() {
      return 2;
    },
  },
  components: { ConversationItem },
  data() {
    return {
      fakeData: [
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=7",
          name: "Carlos",
          lastMsg: "¡Hola Mao! ¿Nos vemos después del trabajo?",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=2",
          name: "Joffred",
          lastMsg:
            "Debo contarles sobre mi canal de  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus neque nulla. Eius, exercitationem! ",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=3",
          name: "Luis",
          lastMsg:
            "Sí puedo hacerte esto en la semana m dolor, sit amet consectetur adipisicing elit. Voluptates delectus neque",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=4",
          name: "Claudio",
          lastMsg:
            "Por cierto, ¿No viste a mi perro m dolor, sit amet consectetur adipisicing elit. Voluptates delectus neque m dolor, sit amet consectetur adipisicing elit. Voluptates delectus neque",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
          lastMsg:
            "Estoy muy emocionada m dolor, sit amet consectetur adipisicing elit. Voluptates delectus nequem dolor, sit amet consectetur adipisicing elit. Voluptates delectus nequem dolor, sit amet consectetur adipisicing elit. Voluptates delectus nequ",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
          lastMsg: "El fin de Semana podemos salir",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=1",
          name: "Clara",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=2",
          name: "Joffred",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=3",
          name: "Luis",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=4",
          name: "Claudio",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=3",
          name: "Luis",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=4",
          name: "Claudio",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=5",
          name: "Claudia",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
        {
          timestamp: "11:00 am",
          img: "https://i.pravatar.cc/150?img=6",
          name: "Stu",
          lastMsg:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.L-conversations {
  &__list {
    list-style-type: none;
    padding: 0;
    padding-left: 0.3rem;
  }
  &__list-item {
    position: relative;
    display: flex;
    padding: 1rem 2rem;
    // &:first-child {
    //   margin-top: 1rem;
    // }
    &:hover {
      background-color: #f3f4f9;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 5px;
        background-color: #64bc5e;
      }
    }
  }
  &__avatar {
    display: inline-block;
    width: 2rem;
  }
}
.L-navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 15%;
  background-color: var(--color__bg);
}
</style>