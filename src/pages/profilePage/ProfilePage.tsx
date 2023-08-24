/** @jsxImportSource @emotion/react */
import React, { SyntheticEvent, useState } from 'react';
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
import { Profile } from 'data/type';
import { defaultProfile } from 'data/defaultValue';

const ProfilePage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const userProfile: Profile = { ...defaultProfile };

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
      children: <ProfileTabContent userProfile={userProfile} />,
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
        <img src={userProfile.profileImg} width={80} height={80} />
        <div className="name">{userProfile.username}</div>
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
