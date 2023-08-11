import React from 'react';
import Button from '@mui/material/Button';

export type ButtonText = {
  text: string;
};

const disabledButton = {
  backgroundColor: '#D6D6D6',
  color: '#FFFFFF',
  fontSize: '18px',
  height: '100%',
  borderRadius: '6px',
  fontFamily: 'Pretendard',
};

const DisabledButton = ({ text }: ButtonText) => {
  return (
    <Button
      variant="contained"
      disabled
      disableElevation
      fullWidth
      style={disabledButton}
    >
      {text}
    </Button>
  );
};

export default DisabledButton;
