/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as Profile1 } from 'assets/profile/img_profile_1.svg';
import { ReactComponent as Profile2 } from 'assets/profile/img_profile_2.svg';
import { ReactComponent as Profile3 } from 'assets/profile/img_profile_3.svg';
import { ReactComponent as Profile4 } from 'assets/profile/img_profile_4.svg';
import { ReactComponent as Profile5 } from 'assets/profile/img_profile_5.svg';
import { ReactComponent as Profile6 } from 'assets/profile/img_profile_6.svg';
import { ReactComponent as Profile7 } from 'assets/profile/img_profile_7.svg';
import { ReactComponent as Profile8 } from 'assets/profile/img_profile_8.svg';
import { ReactComponent as Profile9 } from 'assets/profile/img_profile_9.svg';
import { ReactComponent as Profile10 } from 'assets/profile/img_profile_10.svg';
import { ReactComponent as Profile11 } from 'assets/profile/img_profile_11.svg';
import { ReactComponent as Profile12 } from 'assets/profile/img_profile_12.svg';
import { ReactComponent as Profile13 } from 'assets/profile/img_profile_13.svg';
import { ReactComponent as Profile14 } from 'assets/profile/img_profile_14.svg';
import {
  selectProfileListSlider,
  selectProfileListStyle,
} from 'components/styles/onBoardingPage';

const SelectProfileList = () => {
  const slides1 = [
    <Profile1 />,
    <Profile2 />,
    <Profile3 />,
    <Profile4 />,
    <Profile5 />,
    <Profile6 />,
    <Profile7 />,
    <Profile8 />,
  ];

  const slides2 = [
    <Profile9 />,
    <Profile10 />,
    <Profile11 />,
    <Profile12 />,
    <Profile13 />,
    <Profile14 />,
  ];

  return (
    <div css={selectProfileListStyle}>
      <div css={selectProfileListSlider}>{slides1}</div>
      <div css={selectProfileListSlider}>{slides2}</div>
    </div>
  );
};

export default SelectProfileList;
