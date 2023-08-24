import { baseAxios } from './baseAxios';
import { getJwtToken } from './localStorage';

export const getMyArticle = async () => {
  const response = await baseAxios
    .get('/api/post/my', {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};
