/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProfileEmpty from 'assets/profile/img_profile_empty.svg';
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
import CheckNickname from 'components/onBoardingPage/CheckNickname';
import { useNavigate } from 'react-router-dom';

const OnBoardingPage = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isNicknameEntered, setIsNicknameEntered] = useState(false);
  const [selectProfile, setSelectProfile] = useState(ProfileEmpty);

  const handleNicknameChange = (nickname: string) => {
    setNickname(nickname);
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
            src={selectProfile}
            onClick={() => setIsOpen(true)}
          />
          <NicknameField onNicknameChange={handleNicknameChange} />
          <CheckNickname nickname={nickname} />
        </div>
        <NextButton
          text={'다음'}
          isEnabled={isNicknameEntered && selectProfile !== ProfileEmpty}
          onEnabledClick={() => {
            navigate('/onboarding/1');
          }}
        />
      </div>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SelectProfileArea
          originalProfile={selectProfile}
          setOriginalProfile={setSelectProfile}
          setBottomSheetClose={() => setIsOpen(false)}
        />
      </BottomSheet>
    </>
  );
};

export default OnBoardingPage;
