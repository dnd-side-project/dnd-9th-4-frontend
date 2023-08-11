/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import MbtiArea from 'components/onBoardingPage/MbtiArea';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import { appContainer } from 'components/styles/common/common';
import { onBoardingBodyArea } from 'components/styles/onBoardingPage';

const OnBoardingPage5 = () => {
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
        <MbtiArea />
      </div>
      <NextButton isEnabled={true} onEnabledClick={() => {}} />
    </div>
  );
};

export default OnBoardingPage5;
