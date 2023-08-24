/*
    매칭 게시물
*/

import axios from 'axios';
import config from 'config';
import { getJwtToken } from './localStorage';

/*
    [매칭 게시물 전체 조회]
    Method: GET
*/
export const getMatchingPostList = async () => {
  try {
    const res = await axios.get(`${config.backendUrl}/api/post`, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

/*
    [매칭 모집글 조회 - 1개]
    Method: GET
*/
export const getMatchingPostDetail = async (postId: string | undefined) => {
  try {
    const res = await axios.get(
      `${config.backendUrl}/api/post/${Number(postId)}`,
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
    매칭 게시물 삭제
    Method: Delete
*/
export const deleteMatchingPost = async (postId: string | undefined) => {
  try {
    const res = await axios.delete(
      `${config.backendUrl}/api/post/${Number(postId)}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
