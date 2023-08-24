/*
    매칭 게시물
*/

import { baseAxios } from './baseAxios';
import axios from 'axios';
const backendUrl = 'https://dnd-newple-server.store';

/*
    매칭 게시물 전체 조회
*/
export const getMatchingPostList = async () => {
  try {
    const res = await axios.get(`${backendUrl}/api/post`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

/*
    매칭 모집글 조회(1개)
*/
export const getMatchingPostDetail = async (postId: number) => {
  const response = await baseAxios
    .get(`/api/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};

/*
    매칭 게시물 삭제
    Headers:	Authorization={액세스 토큰}
*/
export const deleteMatchingPost = async (postId: number) => {
  const response = await baseAxios
    .delete(`/api/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};
