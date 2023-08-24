/** @jsxImportSource @emotion/react */
import {
  messageListItemArea,
  messageListItemBodyArea,
  messageListItemTimeArea,
} from 'components/styles/messagePageStyles';
import { Message } from 'data/type';
import { imageList } from 'data/variable';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessageItem = ({
  receiverId,
  messageItem,
  profileImg,
  userName,
  imgSize,
  onClick,
}: {
  receiverId: number;
  messageItem: Message;
  profileImg: string;
  userName: string;
  imgSize: number;
  onClick?: () => void;
}) => {
  const navigate = useNavigate();
  const dateFormat = (date: string) => {
    const target = new Date(date);
    // const year = target.getFullYear().toString().slice(-2);
    const month = ('0' + (target.getMonth() + 1)).slice(-2);
    const day = ('0' + (target.getDate() + 1)).slice(-2);
    const hour = ('0' + target.getHours()).slice(-2);
    const min = ('0' + target.getMinutes()).slice(-2);

    return month + '/' + day + ' ' + hour + ':' + min;
  };
  return (
    <div css={messageListItemArea} onClick={onClick}>
      <img
        src={imageList[Number(profileImg)]}
        style={{ width: imgSize, height: imgSize }}
        onClick={() => {
          navigate(`/profile/${receiverId}`);
        }}
      />
      <div css={messageListItemBodyArea}>
        <div className="user-name">
          {messageItem.sender === 'ME' ? `${userName}(나)` : userName}
        </div>
        <div>{messageItem.content}</div>
      </div>
      <div css={messageListItemTimeArea}>
        {dateFormat(messageItem.sentDate)}
      </div>
    </div>
  );
};

export default MessageItem;
