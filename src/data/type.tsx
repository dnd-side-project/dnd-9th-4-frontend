export type RegionData = {
  [key: string]: string[];
};

export type OnboardingProfile = {
  // memberId: number | null;
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

export type MypageProfile = {
  age: string | null;
  exerciseStyles: string[];
  gender: string | null;
  gpa: string | null;
  interests: string[] | null;
  introduce: string | null;
  mbti: string | null;
  memberId: number | null;
  periodEx: string | null;
  posts: {
    postId: number | null;
    region: string | null;
    runtime: string | null;
    sport: string | null;
    title: string | null;
  }[];
  profileId: number | null;
  profileImg: string | null;
  region: string | null;
  reviews: string[];
  sport: string[];
  username: string | null;
  wantedAge: string | null;
  wantedGender: string | null;
  wantedPeriodEx: string | null;
  wantedPersonality: string | null;
};

export type MessageList = {
  messageId: number;
  receiverId: number;
  username: string;
  profileImg: string;
  sendDate: string;
  lastMessage: string;
};

export type MessageHistory = {
  myId: number;
  myUsername: string;
  myProfileImg: string;
  receiverId: number;
  receiverUsername: string;
  receiverProfileImg: string;
  messageResponses: Message[];
};

export type Message = {
  messageId: number;
  sendDate: string;
  content: string;
  sender: 'ME' | 'RECEIVER';
};

export type MatchingSchedule = {
  img: string;
  state: 'RESERVED' | 'COMPLETED';
  tag: string;
  date: string;
  title: string;
  location: string;
  exercise: string;
};
