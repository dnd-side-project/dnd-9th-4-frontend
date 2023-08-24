export type RegionData = {
  [key: string]: string[];
};

export type OnboardingProfile = {
  kakaoId: number;
  userName: string;
  introduce: string;
  profileImg: string;
  sport: string[];
  exerciseStyles: string[];
  interests: string[];
  region: string;
  gender: string;
  mbti: string;
  periodEx: string;
  wantedPersonality: string;
  wantedAge: string;
  wantedGender: string;
  wantedPeriodEx: string;
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
  id: number;
  memberId: number;
  profileImg: string;
  title: string;
  region: string;
  sport: string;
  runtime: string;
};
