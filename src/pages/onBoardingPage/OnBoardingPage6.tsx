/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import SelectStyleContent from 'components/onBoardingPage/SelectStyleContent';
import { appContainer } from 'components/styles/common/common';
import {
  onBoardingBodyArea,
  skipStyle,
} from 'components/styles/onBoardingPage';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { onboardingProfileState } from 'recoil/onboardingProfileState';

const OnBoardingPage6 = () => {
  const navigate = useNavigate();
  const [onboardingProfile, setOnboardingProfile] = useRecoilState(
    onboardingProfileState,
  );
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [selectedInterested, setSelectedInterested] = useState<string[]>([]);

  const handleProfileChange = () => {
    const updatedProfile = {
      ...onboardingProfile,
      exerciseStyles: selectedStyle,
      interests: selectedInterested,
    };
    setOnboardingProfile(updatedProfile);
    // console.log(updatedProfile);
    // console.log(onboardingProfile);
  };

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
      <div css={skipStyle} onClick={() => navigate('/onboarding/7')}>
        건너뛰기
      </div>
      <ProgressBar value={6} />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="나의 운동스타일과 관심사"
          sentence={'를\n선택해주세요.'}
          isEssential={false}
        />
        <SelectStyleContent
          defaultInterested={[]}
          defaultStyle={[]}
          onUpdateSelectedStyles={onUpdateSelectedStyles}
          onUpdateSelectedInterested={onUpdateSelectedInterested}
        />
      </div>
      <NextButton
        text={'다음'}
        isEnabled={selectedStyle.length > 0 && selectedInterested.length > 0}
        onEnabledClick={() => {
          handleProfileChange();
          navigate('/onboarding/7');
        }}
      />
    </div>
  );
};

export default OnBoardingPage6;
