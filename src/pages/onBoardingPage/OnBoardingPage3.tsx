/** @jsxImportSource @emotion/react */
import DropDown from 'components/common/DropDown';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import { appContainer } from 'components/styles/common/common';
import {
  onBoardingBodyArea,
  selectPeriodContainer,
} from 'components/styles/onBoardingPage';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { onboardingProfileState } from 'recoil/onboardingProfileState';

const OnBoardingPage3 = () => {
  const navigate = useNavigate();
  const [onboardingProfile, setOnboardingProfile] = useRecoilState(
    onboardingProfileState,
  );
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const handleProfileChange = () => {
    const updatedProfile = {
      ...onboardingProfile,
      periodEx: `${year} ${month}`,
    };
    setOnboardingProfile(updatedProfile);
    console.log(updatedProfile);
    console.log(onboardingProfile);
  };

  const yearItem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
    (item) => item.toString() + '년',
  );
  const monthItem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
    (item) => item.toString() + '개월',
  );

  useEffect(() => {
    console.log(year + month);
  }, [year, month]);

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
            <DropDown
              placeHolder="년"
              value={year}
              items={yearItem}
              setValue={setYear}
            />
            <div style={{ width: '12px' }} />
            <DropDown
              placeHolder="개월"
              value={month}
              items={monthItem}
              setValue={setMonth}
            />
          </div>
        </div>
        <NextButton
          text={'다음'}
          isEnabled={year !== '' && month !== ''}
          onEnabledClick={() => {
            handleProfileChange();
            navigate('/onboarding/4');
            console.log('YEAR : ' + year + ' | MONTH : ' + month);
          }}
        />
      </div>
    </>
  );
};

export default OnBoardingPage3;
