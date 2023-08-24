/*
    매칭 모집글 작성 및 수정
*/

import { baseAxios } from './baseAxios';

/*
    매칭 게시물 작성
    {
        "memberId":1,
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
interface postWriteData {
  memberId: number | null;
  sport: string | null;
  tags: string[];
  title: string | null;
  content: string | null;
  region: string | null;
  gender: string | null;
  age: string | null;
  runtime: string | null;
}

export const postMatchingPostWrite = async (write: postWriteData) => {
  const response = await baseAxios
    .post('/api/post', write, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
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
interface postEditeData {
  sport: string | null;
  tags: string[];
  title: string | null;
  content: string | null;
  region: string | null;
  gender: string | null;
  age: string | null;
  runtime: string | null;
}

export const putMatchingPostEdit = async (edit: postEditeData) => {
  const response = await baseAxios
    .put('/api/post', edit, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};
