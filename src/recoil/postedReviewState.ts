import { atom } from 'recoil';

export const postedReviewState = atom<number[]>({
  key: 'postedReviewState',
  default: [],
});
