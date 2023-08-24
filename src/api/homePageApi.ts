/*
    HomePage
*/

import axios from 'axios';
import config from 'config';

/*
    [매칭 게시물 3개]
    Method: GET
*/
export const getMatchingPostSimple = async () => {
  try {
    const res = await axios.get(`${config.backendUrl}/api/post/simple`);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

/*
    [이번주 매칭 기록]
    Method: GET
    {
      "memberId": 2
    }
*/
export const getMatchingRecord = async () => {
  try {
    const res = await axios.get(`${config.backendUrl}/api/match/week`);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

/*
    [내 주변 뉴플 메이트]
    Method: GET
    {
      "memberId": 2
    }
*/
export const getAroundMate = async () => {
  try {
    const res = await axios.get(`${config.backendUrl}/api/profile/around`);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
