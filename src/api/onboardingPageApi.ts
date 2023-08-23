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
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOTc4OTIzNjUxIiwicm9sZSI6Im1lbWJlciIsImlzcyI6Im5ld3BsZSIsImlhdCI6MTY5MjcxMjI3MCwiZXhwIjoxNjkyNzk4NjcwfQ.09mySxPbdt0bZardiFtqeQ1uQC6bVMMXUTONN1L2z80',
      },
    })
    .then((response) => response.data);
  return response.data;
};
