/** @jsxImportSource @emotion/react */
import {
  messageListItemArea,
  messageListItemBodyArea,
  messageListItemTimeArea,
} from 'components/styles/messagePageStyles';
import { Message } from 'data/type';
import React from 'react';

const MessageItem = ({
  messageItem,
  profileImg,
  userName,
  imgSize,
  onClick,
}: {
  messageItem: Message;
  profileImg: string;
  userName: string;
  imgSize: number;
  onClick?: () => void;
}) => {
  return (
    <div css={messageListItemArea} onClick={onClick}>
      <img src={profileImg} style={{ width: imgSize, height: imgSize }} />
      <div css={messageListItemBodyArea}>
        <div className="user-name">
          {messageItem.sender === 'ME' ? `${userName}(나)` : userName}
        </div>
        <div>{messageItem.content}</div>
      </div>
      <div css={messageListItemTimeArea}>{messageItem.sendDate}</div>
    </div>
  );
};

export default MessageItem;
