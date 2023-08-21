/** @jsxImportSource @emotion/react */
import { logoutModalArea } from 'components/styles/myPage';
import React from 'react';
import CancelButton from './CancelButton';
import ContinueButton from './ContinueButton';

const LogoutModalArea = () => {
  return (
    <div css={logoutModalArea}>
      <div className="text">로그아웃 하시겠습니까?</div>
      <div className="buttons">
        <CancelButton />
        <div style={{ width: '8px' }} />
        <ContinueButton text="로그아웃" bgColor="#0074FF" onClick={() => {}} />
      </div>
    </div>
  );
};

export default LogoutModalArea;
