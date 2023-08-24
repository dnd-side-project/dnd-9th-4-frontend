/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as More } from 'assets/icon/icon_more_horiz.svg';
import { ReactComponent as ArrowLeftWhite } from 'assets/icon/icon_arrow_left_white.svg';
import { darkPrevHeader } from 'components/styles/common/profilePageStyles';
import { useNavigate } from 'react-router-dom';

const DarkPrevHeader = ({ text }: { text: string }) => {
  const navigate = useNavigate();
  return (
    <div css={darkPrevHeader}>
      <ArrowLeftWhite onClick={() => navigate(-1)} />
      <div>{text}</div>
      <More />
    </div>
  );
};

export default DarkPrevHeader;
