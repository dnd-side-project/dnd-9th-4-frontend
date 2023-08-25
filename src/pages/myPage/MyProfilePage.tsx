/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import UserInfoBox from 'components/myPage/UserInfoBox';
import {
  appContainer,
  bodyContainer,
  dividerContainer,
} from 'components/styles/common/common';
import React from 'react';
import {
  introduceBoxContainer,
  myPageProfileDivider,
  profileEditBoxContainer,
  profileHeaderContainer,
  profileHeaderTextArea,
  profileHeaderTextTitle,
  profileMateContainer,
  profileMateContentArea,
  profileReviewContainer,
  profileStyleContainer,
  profileUserInfoContainer,
  reviewBoxContainer,
} from 'components/styles/myPage';
import IntroduceBox from 'components/myPage/IntroduceBox';
import MoreListItem from 'components/myPage/MoreListItem';
import BackgroundTag from 'components/common/BackgroundTag';
import ReviewBox from 'components/myPage/ReviewBox';
import { useLocation, useNavigate } from 'react-router-dom';
import { Profile } from 'data/type';
import { ProfileToReview, ProfileToUserInfo } from 'data/typeConverter';
import { imageList } from 'data/variable';

const MyProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userProfile: Profile = location.state.userProfile;

  const handleProfileEditClick = () => {
    navigate('/my/profile/edit', { state: { userProfile } });
  };
  console.log('**********UserProfile.style : ', userProfile.exerciseStyles);
  console.log('**********UserProfile.interested : ', userProfile.interests);

  return (
    <div css={appContainer}>
      <PrevHeader text="프로필" />
      <div css={bodyContainer}>
        <div css={profileHeaderContainer}>
          <img
            src={imageList[Number(userProfile.profileImg)]}
            style={{ width: '79px', height: '79px' }}
          />
          <div css={profileHeaderTextArea}>
            <div css={profileHeaderTextTitle}>{userProfile.username}</div>
            <div>{`${userProfile.age} / ${userProfile.gender}`}</div>
          </div>
        </div>
        <div css={profileEditBoxContainer} onClick={handleProfileEditClick}>
          프로필 수정
        </div>
        <div css={profileUserInfoContainer}>
          <UserInfoBox userInfo={ProfileToUserInfo(userProfile)} />
        </div>
        <div css={introduceBoxContainer}>
          <IntroduceBox
            content={
              userProfile.introduce !== ''
                ? userProfile.introduce
                : '아직 소개글이 작성되지 않았어요.'
            }
          />
        </div>
        <div css={profileStyleContainer}>
          <MoreListItem
            text="운동스타일과 관심사"
            onClick={() => {
              navigate('/my/profile/edit/style', { state: { userProfile } });
            }}
          />
          <div css={profileMateContentArea}>
            {userProfile.exerciseStyles.map((tag, index) => (
              <BackgroundTag key={index} color="0, 116, 255" text={tag} />
            ))}
            {userProfile.interests.map((tag, index) => (
              <BackgroundTag key={index} color="0, 116, 255" text={tag} />
            ))}
          </div>
        </div>
        <div css={profileMateContainer}>
          <MoreListItem text="선호하는 운동메이트" onClick={() => {}} />
          <div css={profileMateContentArea}>
            <BackgroundTag color="255, 135, 97" text={userProfile.wantedAge} />
            <BackgroundTag
              color="255, 135, 97"
              text={userProfile.wantedGender}
            />
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
        <div css={dividerContainer}>
          <div css={myPageProfileDivider} />
        </div>
        <div css={profileReviewContainer}>
          <MoreListItem
            text="운동후기"
            onClick={() => {
              navigate('/my/profile/review', {
                state: { reviews: userProfile.reviews },
              });
            }}
          />
          <div css={reviewBoxContainer}>
            <ReviewBox review={ProfileToReview(userProfile)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
