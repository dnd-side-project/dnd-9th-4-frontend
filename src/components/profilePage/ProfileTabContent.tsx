/** @jsxImportSource @emotion/react */
import UserInfoBox from 'components/myPage/UserInfoBox';
import IntroduceBox from 'components/myPage/IntroduceBox';
import ReviewBox from 'components/myPage/ReviewBox';
import { profilePageProfileTabArea } from 'components/styles/common/profilePageStyles';
import BackgroundTag from 'components/common/BackgroundTag';
import MoreListItem from 'components/myPage/MoreListItem';
import { Profile } from 'data/type';
import { ProfileToReview, ProfileToUserInfo } from 'data/typeConverter';
import { useNavigate } from 'react-router-dom';

const ProfileTabContent = ({ userProfile }: { userProfile: Profile }) => {
  const navigate = useNavigate();

  return (
    <div css={profilePageProfileTabArea}>
      <div className="user-info">
        <UserInfoBox userInfo={ProfileToUserInfo(userProfile)} />
      </div>
      <div className="introduce">
        <IntroduceBox
          content={
            userProfile.introduce !== ''
              ? userProfile.introduce
              : '아직 소개글이 작성되지 않았어요.'
          }
        />
      </div>
      <div className="mate">
        <div className="title">운동스타일과 관심사</div>
        <div className="tags">
          {userProfile.exerciseStyles.map((tag, index) => (
            <BackgroundTag key={index} color="0, 116, 255" text={tag} />
          ))}
          {userProfile.interests.map((tag, index) => (
            <BackgroundTag key={index} color="0, 116, 255" text={tag} />
          ))}
        </div>
        <div className="title">선호하는 운동 메이트</div>
        <div className="tags">
          <BackgroundTag color="255, 135, 97" text={userProfile.wantedAge} />
          <BackgroundTag color="255, 135, 97" text={userProfile.wantedGender} />
          <BackgroundTag
            color="255, 135, 97"
            text={userProfile.wantedPeriodEx}
          />
          <BackgroundTag
            color="255, 135, 97"
            text={userProfile.wantedPersonality}
          />
        </div>
      </div>
      <div className="divider" />
      <div className="review">
        <div className="title">
          <MoreListItem
            text="운동후기"
            onClick={() => {
              navigate(`/review/${userProfile.memberId}`, {
                state: { reviews: userProfile.reviews },
              });
            }}
          />
        </div>
        <ReviewBox review={ProfileToReview(userProfile)} />
      </div>
    </div>
  );
};

export default ProfileTabContent;
