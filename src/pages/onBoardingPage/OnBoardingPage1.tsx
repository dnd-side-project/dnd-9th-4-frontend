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

const OnBoardingPage1 = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('');

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
          <div
            css={genderArea}
            onClick={() => setGender('Male')}
            className={gender === 'Male' ? ' active' : ''}
          >
            <Male />
          </div>
          <div style={{ width: '12.5px' }} />
          <div
            css={genderArea}
            onClick={() => setGender('Female')}
            className={gender === 'Female' ? ' active' : ''}
          >
            <Female />
          </div>
        </div>
      </div>
      <NextButton
        text={'다음'}
        isEnabled={gender !== ''}
        onEnabledClick={() => {
          navigate('/onboarding/2');
        }}
      />
    </div>
  );
};

export default OnBoardingPage1;
