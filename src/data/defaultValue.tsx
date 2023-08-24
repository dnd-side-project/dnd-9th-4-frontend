import { MessageHistory, Profile } from './type';

export const defaultProfile: Profile = {
  age: '',
  exerciseStyles: [],
  gender: '',
  gpa: '',
  interests: [],
  introduce: '',
  mbti: '',
  memberId: 0,
  periodEx: '',
  posts: [],
  profileId: 0,
  profileImg: '',
  region: '',
  reviews: [],
  sport: [],
  username: '',
  wantedAge: '',
  wantedGender: '',
  wantedPeriodEx: '',
  wantedPersonality: '',
};

export const defaultMessageHistory: MessageHistory = {
  myId: 0,
  myUsername: '이름1',
  myProfileImg: '1',
  receiverId: 1,
  receiverUsername: '이름2',
  receiverProfileImg: '2',
  messageResponses: [],
};
