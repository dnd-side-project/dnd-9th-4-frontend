import { atom } from 'recoil';

interface postWriteData {
  sport: string | null;
  exerciseStyles: string[];
  interests: string[];
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
    sport: null,
    exerciseStyles: [],
    interests: [],
    title: null,
    content: null,
    region: null,
    gender: null,
    age: null,
    runtime: null,
  },
});
