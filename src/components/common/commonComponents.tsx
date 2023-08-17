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
import Resatrt from 'assets/Restart.svg';

interface InitAndApplyData {
  onClickSelectionInit: () => void;
  onClickApply: () => void;
}

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

/*
  [선택 초기화, 적용하기]
*/
export function InitAndApplyButton(props: InitAndApplyData) {
  return (
    <div
      css={css({
        marginTop: '32px',
        display: 'flex',
        textAlign: 'center',
      })}
    >
      <div
        css={css({
          flex: '3',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '16px',
          paddingRight: '20px',
        })}
      >
        <img src={Resatrt} css={css({ width: '20px', height: '20px' })} />
        <div
          css={css({
            color: '#000',
            textAlign: 'center',
            fontFamily: 'Pretendard',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '150%',
            letterSpacing: '-0.266px',
          })}
          onClick={props.onClickSelectionInit}
        >
          선택초기화
        </div>
      </div>
      <div
        css={css({
          flex: '5',
          display: 'flex',
          width: '181px',
          height: '49px',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          borderRadius: '8px',
          background: '#06F',
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '150%' /* 24px */,
          letterSpacing: '-0.304px',
        })}
        onClick={props.onClickApply}
      >
        적용하기
      </div>
    </div>
  );
}

interface HorizontallineData {
  height?: string;
  color?: string;
  margin?: string;
}

/*
 [가로선]
*/
export function Horizontalline(props: HorizontallineData) {
  return (
    <div
      css={css({
        height: props.height ? props.height : '1px',
        backgroundColor: props.color ? props.color : '#E2E2E2',
        marginBlock: props.margin ? props.margin : '10px',
        //marginTop: '20px',
      })}
    />
  );
}
