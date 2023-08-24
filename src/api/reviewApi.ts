import { PostReview } from 'data/type';
import { baseAxios } from './baseAxios';
import { getJwtToken } from './localStorage';

export const postReview = async (review: PostReview) => {
  const response = await baseAxios
    .post('/api/review', review, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};

export const getReview = async () => {
  const response = await baseAxios
    .get('/api/review', {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};
