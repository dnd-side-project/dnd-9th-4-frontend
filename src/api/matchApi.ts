import { baseAxios } from './baseAxios';
import { getJwtToken } from './localStorage';

export const getMatchingSchedule = async () => {
  const response = await baseAxios
    .get('/api/match', {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};
