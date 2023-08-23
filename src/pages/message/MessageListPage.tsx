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
import MessageItem from 'components/messagePage/MessageItem';
import { MessageList } from 'data/type';
import { useNavigate } from 'react-router-dom';
import { MessageListToMessage } from 'data/typeConverter';

const MessageListPage = () => {
  const navigate = useNavigate();
  const messageList: MessageList[] = [
    {
      messageId: 1,
      receiverId: 20,
      username: '푸바오',
      profileImg: Profile3,
      sendDate: '00/00 00:00',
      lastMessage: '안녕하세요~',
    },
    {
      messageId: 7,
      receiverId: 25,
      username: '메롱',
      profileImg: Profile4,
      sendDate: '00/00 00:00',
      lastMessage: '넵 알겠습니다',
    },
    {
      messageId: 14,
      receiverId: 17,
      username: '가나다라마바사',
      profileImg: Profile6,
      sendDate: '00/00 00:00',
      lastMessage: '언제가 좋을까요?',
    },
    {
      messageId: 35,
      receiverId: 2,
      username: '누구게',
      profileImg: Profile5,
      sendDate: '00/00 00:00',
      lastMessage: '그 날은 일정이 있어서요ㅜ',
    },
  ];

  const handleClick = (receiverId: number) => {
    navigate(`/message/${receiverId}`);
  };

  return (
    <div css={messagePageContainer}>
      <div css={messagePageHeaderArea}>쪽지함</div>
      <div css={messagePageBodyArea}>
        {messageList.map((message, index) => (
          <MessageItem
            messageItem={MessageListToMessage(message)}
            profileImg={message.profileImg}
            userName={message.username}
            imgSize={48}
            key={index}
            onClick={() => handleClick(message.receiverId)}
          />
        ))}
      </div>
      <ButtonNavigation />
    </div>
  );
};

export default MessageListPage;
