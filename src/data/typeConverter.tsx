import {
  Message,
  MessageList,
  OnboardingProfile,
  Profile,
  Review,
  UserInfo,
} from './type';
import { sportValue } from './variable';

export const MessageListToMessage = (prop: MessageList) => {
  const message: Message = {
    messageId: prop.messageId,
    sentDate: prop.sentDate,
    content: prop.lastMessage,
    sender: 'RECEIVER',
  };

  return message;
};

export const ProfileToUserInfo = (prop: Profile) => {
  // console.log(prop.sport);
  // console.log(prop.sport.map((item) => sport[item]));
  const userInfo: UserInfo = {
    region: {
      first: prop.region.split(' ')[0],
      second: prop.region.split(' ')[1],
    },
    sports: prop.sport.map((item) => sportValue[item]),
    career: {
      year: prop.periodEx.split(' ')[0],
      month: prop.periodEx.split(' ')[1],
    },
    mbti: prop.mbti,
  };

  return userInfo;
};

export const ProfileToReview = (prop: Profile) => {
  const review: Review = {
    score: Number(prop.gpa),
    count: prop.reviews.length,
    content: prop.reviews,
  };

  return review;
};

export const ProfileToOnboardingProfile = (prop: Profile) => {
  const onboarding: OnboardingProfile = {
    username: prop.username,
    introduce: prop.introduce,
    profileImg: prop.profileImg,
    sport: prop.sport,
    exerciseStyles: prop.exerciseStyles,
    interests: prop.interests,
    region: prop.region,
    gender: prop.gender,
    mbti: prop.mbti,
    periodEx: prop.periodEx,
    wantedPersonality: prop.wantedPersonality,
    wantedAge: prop.wantedAge,
    wantedGender: prop.wantedGender,
    wantedPeriodEx: prop.wantedPeriodEx,
  };

  return onboarding;
};
