/*
    매칭 모집글 작성 및 수정
*/

import axios from 'axios';
import config from 'config';
import { getJwtToken } from './localStorage';

interface postWriteData {
  memberId: number | null;
  sport: string | null;
  tags: string[];
  title: string | null;
  content: string | null;
  region: string | null;
  gender: string | null;
  age: string | null;
  runtime: string | null | Date;
}

export const postMatchingPostWrite = async (write: postWriteData) => {
  try {
    const res = await axios.post(`${config.backendUrl}/api/post`, write, {
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
    매칭 게시물 수정
    Headers:	Authorization={액세스 토큰}
    {
        "sport":"HIKING",
        "tags": [
            "운동",
            "20대"
        ],
        "title": "한라산 올라가실 분~",
        "content": "취미로 등산하는데 한라산 꼭 가보고 싶었어요!!",
        "region" : "대전광역시 유성구",
        "gender": "여성",
        "age": "20대 초반",
        "runtime":"2023-09-12 13:00:00"
    }
*/
interface postEditData {
  sport: string | null | undefined;
  tags: string[] | undefined;
  title: string | null | undefined;
  content: string | null | undefined;
  region: string | null | undefined;
  gender: string | null | undefined;
  age: string | null | undefined;
  runtime: string | null | undefined;
}

export const putMatchingPostEdit = async (
  edit: postEditData,
  postId: string | undefined,
) => {
  try {
    const res = await axios.put(
      `${config.backendUrl}/api/post/${Number(postId)}`,
      edit,
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
