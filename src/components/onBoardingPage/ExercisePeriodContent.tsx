/** @jsxImportSource @emotion/react */
import { exercisePeriodContentContainer } from 'components/styles/onBoardingPage';
import React from 'react';
import ExercisePeriodPicker from './ExercisePeriodPicker';

const ExercisePeriodContent = () => {
  return (
    <div css={exercisePeriodContentContainer}>
      <div>운동 경력</div>
      <ExercisePeriodPicker />
    </div>
  );
};

export default ExercisePeriodContent;
