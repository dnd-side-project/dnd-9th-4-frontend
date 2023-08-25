import { atom } from 'recoil';

/*
    매칭 모집글 작성
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
  runtime: string | null | Date;
}

export const postWriteState = atom<postWriteData>({
  key: 'postWriteState',
  default: {
    memberId: null,
    sport: '',
    tags: [],
    title: '',
    content: '',
    region: '',
    gender: '',
    age: '',
    runtime: '',
  },
});
