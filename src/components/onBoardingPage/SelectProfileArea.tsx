/** @jsxImportSource @emotion/react */
import React from 'react';
import EmptyImg from 'assets/profile/img_profile_empty.svg';
import {
  selectProfileHeader,
  selectProfileImg,
  selectProfileListArea,
} from 'components/styles/onBoardingPage';
import SelectProfileList from './SelectProfileList';

const SelectProfileArea = () => {
  return (
    <>
      <div css={selectProfileHeader}>
        <div className="title">프로필 사진 선택하기</div>
        <div>나를 표현할 사진 또는 뉴플캐릭터를 선택하세요!</div>
      </div>
      <img css={selectProfileImg} src={EmptyImg} />
      <div css={selectProfileListArea}>
        <div>프로필 선택</div>
        <SelectProfileList />
      </div>
    </>
  );
};

export default SelectProfileArea;
