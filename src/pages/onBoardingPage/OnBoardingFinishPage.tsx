/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import { ReactComponent as Finish } from 'assets/onBoardingPageIcon/img_finish.svg';
import { appContainer } from 'components/styles/common/common';
import {
  finishContainer,
  finishTextArea,
  onBoardingBodyArea,
} from 'components/styles/onBoardingPage';
import { useNavigate } from 'react-router-dom';

const OnBoardingFinishPage = () => {
  const navigate = useNavigate();
  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <div css={onBoardingBodyArea}>
        <div css={finishContainer}>
          <div css={finishTextArea}>
            {'가입이 완료되었습니다.\n나와 맞는 뉴플메이트를 찾아보세요!'}
          </div>
          <Finish />
        </div>
      </div>
      <NextButton
        text={'시작하기'}
        isEnabled={true}
        onEnabledClick={() => {
          navigate('/');
        }}
      />
    </div>
  );
};

export default OnBoardingFinishPage;
