/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import EmptyImg from 'assets/profile/img_profile_empty.svg';
import { appContainer } from 'components/styles/common/common';
import {
  onBoardingBodyArea,
  onBoardingProfileImg,
  onBoardingProfileText,
} from 'components/styles/onBoardingPage';
import NicknameField from 'components/onBoardingPage/NicknameField';
import BottomSheet from 'components/common/BottomSheet';
import { useState } from 'react';
import SelectProfileArea from 'components/onBoardingPage/SelectProfileArea';

const OnBoardingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNicknameEntered, setIsNicknameEntered] = useState(false);

  const handleNicknameChange = (nickname: string) => {
    setIsNicknameEntered(Boolean(nickname));
  };

  return (
    <>
      <div css={appContainer}>
        <PrevHeader text="" />
        <div css={onBoardingBodyArea}>
          <div
            css={onBoardingProfileText}
          >{`반가워요!\n사진과 이름을 등록해주세요.`}</div>
          <img
            css={onBoardingProfileImg}
            src={EmptyImg}
            onClick={() => setIsOpen(true)}
          />
          <NicknameField onNicknameChange={handleNicknameChange} />
        </div>
        <NextButton isEnabled={isNicknameEntered} onEnabledClick={() => {}} />
      </div>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SelectProfileArea />
      </BottomSheet>
    </>
  );
};

export default OnBoardingPage;
