import { baseAxios } from './baseAxios';
import { getJwtToken } from './localStorage';

export const postReview = async (
  review: string[],
  score: number,
  targetId: number,
) => {
  const response = await baseAxios
    .post(
      '/api/review',
      { reviews: review, score: score, targetId: targetId },
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
