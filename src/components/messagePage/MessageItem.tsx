/** @jsxImportSource @emotion/react */
import {
  messageListItemArea,
  messageListItemBodyArea,
  messageListItemTimeArea,
} from 'components/styles/messagePageStyles';
import { Message } from 'pages/message/MessagePage';
import React from 'react';

const MessageItem = ({
  messageItem,
  imgSize,
}: {
  messageItem: Message;
  imgSize: number;
}) => {
  return (
    <div css={messageListItemArea}>
      <img src={messageItem.img} style={{ width: imgSize, height: imgSize }} />
      <div css={messageListItemBodyArea}>
        <div className="user-name">
          {messageItem.isMe
            ? `${messageItem.userName}(나)`
            : messageItem.userName}
        </div>
        <div>{messageItem.message}</div>
      </div>
      <div css={messageListItemTimeArea}>{messageItem.time}</div>
    </div>
  );
};

export default MessageItem;
