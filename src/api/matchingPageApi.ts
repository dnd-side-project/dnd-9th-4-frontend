/*
    매칭 게시물
*/

import { baseAxios } from './baseAxios';

/*
    매칭 게시물 전체 조회
*/
export const getMatchingPostList = async () => {
  const response = await baseAxios
    .get('/api/post', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
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
