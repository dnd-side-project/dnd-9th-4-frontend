/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import SelectStyleContent from 'components/onBoardingPage/SelectStyleContent';
import { appContainer } from 'components/styles/common/common';
import { onBoardingBodyArea } from 'components/styles/onBoardingPage';
import { useNavigate } from 'react-router-dom';

const OnBoardingPage6 = () => {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [selectedInterested, setSelectedInterested] = useState<string[]>([]);

  const onUpdateSelectedStyles = (styles: string[]) => {
    setSelectedStyle(styles);
    console.log('Selected Styles : ' + styles);
  };
  const onUpdateSelectedInterested = (interested: string[]) => {
    setSelectedInterested(interested);
    console.log('Selected Interested : ' + interested);
  };

  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <ProgressBar value={6} />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="나의 운동스타일과 관심사"
          sentence={'를\n선택해주세요.'}
          isEssential={false}
        />
        <SelectStyleContent
          onUpdateSelectedStyles={onUpdateSelectedStyles}
          onUpdateSelectedInterested={onUpdateSelectedInterested}
        />
      </div>
      <NextButton
        text={'다음'}
        isEnabled={selectedStyle.length > 0 && selectedInterested.length > 0}
        onEnabledClick={() => {
          navigate('/onboarding/7');
        }}
      />
    </div>
  );
};

export default OnBoardingPage6;
