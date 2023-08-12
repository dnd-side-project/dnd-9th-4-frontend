/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import ProfileEmpty from 'assets/profile/img_profile_empty.svg';
import {
  selectProfileHeader,
  selectProfileImg,
  selectProfileListArea,
  selectProfileListStyle,
} from 'components/styles/onBoardingPage';
import SelectProfileList from './SelectProfileList';
import NextButton from 'components/common/NextButton';

const SelectProfileArea = ({
  originalProfile,
  setOriginalProfile,
  setBottomSheetClose,
}: {
  originalProfile: string;
  setOriginalProfile: (src: string) => void;
  setBottomSheetClose: () => void;
}) => {
  const [selectProfile, setSelectProfile] = useState(originalProfile);

  return (
    <>
      <div css={selectProfileHeader}>
        <div className="title">프로필 사진 선택하기</div>
        <div>나를 표현할 사진 또는 뉴플캐릭터를 선택하세요!</div>
      </div>
      <img css={selectProfileImg} src={selectProfile} />
      <div css={selectProfileListArea}>
        <div css={selectProfileListStyle}>프로필 선택</div>
        <SelectProfileList setSelectProfile={setSelectProfile} />
      </div>
      <NextButton
        text="완료"
        isEnabled={selectProfile !== ProfileEmpty}
        onEnabledClick={() => {
          setOriginalProfile(selectProfile);
          setBottomSheetClose();
        }}
      />
    </>
  );
};

export default SelectProfileArea;
