/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as Sad } from 'assets/myPageIcon/img_withdraw.svg';
import { emptyScheduleStyle } from 'components/styles/myPage';

const ErrorComponent = () => {
  return (
    <div css={emptyScheduleStyle}>
      <Sad />
      <div className="text">{`에러가 발생하였습니다.\n잠시 후에 다시 시도해주세요.`}</div>
    </div>
  );
};

export default ErrorComponent;
