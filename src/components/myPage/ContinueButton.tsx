import { Button } from '@mui/material';
import React from 'react';

const ContinueButton = ({
  text,
  bgColor,
  onClick,
}: {
  text: string;
  bgColor: string;
  onClick: () => void;
}) => {
  const buttonStyle = {
    borderRadius: '8px',
    color: '#FFFFFF',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '150%',
    flex: 1,
    padding: '10px 12px',
  };
  return (
    <Button
      variant="contained"
      disableElevation
      onClick={onClick}
      style={buttonStyle}
    >
      {text}
    </Button>
  );
};

export default ContinueButton;
