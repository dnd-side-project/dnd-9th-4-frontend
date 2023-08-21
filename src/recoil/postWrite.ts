import { atom } from 'recoil';

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

// 매칭 게시물 작성
export const postWriteState = atom<postWriteData>({
  key: 'postWriteState',
  default: {
    memberId: null,
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
