/** @jsxImportSource @emotion/react */
import { prevHeaderContainer } from 'components/styles/common/common';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowLeft from './ArrowLeft';

const PrevHeader = ({ text }: { text: string }) => {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate(-1);
  };

  return (
    <div css={prevHeaderContainer}>
      <ArrowLeft onClick={handleArrowClick} />
      <div>{text}</div>
    </div>
  );
};

export default PrevHeader;
