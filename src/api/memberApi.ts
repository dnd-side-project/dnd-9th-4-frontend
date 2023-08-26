import { baseAxios } from './baseAxios';
import { getJwtToken } from './localStorage';

export const postLogout = async () => {
  const response = await baseAxios
    .post(
      '/api/logout',
      {},
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

export const deleteMember = async (memberId: number) => {
  const response = await baseAxios
    .delete(`/api/delete/${memberId}`, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};
