/** @jsxImportSource @emotion/react */
import Label from 'components/common/Label';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import InterestedExercise from 'components/onBoardingPage/InterestedExerciseArea';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import { appContainer } from 'components/styles/common/common';
import {
  healthLabel,
  onBoardingBodyArea,
} from 'components/styles/onBoardingPage';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { onboardingProfileState } from 'recoil/onboardingProfileState';

const OnBoardingPage2 = () => {
  const navigate = useNavigate();
  const [onboardingProfile, setOnboardingProfile] = useRecoilState(
    onboardingProfileState,
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleProfileChange = () => {
    const updatedProfile = {
      ...onboardingProfile,
      sport: selectedTags,
    };
    setOnboardingProfile(updatedProfile);
    console.log(updatedProfile);
    console.log(onboardingProfile);
  };

  const onUpdateSelectedTags = (tags: string[]) => {
    setSelectedTags(tags);
    console.log('OnBoardingPage2 : ' + tags);
  };

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
        <InterestedExercise onUpdateSelectedTags={onUpdateSelectedTags} />
      </div>
      <NextButton
        text={'다음'}
        isEnabled={selectedTags.length > 0}
        onEnabledClick={() => {
          handleProfileChange();
          navigate('/onboarding/3');
        }}
      />
    </div>
  );
};

export default OnBoardingPage2;
