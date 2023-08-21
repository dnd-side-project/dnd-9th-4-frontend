/** @jsxImportSource @emotion/react */
import { checkCircle } from 'components/styles/common/common';
import { checkListStyles } from 'components/styles/common/profilePageStyles';
import { ReactComponent as Check } from 'assets/icon/icon_check.svg';
import React from 'react';

const CheckList = ({
  text,
  onClick,
  isClicked,
}: {
  text: string;
  onClick: () => void;
  isClicked: boolean;
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div css={checkListStyles} onClick={handleClick}>
      <div css={checkCircle({ size: 21.3, isChecked: isClicked })}>
        <Check />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default CheckList;
