/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const Label = ({ text }: { text: string }) => {
  const labelStyle = css({
    padding: '4px 8px',
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: '#F9FAFC',
    color: '#959DB1',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '-0.247px',
    width: 'auto',
  });
  return <div css={labelStyle}>{text}</div>;
};

export default Label;
