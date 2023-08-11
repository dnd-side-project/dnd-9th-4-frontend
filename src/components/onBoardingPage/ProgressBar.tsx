/** @jsxImportSource @emotion/react */
import { progressBg, progressInner } from 'components/styles/onBoardingPage';
import React from 'react';

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div css={progressBg}>
      <div css={progressInner(value)} />
    </div>
  );
};

export default ProgressBar;
