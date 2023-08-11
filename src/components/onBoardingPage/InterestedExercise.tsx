/** @jsxImportSource @emotion/react */
import UnselectedTag from 'components/common/UnselectedTag';
import { stackColumn, stackRow } from 'components/styles/common/common';
import React from 'react';

const InterestedExerciseArea = () => {
  return (
    <div css={stackColumn}>
      <div css={stackRow}>
        <UnselectedTag text="헬스" />
        <UnselectedTag text="러닝" />
        <UnselectedTag text="수영" />
        <UnselectedTag text="등산" />
      </div>
      <div css={stackRow}>
        <UnselectedTag text="싸이클" />
        <UnselectedTag text="기타" />
      </div>
    </div>
  );
};

export default InterestedExerciseArea;
