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

const OnBoardingPage4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div css={appContainer}>
        <PrevHeader text="" />
        <ProgressBar value={4} />
        <div css={onBoardingBodyArea}>
          <Question
            keyword="주로 운동하는 지역"
            sentence="을 입력해주세요."
            isEssential={true}
          />
          <div css={selectPeriodContainer}>
            <SelectRectangle
              text="서울특별시"
              onClick={() => setIsOpen(true)}
            />
            <div style={{ width: '12px' }} />
            <SelectRectangle text="강남구" onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <NextButton isEnabled={false} onEnabledClick={() => {}} />
      </div>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>주로 운동하는 지역을 입력해주세요</div>
      </BottomSheet>
    </>
  );
};

export default OnBoardingPage4;
