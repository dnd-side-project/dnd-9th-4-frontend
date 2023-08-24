import { PostConversation, SendMessage } from 'data/type';
import { baseAxios } from './baseAxios';
import { getJwtToken } from './localStorage';

export const sendMessage = async (sendMessage: SendMessage) => {
  const response = await baseAxios
    .post('/api/message', sendMessage, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};

export const getConversation = async (postConversation: PostConversation) => {
  const response = await baseAxios
    .post('/api/message/conversation', postConversation, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};

export const getMessageList = async () => {
  const response = await baseAxios
    .get('/api/message', {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};
