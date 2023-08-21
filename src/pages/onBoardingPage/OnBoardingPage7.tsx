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
  gender: string;
  age: string;
  character: string;
  career: string;
};

const OnBoardingPage7 = () => {
  const navigate = useNavigate();
  const [mateInfo, setMateInfo] = useState<mate>({
    gender: '',
    age: '',
    character: '',
    career: '',
  });

  const isNextEnabled =
    mateInfo.gender !== '' &&
    mateInfo.age !== '' &&
    mateInfo.character !== '' &&
    mateInfo.career !== '';

  return (
    <div css={appContainer}>
      <PrevHeader text="" />
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
          navigate('/onboarding/8');
        }}
      />
    </div>
  );
};

export default OnBoardingPage7;
