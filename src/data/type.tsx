export type RegionData = {
  [key: string]: string[];
};

export type OnboardingProfile = {
  // kakaoId: number; 안보내도 되는 것 같음
  username: string;
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

export type Profile = {
  age: string;
  exerciseStyles: string[];
  gender: string;
  gpa: string;
  interests: string[];
  introduce: string;
  mbti: string;
  memberId: number;
  periodEx: string;
  posts: MyPost[];
  profileId: number;
  profileImg: string;
  region: string;
  reviews: string[];
  sport: string[];
  username: string;
  wantedAge: string;
  wantedGender: string;
  wantedPeriodEx: string;
  wantedPersonality: string;
};

export type MessageList = {
  messageId: number;
  receiverId: number;
  username: string;
  profileImg: string;
  sentDate: string;
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

export type SendMessage = {
  content: string;
  receiverId: number;
  senderId: number;
};

export type PostConversation = {
  memberId: number;
  receiverId: number;
};

export type Message = {
  messageId: number;
  sentDate: string;
  content: string;
  sender: 'ME' | 'RECEIVER';
};

export type MatchingSchedule = {
  id: number;
  postId: number;
  memberId: number;
  profileImg: string;
  title: string;
  region: string;
  sport: string;
  runtime: string;
  username: string;
};

export type UserInfo = {
  region: {
    first: string;
    second: string;
  };
  sports: string[];
  career: {
    year: string;
    month: string;
  };
  mbti: string;
};

export type Review = {
  score: number;
  count: number;
  content: string[];
};

export type PostReview = {
  reviews: string[];
  score: number;
  targetId: number;
};

export type GetMatchingScheduleResponse = {
  reservedSchedule: MatchingSchedule[];
  completedSchedule: MatchingSchedule[];
};

export type MyPost = {
  postId: number;
  region: string;
  runtime: string;
  sport: string;
  title: string;
};

export interface MatchingPostData {
  id: number | null;
  memberId: number | null;
  writerUsername: string | null;
  writerAge: string | null;
  writerGender: string | null;
  writerProfileImg: string | null;
  writtenDate: string | null;
  sport: string | null;
  tags: string[];
  title: string | null;
  content: string | null;
  region: string | null;
  gender: string | null;
  age: string | null;
  runtime: string | null;
  status: string | null;
}

export type Mate = {
  gender: string;
  age: string;
  character: string;
  career: string;
};
