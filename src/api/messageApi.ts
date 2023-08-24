import { baseAxios } from './baseAxios';
import { getJwtToken } from './localStorage';

export const sendMessage = async (
  content: string,
  senderId: number,
  receiverId: number,
) => {
  const response = await baseAxios
    .post(
      '/api/message',
      { content: content, receiverId: receiverId, senderId: senderId },
      {
        headers: {
          Authorization: `Bearer ${getJwtToken()}`,
        },
      },
    )
    .then((response) => response.data);
  console.log(response);
  return response;
};

export const postConversation = async (receiverId: number) => {
  const response = await baseAxios
    .post(
      '/api/message/conversation',
      { receiverId: receiverId },
      {
        headers: {
          Authorization: `Bearer ${getJwtToken()}`,
        },
      },
    )
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
