/** @jsxImportSource @emotion/react */
import React from 'react';
import Button from '@mui/material/Button';
import { EmotionTest } from 'components/styles/emotionTest';

function MainPage() {
  return (
    <div>
      <Button variant="contained">material UI 테스트</Button>
      <div css={EmotionTest}>
        Emotion 테스트
        <div>테스트 이차</div>
      </div>
      <div>왜 글꼴이 안 바뀌지</div>
    </div>
  );
}

export default MainPage;
