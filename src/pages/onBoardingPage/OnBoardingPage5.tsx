/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import MbtiArea from 'components/onBoardingPage/MbtiArea';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import { appContainer } from 'components/styles/common/common';
import { onBoardingBodyArea } from 'components/styles/onBoardingPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnBoardingPage5 = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState('');

  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <ProgressBar value={5} />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="MBTI "
          sentence="를 선택해주세요."
          isEssential={false}
        />
        <MbtiArea selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      </div>
      <NextButton
        text={'다음'}
        isEnabled={selectedTag !== ''}
        onEnabledClick={() => {
          navigate('/onboarding/6');
        }}
      />
    </div>
  );
};

export default OnBoardingPage5;
