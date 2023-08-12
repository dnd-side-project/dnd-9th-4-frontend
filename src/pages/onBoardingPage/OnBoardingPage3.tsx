/** @jsxImportSource @emotion/react */
import BottomSheet from 'components/common/BottomSheet';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ExercisePeriodContent from 'components/onBoardingPage/ExercisePeriodContent';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import SelectRectangle from 'components/onBoardingPage/SelectRectangle';
import { appContainer } from 'components/styles/common/common';
import {
  onBoardingBodyArea,
  selectPeriodContainer,
} from 'components/styles/onBoardingPage';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnBoardingPage3 = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div css={appContainer}>
        <PrevHeader text="" />
        <ProgressBar value={3} />
        <div css={onBoardingBodyArea}>
          <Question
            keyword="운동 경력"
            sentence="을 선택해주세요."
            isEssential={true}
          />
          <div css={selectPeriodContainer}>
            <SelectRectangle text="년" onClick={() => setIsOpen(true)} />
            <div style={{ width: '12px' }} />
            <SelectRectangle text="개월" onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <NextButton
          text={'다음'}
          isEnabled={true}
          onEnabledClick={() => {
            navigate('/onboarding/4');
          }}
        />
      </div>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ExercisePeriodContent />
      </BottomSheet>
    </>
  );
};

export default OnBoardingPage3;
