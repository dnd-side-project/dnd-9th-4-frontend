import { OnboardingProfile } from 'data/type';
import { baseAxios } from './baseAxios';
import { getJwtToken } from './localStorage';

/**
 * 프로필 조회
 * @params 멤버 아이디
 * @returns MypageProfile
 */
export const getProfile = async (memberId: number) => {
  const response = await baseAxios
    .get(`/api/profile/${memberId}`, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};

/**
 * 프로필 수정
 * @params 온보딩프로필
 * @returns 어쩌구
 */
export const editProfile = async (editProfile: OnboardingProfile) => {
  const response = await baseAxios
    .put('/api/profile', editProfile, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    })
    .then((response) => response.data);
  console.log(response);
  return response;
};
