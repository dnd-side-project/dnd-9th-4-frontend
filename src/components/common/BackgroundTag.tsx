import React from 'react';
import Chip from '@mui/material/Chip';

const BackgroundTag = ({ text, color }: { text: string; color: string }) => {
  const chipStyle = {
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '150%',
    padding: '7px 16px',
    borderRadius: '19.35px',
    marginRight: '13.5px',
    marginBottom: '12px',
    color: `rgba(${color}, 1.0)`,
    backgroundColor: `rgba(${color}, 0.1)`,
  };

  return <Chip label={text} clickable={false} sx={chipStyle} />;
};

export default BackgroundTag;
