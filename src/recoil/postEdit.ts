import { atom } from 'recoil';

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

/*
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

export const postEditState = atom<postEditData>({
  key: 'postEditState',
  default: {
    sport: null,
    tags: [],
    title: null,
    content: null,
    region: null,
    gender: null,
    age: null,
    runtime: null,
  },
});
