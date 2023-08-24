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
import { useParams } from 'react-router-dom';
import { baseAxios } from 'api/baseAxios';
import { useQuery } from 'react-query';
import { getProfile } from 'api/myPageApi';
import { imageList } from 'data/variable';

const ProfilePage = () => {
  const params = useParams();
  const memberId = Number(params.id);
  const [tabValue, setTabValue] = useState(0);

  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { data, isLoading, isError } = useQuery<Profile>('get-profile', () =>
    getProfile(memberId),
  );

  const handleTabValueChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
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
      children: (
        <ProfileTabContent
          userProfile={data !== undefined ? data : defaultProfile}
        />
      ),
    },
    {
      label: '모집글',
      children: (
        <ArticleTabContent articleList={data !== undefined ? data.posts : []} />
      ),
    },
  ];
  return (
    <div css={[noPdddingContainer, profilePageContainer]}>
      <DarkPrevHeader text="프로필" />
      {isError && <div>에러가 발생하였습니다.</div>}
      {isLoading ? (
        <div>로딩 중...</div>
      ) : (
        data !== undefined && (
          <>
            <div css={profilePageTopContainer}>
              <img
                src={imageList[Number(data.profileImg)]}
                width={80}
                height={80}
              />
              <div className="name">{data.username}</div>
              <div className="basic">{`${data.age} / ${data.gender}`}</div>
            </div>
            <div css={profilePageTabBarContainer}>
              <Tabs
                value={tabValue}
                onChange={handleTabValueChange}
                variant="fullWidth"
                TabIndicatorProps={{
                  style: { backgroundColor: '#FFFFFF', height: '4px' },
                }}
                sx={{ borderBottom: 0 }}
              >
                {tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    disableRipple
                    label={tab.label}
                    sx={tabStyle}
                  />
                ))}
              </Tabs>
            </div>
            <div css={profilePageTabContentContainer}>
              {tabs.map((tab, index) => (
                <div key={index} hidden={tabValue !== index}>
                  {tabValue === index && tab.children}
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default ProfilePage;
