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
import { ReactComponent as Male } from 'assets/onBoardingPageIcon/img_gender_male.svg';
import { ReactComponent as Female } from 'assets/onBoardingPageIcon/img_gender_female.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { onboardingProfileState } from 'recoil/onboardingProfileState';

const OnBoardingPage1 = () => {
  const navigate = useNavigate();
  const [onboardingProfile, setOnboardingProfile] = useRecoilState(
    onboardingProfileState,
  );
  const [gender, setGender] = useState('');

  const handleProfileChange = () => {
    const updatedProfile = { ...onboardingProfile, gender: gender };
    setOnboardingProfile(updatedProfile);
    console.log(updatedProfile);
    console.log(onboardingProfile);
  };

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
          <div className="content-box">
            <div
              css={genderArea}
              onClick={() => setGender('남성')}
              className={gender === '남성' ? ' active' : ''}
            >
              <Male />
            </div>
            <div>남성</div>
          </div>
          <div style={{ width: '12.5px' }} />
          <div className="content-box">
            <div
              css={genderArea}
              onClick={() => setGender('여성')}
              className={gender === '여성' ? ' active' : ''}
            >
              <Female />
            </div>
            <div>여성</div>
          </div>
        </div>
      </div>
      <NextButton
        text={'다음'}
        isEnabled={gender !== ''}
        onEnabledClick={() => {
          handleProfileChange();
          navigate('/onboarding/2');
        }}
      />
    </div>
  );
};

export default OnBoardingPage1;
