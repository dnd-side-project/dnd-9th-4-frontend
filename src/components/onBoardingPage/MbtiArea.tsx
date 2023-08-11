/** @jsxImportSource @emotion/react */
import UnselectedTag from 'components/common/UnselectedTag';
import { stackColumn, stackRow } from 'components/styles/common/common';
import { mbtiArea } from 'components/styles/onBoardingPage';
import React from 'react';

const MbtiArea = () => {
  return (
    <div css={[stackColumn, mbtiArea]}>
      <div css={stackRow}>
        <UnselectedTag text="ISTJ" width={64} />
        <UnselectedTag text="ISFJ" width={64} />
        <UnselectedTag text="INFJ" width={64} />
        <UnselectedTag text="INTJ" width={64} />
      </div>
      <div css={stackRow}>
        <UnselectedTag text="ISTP" width={64} />
        <UnselectedTag text="ISFP" width={64} />
        <UnselectedTag text="INFP" width={64} />
        <UnselectedTag text="INTP" width={64} />
      </div>
      <div css={stackRow}>
        <UnselectedTag text="ESTP" width={64} />
        <UnselectedTag text="ESFP" width={64} />
        <UnselectedTag text="ENFP" width={64} />
        <UnselectedTag text="ENTP" width={64} />
      </div>
      <div css={stackRow}>
        <UnselectedTag text="ESTJ" width={64} />
        <UnselectedTag text="ESFJ" width={64} />
        <UnselectedTag text="ENFJ" width={64} />
        <UnselectedTag text="ENTJ" width={64} />
      </div>
    </div>
  );
};

export default MbtiArea;
