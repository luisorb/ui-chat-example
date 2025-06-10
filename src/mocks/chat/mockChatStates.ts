import messages from './mockMessages.json';
import users from './mockUsers.json';

export const getMockChatState = (scenario: 'empty' | 'normal' | 'large' | 'withErrors') => {
  const baseChat = {
    id: "mock-chat",
    user: users.single[0],
    messages: [] as typeof messages.normal
  };

  switch(scenario) {
    case 'empty':
      return { ...baseChat, messages: messages.empty };
    case 'normal':
      return { ...baseChat, messages: messages.normal };
    case 'large':
      return { ...baseChat, messages: messages.large };
    case 'withErrors':
      return { 
        ...baseChat, 
        messages: [...messages.normal, ...messages.withErrors] 
      };
    default:
      return { ...baseChat, messages: messages.normal };
  }
};