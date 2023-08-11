/** @jsxImportSource @emotion/react */
import { nextButtonContainer } from 'components/styles/common/common';
import React from 'react';
import DisabledButton from './DisabledButton';
import EnabledButton from './EnabledButton';

interface NextButtonProps {
  isEnabled: boolean;
  onEnabledClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({
  isEnabled,
  onEnabledClick,
}) => {
  return (
    <div css={nextButtonContainer}>
      {isEnabled ? (
        <EnabledButton text="다음" onClick={onEnabledClick} />
      ) : (
        <DisabledButton text="다음" />
      )}
    </div>
  );
};

export default NextButton;
