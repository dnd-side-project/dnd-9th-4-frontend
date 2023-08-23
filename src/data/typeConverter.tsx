import { Message, MessageList } from './type';

export const MessageListToMessage = (prop: MessageList) => {
  const message: Message = {
    messageId: prop.messageId,
    sendDate: prop.sendDate,
    content: prop.lastMessage,
    sender: 'RECEIVER',
  };

  return message;
};
