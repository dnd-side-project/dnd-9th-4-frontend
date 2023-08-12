/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as Left } from 'assets/icon/icon_arrow_left.svg';
import { absoluteLeft } from 'components/styles/common/common';

const ArrowLeft = ({ onClick }: { onClick: () => void }) => {
  return <Left css={absoluteLeft} onClick={onClick} />;
};

export default ArrowLeft;
