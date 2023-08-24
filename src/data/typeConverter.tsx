import { Message, MessageList, Profile, Review, UserInfo } from './type';
import { sport, sportValue } from './variable';

export const MessageListToMessage = (prop: MessageList) => {
  const message: Message = {
    messageId: prop.messageId,
    sendDate: prop.sendDate,
    content: prop.lastMessage,
    sender: 'RECEIVER',
  };

  return message;
};

export const ProfileToUserInfo = (prop: Profile) => {
  console.log(prop.sport);
  console.log(prop.sport.map((item) => sport[item]));
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
