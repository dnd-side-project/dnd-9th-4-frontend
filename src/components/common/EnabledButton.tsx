import React from 'react';
import Button from '@mui/material/Button';

export type ButtonText = {
  text: string;
};

const enabledButton = {
  backgroundColor: '#0066FF',
  color: '#FFFFFF',
  fontSize: '18px',
  height: '100%',
  borderRadius: '6px',
  fontFamily: 'Pretendard',
};

const EnabledButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <Button
      variant="contained"
      fullWidth
      disableElevation
      style={enabledButton}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default EnabledButton;
