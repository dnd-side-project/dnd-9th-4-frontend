import React from 'react';
import Chip from '@mui/material/Chip';

const UnselectedTag = ({
  text,
  width,
  onClick,
  isSelected,
}: {
  text: string;
  width?: number;
  onClick: () => void;
  isSelected: boolean;
}) => {
  const handleClick = () => {
    onClick();
  };

  const chipStyle = {
    fontFamily: 'Pretendard',
    overflow: 'visible',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '150%',
    padding: '7px 16px',
    border: '1px solid #959DB1',
    borderRadius: '19.35px',
    color: isSelected ? '#2A64F6' : '#959DB1',
    borderColor: isSelected ? '#2A64F6' : '#959DB1',
    backgroundColor: isSelected ? '#ECF6FE' : '#FFFFFF',
    width: width !== undefined ? `${width}px` : 'auto',
    marginRight: '12px',
    marginBottom: '12px',
    '&.MuiChip-root': {
      // Disabling Ripple effect
      '&:focus, &:hover': {
        backgroundColor: isSelected ? '#ECF6FE' : '#FFFFFF',
      },
      '&:active': {
        backgroundColor: isSelected ? '#ECF6FE' : '#FFFFFF',
      },
    },

    '& .MuiChip-label': {
      overflow: 'visible',
      textOverflow: 'unset',
      textAlign: 'center',
      padding: 0,
    },
  };

  return (
    <Chip
      label={text}
      variant="outlined"
      onClick={handleClick}
      sx={chipStyle}
    />
  );
};

export default UnselectedTag;
