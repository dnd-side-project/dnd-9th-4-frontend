/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from 'assets/Home.png';
import MatchingIcon from 'assets/Matching.svg';
import MyIcon from 'assets/My.svg';
import BlueHomeIcon from 'assets/BlueHome.png';
import BlueMatchingIcon from 'assets/BlueMatching.svg';
import BlueMyIcon from 'assets/BlueMy.svg';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

/*
    [버튼 네비게이션]
    추후 버튼 누를 때, 해당 페이지로 가도록 할 예정
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
