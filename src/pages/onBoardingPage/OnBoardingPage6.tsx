/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import SelectMateContent from 'components/onBoardingPage/SelectMateContent';
import { appContainer } from 'components/styles/common/common';
import { onBoardingBodyArea } from 'components/styles/onBoardingPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type mate = {
  interested: string[];
  gender: string;
  age: string;
  character: string;
  career: string;
};

const OnBoardingPage6 = () => {
  const navigate = useNavigate();
  const [mateInfo, setMateInfo] = useState<mate>({
    interested: [],
    gender: '',
    age: '',
    character: '',
    career: '',
  });

  const isNextEnabled =
    mateInfo.interested.length > 0 &&
    mateInfo.gender !== '' &&
    mateInfo.age !== '' &&
    mateInfo.character !== '' &&
    mateInfo.career !== '';

  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <ProgressBar value={6} />
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
          navigate('/onboarding/7');
        }}
      />
    </div>
  );
};

export default OnBoardingPage6;
