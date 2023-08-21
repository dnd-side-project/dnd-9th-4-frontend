/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Resatrt from 'assets/Restart.svg';
import HomeBlue from 'assets/bottomNavigation/HomeBlue.svg';
import HomeGray from 'assets/bottomNavigation/HomeGray.svg';
import MatchingBlue from 'assets/bottomNavigation/MatchingBlue.svg';
import MatchingGray from 'assets/bottomNavigation/MatchingGray.svg';
import MailBlue from 'assets/bottomNavigation/MailBlue.svg';
import MailGray from 'assets/bottomNavigation/MailGray.svg';
import MyBlue from 'assets/bottomNavigation/MyBlue.svg';
import MyGray from 'assets/bottomNavigation/MyGray.svg';

const navigationItems = [
  { label: '홈', icon: [HomeBlue, HomeGray], value: '/' },
  { label: '매칭', icon: [MatchingBlue, MatchingGray], value: '/matching' },
  { label: '쪽지', icon: [MailBlue, MailGray], value: '/mailBox' },
  { label: 'My', icon: [MyBlue, MyGray], value: '/my' },
];

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

  const onClickNavigation = (path: string) => {
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
        {navigationItems.map((item) => (
          <BottomNavigationAction
            key={item.value}
            label={item.label}
            icon={
              <img
                src={value === item.value ? item.icon[0] : item.icon[1]}
                alt={item.label}
              />
            }
            value={item.value}
            onClick={() => onClickNavigation(item.value)}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}

interface InitAndApplyData {
  onClickSelectionInit?: () => void;
  onClickApply: () => void;
}

/*
  [선택 초기화, 적용하기 버튼]
*/
export function InitAndApplyButton(props: InitAndApplyData) {
  return (
    <div
      css={css({
        marginTop: '32px',
        display: 'flex',
        textAlign: 'center',
        width: '21.25rem',
        marginBottom: '40px',
      })}
    >
      {props.onClickSelectionInit ? (
        <div
          css={css({
            flex: '3',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
            //paddingRight: '20px',
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
      ) : null}
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
      })}
    />
  );
}
