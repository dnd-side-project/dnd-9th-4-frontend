/** @jsxImportSource @emotion/react */
import React from 'react';
import Profile3 from 'assets/profile/img_profile_3.svg';
import Profile4 from 'assets/profile/img_profile_4.svg';
import Profile5 from 'assets/profile/img_profile_5.svg';
import Profile6 from 'assets/profile/img_profile_6.svg';
import {
  messagePageBodyArea,
  messagePageContainer,
  messagePageHeaderArea,
} from 'components/styles/messagePageStyles';
import { ButtonNavigation } from 'components/common/commonComponents';
import { Message } from './MessagePage';
import MessageItem from 'components/messagePage/MessageItem';

const MessageListPage = () => {
  const messageList: Message[] = [
    {
      img: Profile3,
      userName: '푸바오',
      message: '안녕하세요~ 반갑습니다!',
      time: '00/00 00:00',
      isMe: false,
    },
    {
      img: Profile4,
      userName: '아메리카노',
      message: '그럼 그 때 뵙겠습니다!',
      time: '00/00 00:00',
      isMe: false,
    },
    {
      img: Profile5,
      userName: '푸바오',
      message: '안녕하세요~ 반갑습니다!',
      time: '00/00 00:00',
      isMe: false,
    },
    {
      img: Profile6,
      userName: '푸바오',
      message: '안녕하세요~ 반갑습니다!',
      time: '00/00 00:00',
      isMe: false,
    },
  ];
  return (
    <div css={messagePageContainer}>
      <div css={messagePageHeaderArea}>쪽지함</div>
      <div css={messagePageBodyArea}>
        {messageList.map((message, index) => (
          <MessageItem messageItem={message} imgSize={48} key={index} />
        ))}
      </div>
      <ButtonNavigation />
    </div>
  );
};

export default MessageListPage;
