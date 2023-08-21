/** @jsxImportSource @emotion/react */
import { appContainer, stackRow } from 'components/styles/common/common';
import {
  moreListArea,
  myPageContainer,
  myPageDivider,
  myPageProfileContainer,
  myPageProfileTextArea,
} from 'components/styles/myPage';
import Profile1 from 'assets/profile/img_profile_1.svg';
import { ReactComponent as ArrowRight } from 'assets/icon/icon_arrow_right.svg';
import React, { useState } from 'react';
import { ButtonNavigation } from 'components/common/commonComponents';
import MoreListItem from 'components/myPage/MoreListItem';
import { Modal } from '@mui/material';
import LogoutModalArea from 'components/myPage/LogoutModalArea';

export type UserInfo = {
  region: {
    first: string;
    second: string;
  };
  interested: string;
  career: {
    year: string | null;
    month: string | null;
  };
  mbti: string;
};

export type Review = {
  score: number;
  count: number;
  content: string[];
};

export type UserProfile = {
  name: string;
  img: string;
  age: number;
  gender: string;
  userInfo: UserInfo;
  introduce: string | null;
  interesting: string[];
  mate: string[];
  review: Review;
};

const MyPage = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  return (
    <div css={appContainer}>
      <div css={myPageContainer}>
        <div css={myPageProfileContainer}>
          <div css={stackRow}>
            <img src={Profile1} style={{ width: '79px', height: '79px' }} />
            <div css={myPageProfileTextArea}>푸바오님</div>
          </div>
          <ArrowRight width={24} height={24} />
        </div>
        <div css={myPageDivider} />
        <div css={moreListArea}>
          <MoreListItem text="내가 작성한 글" onClick={() => {}} />
          <MoreListItem text="매칭 기록" onClick={() => {}} />
          <MoreListItem
            text="로그아웃"
            onClick={() => {
              setIsLogoutOpen(true);
            }}
          />
          <MoreListItem text="회원탈퇴" onClick={() => {}} />
        </div>
      </div>
      <Modal
        open={isLogoutOpen}
        onClose={() => {
          setIsLogoutOpen(false);
        }}
      >
        <LogoutModalArea />
      </Modal>
      <ButtonNavigation />
    </div>
  );
};

export default MyPage;