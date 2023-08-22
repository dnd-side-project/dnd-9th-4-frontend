import { MypageProfile } from 'data/type';
import { baseAxios } from './baseAxios';

/**
 * 프로필 조회
 * @params 멤버 아이디
 * @returns MypageProfile
 */
export const getProfile = async () => {
  const response = await baseAxios
    .get('/api/profile', {
      params: {
        memberId: localStorage.getItem('memberId'),
      },
    })
    .then((response) => response.data);
  return response.data as MypageProfile;
};

export const postProfile = async (profile: MypageProfile) => {
  const response = await baseAxios
    .post('api/profile', profile)
    .then((response) => response.data);
  return response.data;
};
