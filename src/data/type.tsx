export type RegionData = {
  [key: string]: string[];
};

export type OnboardingProfile = {
  memberId: number | null;
  userName: string | null;
  introduce: string | null;
  profileImg: string | null;
  sport: string[];
  exerciseStyles: string[];
  interests: string[];
  region: string | null;
  gender: string | null;
  mbti: string | null;
  periodEx: string | null;
  wantedPersonality: string | null;
  wantedAge: string | null;
  wantedGender: string | null;
  wantedPeriodEx: string | null;
};
