import { atom } from 'recoil';

interface DateDateType {
  YY: string;
  MM: string;
  DD: string;
  runtime: string;
}

export const DateState = atom<DateDateType>({
  key: 'DateState',
  default: {
    YY: '2023',
    MM: '08',
    DD: '26',
    runtime: '2023-08-26',
  },
});
