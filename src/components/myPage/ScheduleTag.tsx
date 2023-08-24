/** @jsxImportSource @emotion/react */

import { scheduleTag } from 'components/styles/myPage';
import React from 'react';

const ScheduleTag = ({
  state,
  tag,
  date,
}: {
  state: 'RESERVED' | 'COMPLETED';
  tag: string;
  date: string;
}) => {
  return (
    <div css={scheduleTag(state)}>
      <div className="tag">{tag}</div>
      <div>{date}</div>
    </div>
  );
};

export default ScheduleTag;
