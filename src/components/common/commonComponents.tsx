/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from 'assets/bottomNavigation/Home.png';
import MatchingIcon from 'assets/bottomNavigation/Matching.svg';
import MyIcon from 'assets/bottomNavigation/My.svg';
import BlueHomeIcon from 'assets/bottomNavigation/BlueHome.png';
import BlueMatchingIcon from 'assets/bottomNavigation/BlueMatching.svg';
import BlueMyIcon from 'assets/bottomNavigation/BlueMy.svg';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

/*
    [하단 버튼 네비게이션]
*/
export function ButtonNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState(location.pathname);

  const handleTabChange = (event: unknown, newValue: string) => {
    setValue(newValue);
  };

  const onClickHomeNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Box
      css={css({
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      })}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleTabChange}
        css={css({
          height: '83px',
        })}
      >
        <BottomNavigationAction
          label="홈"
          icon={<img src={value === '/' ? BlueHomeIcon : HomeIcon} alt="홈" />}
          value="/"
          onClick={() => onClickHomeNavigation('/')}
        />
        <BottomNavigationAction
          label="매칭"
          icon={
            <img
              src={value === '/matching' ? BlueMatchingIcon : MatchingIcon}
              alt="매칭"
            />
          }
          value="/matching"
          onClick={() => onClickHomeNavigation('/matching')}
        />
        <BottomNavigationAction
          label="쪽지"
          icon={
            <img
              src={value === '/mailBox' ? BlueMatchingIcon : MatchingIcon}
              alt="쪽지"
            />
          }
          value="/mailBox"
          onClick={() => onClickHomeNavigation('/mailBox')}
        />
        <BottomNavigationAction
          label="My"
          icon={
            <img
              src={value === '/my' ? BlueMyIcon : MyIcon}
              alt="My"
              css={css({
                width: '25px',
                height: '25px',
                paddingBottom: '3px',
              })}
            />
          }
          value="/my"
          onClick={() => onClickHomeNavigation('/my')}
        />
      </BottomNavigation>
    </Box>
  );
}
