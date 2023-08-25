/*
    매칭 신청, 거절, 취소 등
*/

import { baseAxios } from './baseAxios';
import axios from 'axios';
import config from 'config';
import { getJwtToken } from './localStorage';
const backendUrl = 'https://dnd-newple-server.store';

/*
    [매칭 여부 조회]
*/
export const getMatchingStatus = async (postId: number) => {
  const response = await baseAxios
    .get(`/api/match/${postId}`, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};

/*
    [매칭 신청]
*/
export const postMatchingApply = async (
  postId: string | undefined,
  memberId: string | null,
) => {
  const apply = {
    postId: Number(postId),
    memberId: Number(memberId),
  };
  try {
    const res = await axios.post(
      `${config.backendUrl}/api/match/apply`,
      apply,
      {
        headers: {
          Authorization: `Bearer ${getJwtToken()}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

/*
    [매칭 취소]
*/
interface matchingCancel {
  memberId: number;
}
export const putMatchingCancel = async (
  memberId: matchingCancel,
  postId: number,
) => {
  try {
    const res = await axios.put(`${backendUrl}/api/match/${postId}`, memberId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

// 글 작성자

/*
    [매칭 거절]
*/
export const postMatchingRefuse = async (
  postId: string | undefined,
  applicantId: number,
) => {
  const refuse = {
    postId: Number(postId),
    applicantId: applicantId,
  };
  try {
    const res = await axios.post(
      `${config.backendUrl}/api/match/refuse`,
      refuse,
      {
        headers: {
          Authorization: `Bearer ${getJwtToken()}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

/*
    매칭 승인
*/
export const postMatchingComfrim = async (
  postId: string | undefined,
  applicantId: number,
) => {
  const comfrim = {
    postId: Number(postId),
    applicantId: applicantId,
  };
  try {
    const res = await axios.post(
      `${config.backendUrl}/api/match/confirm`,
      comfrim,
      {
        headers: {
          Authorization: `Bearer ${getJwtToken()}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

/*
    [매칭 신청자 조회]
*/
export const getMatchingApplyMember = async (postId: string | undefined) => {
  try {
    const res = await axios.get(
      `${config.backendUrl}/api/match/${Number(postId)}/all`,
      {
        headers: {
          Authorization: `Bearer ${getJwtToken()}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
