/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import SelectMateContent from 'components/onBoardingPage/SelectMateContent';
import { appContainer } from 'components/styles/common/common';
import { onBoardingBodyArea } from 'components/styles/onBoardingPage';

const OnBoardingPage6 = () => {
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
        <SelectMateContent />
      </div>
      <NextButton isEnabled={true} onEnabledClick={() => {}} />
    </div>
  );
};

export default OnBoardingPage6;
