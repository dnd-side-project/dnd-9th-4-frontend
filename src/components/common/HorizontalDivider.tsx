import React from 'react';

const HorizontalDivider = ({
  h,
  marginSize,
}: {
  h: number;
  marginSize: string;
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: `${h}px`,
        backgroundColor: '#DCDCDC',
        margin: marginSize,
      }}
    />
  );
};

export default HorizontalDivider;
