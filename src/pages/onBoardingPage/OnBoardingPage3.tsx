/** @jsxImportSource @emotion/react */
import BottomSheet from 'components/common/BottomSheet';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import SelectRectangle from 'components/onBoardingPage/SelectRectangle';
import { appContainer } from 'components/styles/common/common';
import {
  onBoardingBodyArea,
  selectPeriodContainer,
} from 'components/styles/onBoardingPage';
import React, { useState } from 'react';

const OnBoardingPage3 = () => {
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
        <NextButton isEnabled={false} onEnabledClick={() => {}} />
      </div>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>운동 경력을 선택해주세요</div>
      </BottomSheet>
    </>
  );
};

export default OnBoardingPage3;
