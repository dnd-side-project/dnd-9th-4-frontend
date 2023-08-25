/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { ReactComponent as Success } from 'assets/myPageIcon/img_review_success.svg';
import { appContainer } from 'components/styles/common/common';
import { useNavigate } from 'react-router-dom';

const ReviewSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate(-1), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div css={appContainer}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        <Success />
        <div>소중한 후기가 등록됐어요!</div>
      </div>
    </div>
  );
};

export default ReviewSuccess;
