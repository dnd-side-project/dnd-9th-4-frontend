/** @jsxImportSource @emotion/react */
import React, { SyntheticEvent, useState } from 'react';
import Profile1 from 'assets/profile/img_profile_1.svg';
import { UserProfile } from 'pages/myPage/MyPage';
import DarkPrevHeader from 'components/profilePage/DarkPrevHeader';
import { noPdddingContainer } from 'components/styles/common/common';
import {
  profilePageContainer,
  profilePageTabBarContainer,
  profilePageTabContentContainer,
  profilePageTopContainer,
} from 'components/styles/common/profilePageStyles';
import { Tab, Tabs } from '@mui/material';
import ProfileTabContent from 'components/profilePage/ProfileTabContent';
import ArticleTabContent from 'components/profilePage/ArticleTabContent';

const ProfilePage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
      interested: ['헬스', '수영'],
      career: {
        year: '',
        month: '3개월',
      },
      mbti: 'ISTP',
    },
    introduce: '',
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
  const tabStyle = {
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '150%',
    color: '#FFFFFF',
    '&.Mui-selected': {
      color: '#FFFFFF',
    },
  };
  const tabs = [
    {
      label: '프로필',
      children: <ProfileTabContent user={userProfile} />,
    },
    {
      label: '모집글',
      children: <ArticleTabContent />,
    },
  ];
  return (
    <div css={[noPdddingContainer, profilePageContainer]}>
      <DarkPrevHeader text="프로필" />
      <div css={profilePageTopContainer}>
        <img src={userProfile.img} width={80} height={80} />
        <div className="name">{userProfile.name}</div>
        <div className="basic">{`${userProfile.age} / ${userProfile.gender}`}</div>
      </div>
      <div css={profilePageTabBarContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{
            style: { backgroundColor: '#FFFFFF', height: '4px' },
          }}
          sx={{ borderBottom: 0 }}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} disableRipple label={tab.label} sx={tabStyle} />
          ))}
        </Tabs>
      </div>
      <div css={profilePageTabContentContainer}>
        {tabs.map((tab, index) => (
          <div key={index} hidden={value !== index}>
            {value === index && tab.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
