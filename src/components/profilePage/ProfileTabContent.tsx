/** @jsxImportSource @emotion/react */
import { UserProfile } from 'pages/myPage/MyPage';
import UserInfoBox from 'components/myPage/UserInfoBox';
import IntroduceBox from 'components/myPage/IntroduceBox';
import ReviewBox from 'components/myPage/ReviewBox';
import { profilePageProfileTabArea } from 'components/styles/common/profilePageStyles';
import BackgroundTag from 'components/common/BackgroundTag';
import MoreListItem from 'components/myPage/MoreListItem';

const ProfileTabContent = ({ user }: { user: UserProfile }) => {
  const userProfile: UserProfile = user;

  return (
    <div css={profilePageProfileTabArea}>
      <div className="user-info">
        <UserInfoBox userInfo={userProfile.userInfo} />
      </div>
      <div className="introduce">
        <IntroduceBox
          content={
            userProfile.introduce !== null
              ? userProfile.introduce
              : '아직 소개글이 작성되지 않았어요.'
          }
        />
      </div>
      <div className="mate">
        <div className="title">선호하는 운동 메이트</div>
        <div className="tags">
          {userProfile.mate.map((tag, index) => (
            <BackgroundTag key={index} color="255, 135, 97" text={tag} />
          ))}
          {userProfile.interesting.map((tag, index) => (
            <BackgroundTag key={index} color="0, 116, 255" text={tag} />
          ))}
        </div>
      </div>
      <div className="divider" />
      <div className="review">
        <div className="title">
          <MoreListItem text="운동후기" onClick={() => {}} />
        </div>
        <ReviewBox review={userProfile.review} />
      </div>
    </div>
  );
};

export default ProfileTabContent;
