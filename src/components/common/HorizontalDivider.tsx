import React from 'react';

const HorizontalDivider = ({
  h,
  marginSize,
  bg,
}: {
  h: number;
  marginSize: string;
  bg?: string;
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: `${h}px`,
        backgroundColor: bg !== undefined ? bg : '#DCDCDC',
        margin: marginSize,
      }}
    />
  );
};

export default HorizontalDivider;
