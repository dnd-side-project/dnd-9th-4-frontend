import React from 'react';
import ContinueButton from './ContinueButton';

const CancelButton = ({ onClick }: { onClick: () => void }) => {
  return <ContinueButton text="취소" bgColor="#202123" onClick={onClick} />;
};

export default CancelButton;
