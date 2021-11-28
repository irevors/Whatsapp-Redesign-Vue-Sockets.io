import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      activeChats: [
        {
          conversationId: '1',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=7',
          name: 'Carlos',
          lastMsg: '¡Hola Mao! ¿Nos vemos después del trabajo?',
        },
        {
          conversationId: '2',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=2',
          name: 'Joffred',
          lastMsg:
            'Debo contarles sobre mi canal de  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus neque nulla. Eius, exercitationem! ',
        },
        {
          conversationId: '3',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=3',
          name: 'Luis',
          lastMsg:
            'Sí puedo hacerte esto en la semana m dolor, sit amet consectetur adipisicing elit. Voluptates delectus neque',
        },
        {
          conversationId: '4',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=4',
          name: 'Claudio',
          lastMsg:
            'Por cierto, ¿No viste a mi perro m dolor, sit amet consectetur adipisicing elit. Voluptates delectus neque m dolor, sit amet consectetur adipisicing elit. Voluptates delectus neque',
        },
        {
          conversationId: '5',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=5',
          name: 'Claudia',
          lastMsg:
            'Estoy muy emocionada m dolor, sit amet consectetur adipisicing elit. Voluptates delectus nequem dolor, sit amet consectetur adipisicing elit. Voluptates delectus nequem dolor, sit amet consectetur adipisicing elit. Voluptates delectus nequ',
        },
        {
          conversationId: '7',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=1',
          name: 'Clara',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
        {
          conversationId: '8',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=2',
          name: 'Joffred',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
        {
          conversationId: '9',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=3',
          name: 'Luis',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
        {
          conversationId: '10',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=4',
          name: 'Claudio',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
        {
          conversationId: '11',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=5',
          name: 'Claudia',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
        {
          conversationId: '12',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=6',
          name: 'Stu',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
        {
          conversationId: '13',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=3',
          name: 'Luis',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
        {
          conversationId: '14',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=4',
          name: 'Claudio',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
        {
          conversationId: '15',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=5',
          name: 'Claudia',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
        {
          conversationId: '16',
          timestamp: '11:00 am',
          img: 'https://i.pravatar.cc/150?img=6',
          name: 'Stu',
          lastMsg:
            '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius mollitia vel quam amet architecto quod porro natus autem accusamus, blanditiis illum inventore non!',
        },
      ],
      conversations: [
        {
          conversationId: '1',
          creatorId: '21asdsdad',
          participants: [
            { id: '21asdsdad', name: 'Carlos' },
            { id: '111asdsda', name: 'Esteban' },
          ],
          messages: [
            {
              senderId: '21asdsdad',
              message: 'Hola!',
            },
            {
              senderId: '21asdsdad',
              message: 'Estas??',
            },
            {
              senderId: '111asdsda',
              message: 'Holaa acá estoy',
            },
            {
              senderId: '21asdsdad',
              message:
                'Te iba a preguntar por el trabajo... se ha podido resolver el bug ???',
            },
            {
              senderId: '111asdsda',
              message: 'Nooooooo',
            },
            {
              senderId: '111asdsda',
              message: 'ha sido imposible 😓',
            },
            {
              senderId: '21asdsdad',
              message: 'Si quieres nos conectamos y lo revisamos',
            },
            {
              senderId: '111asdsda',
              message: 'Genial!',
            },
          ],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
