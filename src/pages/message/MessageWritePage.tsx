/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import SendButton from 'components/messagePage/SendButton';
import { appContainer, bodyContainer } from 'components/styles/common/common';
import {
  messageWriteDividerContainer,
  messageWriteInputContainer,
  sentButtonContainer,
} from 'components/styles/messagePageStyles';
import React from 'react';

const MessageWritePage = () => {
  return (
    <div css={appContainer}>
      <PrevHeader text="쪽지 보내기" />
      <div css={sentButtonContainer}>
        <SendButton onClick={() => {}} />
      </div>
      <div css={bodyContainer}>
        <div css={messageWriteDividerContainer} />
        <textarea
          css={messageWriteInputContainer}
          placeholder="쪽지 내용을 입력해주세요."
        />
      </div>
    </div>
  );
};

export default MessageWritePage;
