import { OnboardingProfile } from 'data/type';
import { baseAxios } from './baseAxios';

/**
 * 온보딩 프로필 정보 등록
 * @body 프로필 정보
 * @returns 통신코드(201..)
 */

export const postOnboardingProfile = async (profile: OnboardingProfile) => {
  const response = await baseAxios
    .post('/api/profile', profile, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};
