/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import { appContainer } from 'components/styles/common/common';
import {
  genderArea,
  genderBoxArea,
  onBoardingBodyArea,
} from 'components/styles/onBoardingPage';
import { ReactComponent as Male } from 'assets/img_gender_male.svg';
import { ReactComponent as Female } from 'assets/img_gender_female.svg';
import React from 'react';

const OnBoardingPage1 = () => {
  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <ProgressBar value={1} />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="성별"
          sentence="을 선택해주세요."
          isEssential={true}
        />
        <div css={genderBoxArea}>
          <div css={genderArea}>
            <Male />
          </div>
          <div style={{ width: '12.5px' }} />
          <div css={genderArea}>
            <Female />
          </div>
        </div>
      </div>
      <NextButton isEnabled={false} onEnabledClick={() => {}} />
    </div>
  );
};

export default OnBoardingPage1;
