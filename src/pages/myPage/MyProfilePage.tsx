/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import UserInfoBox from 'components/myPage/UserInfoBox';
import {
  appContainer,
  bodyContainer,
  dividerContainer,
} from 'components/styles/common/common';
import React from 'react';
import { UserProfile } from './MyPage';
import Profile1 from 'assets/profile/img_profile_1.svg';
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
  profileUserInfoContainer,
  reviewBoxContainer,
} from 'components/styles/myPage';
import IntroduceBox from 'components/myPage/IntroduceBox';
import MoreListItem from 'components/myPage/MoreListItem';
import BackgroundTag from 'components/common/BackgroundTag';
import ReviewBox from 'components/myPage/ReviewBox';
import { useNavigate } from 'react-router-dom';
import { EditProfile } from './ProfileEditPage';

const MyProfilePage = () => {
  const navigate = useNavigate();
  const userProfile: UserProfile = {
    name: '아메리카노',
    img: Profile1,
    age: 23,
    gender: '여',
    userInfo: {
      region: {
        first: '서울특별시',
        second: '강남구',
      },
      interested: '헬스',
      career: {
        year: null,
        month: '3개월',
      },
      mbti: 'ISTP',
    },
    introduce: null,
    interesting: ['체력 키우기', '다이어트'],
    mate: [
      '러닝',
      '같은 성별',
      '나이 상관없어요',
      '친화력 좋은',
      '경력 상관없어요',
    ],
    review: {
      score: 3.5,
      count: 10,
      content: [
        '😄  대화가 잘 통해요',
        '📧  응답이 빨라요',
        '🕖 시간 약속을 잘 지켜요',
      ],
    },
  };

  const handleProfileEditClick = () => {
    const editInfo: EditProfile = {
      img: userProfile.img,
      name: userProfile.name,
      userInfo: userProfile.userInfo,
      introduce: userProfile.introduce,
    };

    navigate('/my/profile/edit', { state: { editInfo } });
  };

  return (
    <div css={appContainer}>
      <PrevHeader text="프로필" />
      <div css={bodyContainer}>
        <div css={profileHeaderContainer}>
          <img
            src={userProfile.img}
            style={{ width: '79px', height: '79px' }}
          />
          <div css={profileHeaderTextArea}>
            <div css={profileHeaderTextTitle}>{userProfile.name}</div>
            <div>{`${userProfile.age} / ${userProfile.gender}`}</div>
          </div>
        </div>
        <div css={profileEditBoxContainer} onClick={handleProfileEditClick}>
          프로필 수정
        </div>
        <div css={profileUserInfoContainer}>
          <UserInfoBox userInfo={userProfile.userInfo} />
        </div>
        <div css={introduceBoxContainer}>
          <IntroduceBox
            content={
              userProfile.introduce !== null
                ? userProfile.introduce
                : '아직 소개글이 작성되지 않았어요.'
            }
          />
        </div>
        <div css={profileMateContainer}>
          <MoreListItem text="선호하는 운동메이트" onClick={() => {}} />
          <div css={profileMateContentArea}>
            {userProfile.mate.map((tag, index) => (
              <BackgroundTag key={index} color="255, 135, 97" text={tag} />
            ))}
            {userProfile.interesting.map((tag, index) => (
              <BackgroundTag key={index} color="0, 116, 255" text={tag} />
            ))}
          </div>
        </div>
        <div css={dividerContainer}>
          <div css={myPageProfileDivider} />
        </div>
        <div css={profileReviewContainer}>
          <MoreListItem text="운동후기" onClick={() => {}} />
          <div css={reviewBoxContainer}>
            <ReviewBox review={userProfile.review} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
