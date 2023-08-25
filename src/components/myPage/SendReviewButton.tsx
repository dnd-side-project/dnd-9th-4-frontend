/** @jsxImportSource @emotion/react */
import { sendRevieBtnStyle } from 'components/styles/myPage';
import React from 'react';

const SendReviewButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div css={sendRevieBtnStyle}>
      <div className="send-btn" onClick={onClick}>
        {text}
      </div>
    </div>
  );
};

export default SendReviewButton;
