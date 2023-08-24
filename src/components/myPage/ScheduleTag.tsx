/** @jsxImportSource @emotion/react */

import { scheduleTag } from 'components/styles/myPage';
import { day } from 'data/variable';
import React from 'react';

const ScheduleTag = ({
  state,
  date,
}: {
  state: 'RESERVED' | 'COMPLETED';
  date: string;
}) => {
  const calDate = () => {
    const today = new Date();
    const target = new Date(date);
    console.log('---TARGET : ', target, '---TODAY : ', today);

    const diffMSec = target.getTime() - today.getTime();
    const diffDate = diffMSec / (24 * 60 * 60 * 1000);
    console.log('---diffDate : ', diffDate);

    return Math.ceil(diffDate);
  };

  const DateToString = (date: string) => {
    const target = new Date(date);
    const format =
      target.getMonth() +
      1 +
      '월' +
      target.getDate() +
      '일(' +
      day[target.getDay()] +
      ')';

    return format;
  };
  return (
    <div css={scheduleTag(state)}>
      <div className="tag">
        {state === 'RESERVED' ? 'D-' + calDate() : '운동완료'}
      </div>
      <div>{DateToString(date)}</div>
    </div>
  );
};

export default ScheduleTag;
