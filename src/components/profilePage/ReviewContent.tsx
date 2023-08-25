/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as Group } from 'assets/icon/icon_group.svg';
import { reviewContentStyle } from 'components/styles/myPage';

const ReviewContent = ({ text, count }: { text: string; count: number }) => {
  return (
    <>
      <div css={reviewContentStyle}>
        <div className="content">{text}</div>
        <div className="count">
          <Group />
          <div className="text">{count}</div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '0.5px',
          backgroundColor: '#CFCFCF',
          margin: '20px auto',
        }}
      />
    </>
  );
};

export default ReviewContent;
