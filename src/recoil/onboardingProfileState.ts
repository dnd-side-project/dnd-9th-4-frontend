import { OnboardingProfile } from 'data/type';
import { atom } from 'recoil';

export const onboardingProfileState = atom<OnboardingProfile>({
  key: 'onboardingProfileState',
  default: {
    userName: '',
    introduce: '',
    profileImg: '',
    sport: [],
    exerciseStyles: [],
    interests: [],
    region: '',
    gender: '',
    mbti: '',
    periodEx: '',
    wantedPersonality: '',
    wantedAge: '',
    wantedGender: '',
    wantedPeriodEx: '',
  },
});
