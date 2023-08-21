import { Button } from '@mui/material';
import React from 'react';

const SendButton = ({ onClick }: { onClick: () => void }) => {
  const buttonStyle = {
    borderRadius: '999px',
    color: '#FFFFFF',
    backgroundColor: '#0074FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '150%',
    width: '72px',
    height: '32px',
    padding: '0',
  };
  return (
    <Button
      variant="contained"
      disableElevation
      onClick={onClick}
      style={buttonStyle}
    >
      보내기
    </Button>
  );
};

export default SendButton;
