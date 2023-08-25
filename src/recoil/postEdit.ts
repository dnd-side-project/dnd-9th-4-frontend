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

export const postEditState = atom<postEditData>({
  key: 'postEditState',
  default: {
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
