/** @jsxImportSource @emotion/react */
import { nextButtonContainer } from 'components/styles/common/common';
import React from 'react';
import DisabledButton from './DisabledButton';
import EnabledButton from './EnabledButton';

interface NextButtonProps {
  text: string;
  isEnabled: boolean;
  onEnabledClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({
  text,
  isEnabled,
  onEnabledClick,
}) => {
  return (
    <div css={nextButtonContainer}>
      {isEnabled ? (
        <EnabledButton text={text} onClick={onEnabledClick} />
      ) : (
        <DisabledButton text={text} />
      )}
    </div>
  );
};

export default NextButton;
