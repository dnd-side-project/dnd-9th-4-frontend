/** @jsxImportSource @emotion/react */
import {
  mbtiSectionBoxArea,
  mbtiSectionContainer,
} from 'components/styles/onBoardingPage';
import React from 'react';

const MbtiSection = ({
  title,
  item1,
  item2,
  onClick,
  clickedItem,
}: {
  title: string;
  item1: string;
  item2: string;
  onClick: (item: string) => void;
  clickedItem: string;
}) => {
  return (
    <div css={mbtiSectionContainer}>
      <div>{title}</div>
      <div className="box-area">
        <div
          css={mbtiSectionBoxArea(clickedItem == item1)}
          onClick={() => onClick(item1)}
        >
          {item1}
        </div>
        <div style={{ width: '12px' }} />
        <div
          css={mbtiSectionBoxArea(clickedItem == item2)}
          onClick={() => onClick(item2)}
        >
          {item2}
        </div>
      </div>
    </div>
  );
};

export default MbtiSection;
