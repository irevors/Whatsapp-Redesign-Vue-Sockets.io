export default {
  getChats(state) {
    return state.activeChats;
  },
  getConversation: (state) => (conversationId) => {
    return state.conversations.find(
      (conversation) => conversation.conversationId === conversationId
    );
  },
};
