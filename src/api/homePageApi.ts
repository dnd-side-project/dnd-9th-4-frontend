/*
    HomePage
*/

import axios from 'axios';
import config from 'config';
import { getJwtToken, getMemberId } from './localStorage';

// API
const callApi = async (url: string) => {
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

/*
    [매칭 게시물 3개]
    Method: GET
*/
export const getMatchingPostSimple = async () => {
  return callApi(`${config.backendUrl}/api/post/simple`);
};

/*
    [이번주 매칭 기록]
    Method: GET
*/
export const getMatchingRecord = async () => {
  return callApi(`${config.backendUrl}/api/match/week`);
};

/*
    [내 주변 뉴플 메이트]
    Method: GET
*/
export const getMateGround = async () => {
  return callApi(`${config.backendUrl}/api/profile/around`);
};

/*
    [내 정보 조회]
    Method: GET
*/
export const getMyProfile = async () => {
  return callApi(`${config.backendUrl}/api/profile/${getMemberId()}`);
};
