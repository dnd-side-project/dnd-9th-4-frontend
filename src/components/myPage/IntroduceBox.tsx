/** @jsxImportSource @emotion/react */
import {
  introduceBoxArea,
  introduceBoxTextTitle,
} from 'components/styles/myPage';
import React from 'react';

const IntroduceBox = ({ content }: { content: string | null }) => {
  return (
    <div css={introduceBoxArea}>
      <div css={introduceBoxTextTitle}>소개글</div>
      <div>{content}</div>
    </div>
  );
};

export default IntroduceBox;
