/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import MbtiSection from 'components/onBoardingPage/MbtiSection';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import { appContainer } from 'components/styles/common/common';
import {
  onBoardingBodyArea,
  skipStyle,
} from 'components/styles/onBoardingPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { onboardingProfileState } from 'recoil/onboardingProfileState';

const OnBoardingPage5 = () => {
  const navigate = useNavigate();
  const [onboardingProfile, setOnboardingProfile] = useRecoilState(
    onboardingProfileState,
  );
  const [isEorI, setIsEorI] = useState('');
  const [isNorS, setIsNorS] = useState('');
  const [isForT, setIsForT] = useState('');
  const [isPorJ, setIsPorJ] = useState('');

  const handleProfileChange = () => {
    const updatedProfile = {
      ...onboardingProfile,
      mbti: isEorI + isNorS + isForT + isPorJ,
    };
    setOnboardingProfile(updatedProfile);
    // console.log(updatedProfile);
    // console.log(onboardingProfile);
  };

  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <div css={skipStyle} onClick={() => navigate('/onboarding/6')}>
        건너뛰기
      </div>
      <ProgressBar value={5} />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="MBTI "
          sentence="를 선택해주세요."
          isEssential={false}
        />
        <MbtiSection
          title="외향형 / 내향형"
          item1="E"
          item2="I"
          onClick={setIsEorI}
          clickedItem={isEorI}
        />
        <MbtiSection
          title="직관형 / 감각형"
          item1="N"
          item2="S"
          onClick={setIsNorS}
          clickedItem={isNorS}
        />
        <MbtiSection
          title="감정형 / 사고형"
          item1="F"
          item2="T"
          onClick={setIsForT}
          clickedItem={isForT}
        />
        <MbtiSection
          title="인식형 / 판단형"
          item1="P"
          item2="J"
          onClick={setIsPorJ}
          clickedItem={isPorJ}
        />
      </div>
      <NextButton
        text={'다음'}
        isEnabled={
          isEorI !== '' && isNorS !== '' && isForT !== '' && isPorJ !== ''
        }
        onEnabledClick={() => {
          console.log(isEorI + isNorS + isForT + isPorJ);
          handleProfileChange();
          navigate('/onboarding/6');
        }}
      />
    </div>
  );
};

export default OnBoardingPage5;
