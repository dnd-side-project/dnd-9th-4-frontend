/** @jsxImportSource @emotion/react */
import Label from 'components/common/Label';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import InterestedExercise from 'components/onBoardingPage/InterestedExercise';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import { appContainer } from 'components/styles/common/common';
import {
  healthLabel,
  onBoardingBodyArea,
} from 'components/styles/onBoardingPage';
import React from 'react';

const OnBoardingPage2 = () => {
  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <ProgressBar value={2} />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="관심있는 운동"
          sentence="을 선택해주세요."
          isEssential={true}
        />
        <div css={healthLabel}>
          <Label text="중복선택 가능" />
        </div>
        <InterestedExercise />
      </div>
      <NextButton isEnabled={false} onEnabledClick={() => {}} />
    </div>
  );
};

export default OnBoardingPage2;
