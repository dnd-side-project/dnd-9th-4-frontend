import { MypageProfile } from 'data/type';
import { baseAxios } from './baseAxios';

/**
 * 프로필 조회
 * @params 멤버 아이디
 * @returns MypageProfile
 */
export const getMyProfile = async () => {
  const response = await baseAxios
    .get(`/api/profile/${localStorage.getItem('memberId')}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
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
