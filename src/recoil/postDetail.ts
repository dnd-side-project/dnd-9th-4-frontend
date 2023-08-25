import { atom } from 'recoil';

interface PostData {
  id: number | null;
  memberId: number | null;
  writerUsername: string | null;
  writerAge: string | null;
  writerGender: string | null;
  writerProfileImg: string | null;
  writtenDate: string | null;
  sport: string | null;
  tags: string[];
  title: string | null;
  content: string | null;
  region: string | null;
  gender: string | null;
  age: string | null;
  runtime: string | null;
  status: string | null;
}

export const postDetail = atom<PostData>({
  key: 'postDetailState',
  default: {
    id: null,
    memberId: null,
    writerUsername: null,
    writerAge: null,
    writerGender: null,
    writerProfileImg: null,
    writtenDate: null,
    sport: null,
    tags: [],
    title: null,
    content: null,
    region: null,
    gender: null,
    age: null,
    runtime: null,
    status: null,
  },
});
