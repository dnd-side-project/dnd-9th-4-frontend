/** @jsxImportSource @emotion/react */
import { ButtonBase } from '@mui/material';
import { selectRectangle } from 'components/styles/onBoardingPage';
import React, { useState } from 'react';

const SelectRectangle = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부 상태 추가

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  return (
    <ButtonBase css={selectRectangle} focusRipple onClick={handleClick}>
      {text}
    </ButtonBase>
  );
};

export default SelectRectangle;
