/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import SelectMateContent from 'components/onBoardingPage/SelectMateContent';
import { appContainer } from 'components/styles/common/common';
import {
  onBoardingBodyArea,
  skipStyle,
} from 'components/styles/onBoardingPage';
import { Mate } from 'data/type';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { onboardingProfileState } from 'recoil/onboardingProfileState';

const OnBoardingPage7 = () => {
  const navigate = useNavigate();
  const [onboardingProfile, setOnboardingProfile] = useRecoilState(
    onboardingProfileState,
  );
  const [mateInfo, setMateInfo] = useState<Mate>({
    gender: '',
    age: '',
    character: '',
    career: '',
  });

  const handleProfileChange = () => {
    const updatedProfile = {
      ...onboardingProfile,
      wantedPersonality: mateInfo.character,
      wantedAge: mateInfo.age,
      wantedGender: mateInfo.gender,
      wantedPeriodEx: mateInfo.career,
    };
    setOnboardingProfile(updatedProfile);
    console.log(updatedProfile);
    console.log(onboardingProfile);
  };

  const isNextEnabled =
    mateInfo.gender !== '' &&
    mateInfo.age !== '' &&
    mateInfo.character !== '' &&
    mateInfo.career !== '';

  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <div css={skipStyle} onClick={() => navigate('/onboarding/8')}>
        건너뛰기
      </div>
      <ProgressBar value={7} />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="선호하는 운동메이트"
          sentence={'를\n선택해주세요.'}
          isEssential={false}
        />
        <SelectMateContent onUpdateMateInfo={setMateInfo} />
      </div>
      <NextButton
        text={'다음'}
        isEnabled={isNextEnabled}
        onEnabledClick={() => {
          handleProfileChange();
          navigate('/onboarding/8');
        }}
      />
    </div>
  );
};

export default OnBoardingPage7;
