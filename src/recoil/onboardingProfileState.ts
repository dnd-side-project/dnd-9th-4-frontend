import { OnboardingProfile } from 'data/type';
import { atom } from 'recoil';

export const onboardingProfileState = atom<OnboardingProfile>({
  key: 'onboardingProfileState',
  default: {
    kakaoId: null,
    userName: null,
    introduce: null,
    profileImg: null,
    sport: [],
    exerciseStyles: [],
    interests: [],
    region: null,
    gender: null,
    mbti: null,
    periodEx: null,
    wantedPersonality: null,
    wantedAge: null,
    wantedGender: null,
    wantedPeriodEx: null,
  },
});
