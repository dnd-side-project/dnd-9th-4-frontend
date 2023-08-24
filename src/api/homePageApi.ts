/*
    HomePage
*/

import { baseAxios } from './baseAxios';

/*
    [매칭 게시물 3개]
    Method: GET
*/
export const getMatchingPostSimple = async () => {
  const response = await baseAxios
    .get('/api/post/simple', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};

/*
    [이번주 매칭 기록]
    Method: GET
    {
      "memberId": 2
    }
*/
export const getMatchingRecord = async () => {
  const response = await baseAxios
    .get('/api/match/week', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};

/*
    [내 주변 뉴플 메이트]
    Method: GET
    {
      "memberId": 2
    }
*/
export const getAroundMate = async () => {
  const response = await baseAxios
    .get('/api/profile/around', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};
