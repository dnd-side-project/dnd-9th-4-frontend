import { atom } from 'recoil';

interface DateDateType {
  YY: string;
  MM: string;
  DD: string;
  runtime: string;
}

const getCurrentDate: () => DateDateType = () => {
  const today = new Date();
  const YY = today.getFullYear().toString();
  const MM = (today.getMonth() + 1).toString().padStart(2, '0');
  const DD = today.getDate().toString().padStart(2, '0');
  const runtime = `${YY}-${MM}-${DD}`;
  return { YY, MM, DD, runtime };
};

export const DateState = atom<DateDateType>({
  key: 'DateState',
  default: getCurrentDate(),
});
