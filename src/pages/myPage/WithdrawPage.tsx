/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import { appContainer, bodyContainer } from 'components/styles/common/common';
import { ReactComponent as Withdraw } from 'assets/myPageIcon/img_withdraw.svg';
import React from 'react';
import CancelButton from 'components/myPage/CancelButton';
import ContinueButton from 'components/myPage/ContinueButton';
import {
  withDrawButtonArea,
  withDrawContentArea,
} from 'components/styles/myPage';

const WithdrawPage = () => {
  return (
    <div css={appContainer}>
      <PrevHeader text="회원탈퇴" />
      <div css={[bodyContainer, withDrawContentArea]}>
        <div>뉴플을 정말 탈퇴하시겠습니까?</div>
        <div className="text">{`탈퇴할 경우 모든 데이터가 삭제되고\n복구가 불가능합니다.`}</div>
        <Withdraw className="img" />
      </div>
      <div css={withDrawButtonArea}>
        <CancelButton />
        <div style={{ width: '12px' }} />
        <ContinueButton text="탈퇴하기" bgColor="#FF4C47" onClick={() => {}} />
      </div>
    </div>
  );
};

export default WithdrawPage;
