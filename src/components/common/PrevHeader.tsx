/** @jsxImportSource @emotion/react */
import { prevHeaderContainer } from 'components/styles/common/common';
import React from 'react';
import ArrowLeft from './ArrowLeft';

const PrevHeader = ({ text }: { text: string }) => {
  return (
    <div css={prevHeaderContainer}>
      <ArrowLeft />
      <div>{text}</div>
    </div>
  );
};

export default PrevHeader;
