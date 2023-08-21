/** @jsxImportSource @emotion/react */
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import TextInputBox from 'components/common/TextInputBox';
import SelectRectangle from 'components/onBoardingPage/SelectRectangle';
import {
  appContainer,
  bodyContainer,
  verticalLastBlock,
} from 'components/styles/common/common';
import {
  editProfileBodyItemContainer,
  editProfileHeaderContainer,
  editProfileHeaderInputArea,
  editProfileHeaderTextArea,
} from 'components/styles/myPage';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserInfo } from './MyPage';

export type EditProfile = {
  img: string;
  name: string;
  userInfo: UserInfo;
  introduce: string | null;
};

const ProfileEditPage = () => {
  const location = useLocation();
  const editInfo: EditProfile = location.state.editInfo;

  return (
    <div css={appContainer}>
      <PrevHeader text="프로필 수정" />
      <div css={bodyContainer}>
        <div css={editProfileHeaderContainer}>
          <img src={editInfo.img} style={{ width: '87px', height: '87px' }} />
          <div css={editProfileHeaderTextArea}>
            <div>닉네임</div>
            <div css={editProfileHeaderInputArea}>
              <TextInputBox
                defaultVal={editInfo.name}
                rows={undefined}
                placeHolder={'닉네임'}
              />
            </div>
          </div>
        </div>
        <div css={editProfileBodyItemContainer}>
          <div className="title">운동 지역</div>
          <div className="content">
            <SelectRectangle
              text={editInfo.userInfo.region.first}
              onClick={() => {}}
            />
            <div style={{ width: '12px' }} />
            <SelectRectangle
              text={editInfo.userInfo.region.second}
              onClick={() => {}}
            />
          </div>
        </div>
        <div css={editProfileBodyItemContainer}>
          <div className="title">관심 운동</div>
          <div className="content">
            <SelectRectangle
              text={editInfo.userInfo.interested}
              onClick={() => {}}
            />
          </div>
        </div>
        <div css={editProfileBodyItemContainer}>
          <div className="title">운동 경력</div>
          <div className="content">
            <SelectRectangle
              text={
                editInfo.userInfo.career.year !== null
                  ? editInfo.userInfo.career.year
                  : '년'
              }
              onClick={() => {}}
            />
            <div style={{ width: '12px' }} />
            <SelectRectangle
              text={
                editInfo.userInfo.career.month !== null
                  ? editInfo.userInfo.career.month
                  : '개월'
              }
              onClick={() => {}}
            />
          </div>
        </div>
        <div css={editProfileBodyItemContainer}>
          <div className="title">MBTI</div>
          <div className="content">
            <SelectRectangle text={editInfo.userInfo.mbti} onClick={() => {}} />
          </div>
        </div>
        <div css={editProfileBodyItemContainer}>
          <div className="title">소개글</div>
          <div className="content">
            <TextInputBox
              defaultVal={
                editInfo.introduce !== null ? editInfo.introduce : undefined
              }
              rows={3}
              placeHolder="한 줄 소개를 입력해주세요."
            />
          </div>
        </div>
        <div css={verticalLastBlock} />
      </div>
      <NextButton text="수정하기" isEnabled={true} onEnabledClick={() => {}} />
    </div>
  );
};

export default ProfileEditPage;
