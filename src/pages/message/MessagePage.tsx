/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import {
  messagePageBodyArea,
  messagePageContainer,
} from 'components/styles/messagePageStyles';
import Profile5 from 'assets/profile/img_profile_5.svg';
import Profile6 from 'assets/profile/img_profile_6.svg';
import React from 'react';
import NextButton from 'components/common/NextButton';
import MessageItem from 'components/messagePage/MessageItem';
import { MessageHistory } from 'data/type';
import { useNavigate, useParams } from 'react-router-dom';

const MessagePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const senderId = localStorage.getItem('memberId');
  const receiverId = params.receiverId;

  const handleClick = () => {
    navigate(`/message/${receiverId}/write`);
  };

  const list: MessageHistory = {
    myId: senderId !== null ? Number(senderId) : 23,
    myUsername: '가나다',
    myProfileImg: Profile5,
    receiverId: receiverId !== undefined ? Number(receiverId) : 0,
    receiverUsername: '푸바오입니다',
    receiverProfileImg: Profile6,
    messageResponses: [
      {
        messageId: 1,
        sendDate: '00/00 00:00',
        content: '첫번째메세지입니다',
        sender: 'ME',
      },
      {
        messageId: 2,
        sendDate: '00/00 00:00',
        content: '두번째메세지입니다',
        sender: 'RECEIVER',
      },
      {
        messageId: 3,
        sendDate: '00/00 00:00',
        content: '세번째메세지입니다',
        sender: 'ME',
      },
      {
        messageId: 4,
        sendDate: '00/00 00:00',
        content: '네번째메세지입니다',
        sender: 'RECEIVER',
      },
    ],
  };
  return (
    <div css={messagePageContainer}>
      <div style={{ margin: '0 16px 45px 16px' }}>
        <PrevHeader text="쪽지" />
      </div>
      <div css={messagePageBodyArea}>
        {list.messageResponses.map((message, index) => (
          <MessageItem
            messageItem={message}
            profileImg={
              message.sender === 'ME'
                ? list.myProfileImg
                : list.receiverProfileImg
            }
            userName={
              message.sender === 'ME' ? list.myUsername : list.receiverUsername
            }
            imgSize={52}
            key={index}
          />
        ))}
      </div>
      <div style={{ margin: '0 16px' }}>
        <NextButton
          text="쪽지 보내기"
          isEnabled={true}
          onEnabledClick={() => {
            handleClick();
          }}
        />
      </div>
    </div>
  );
};

export default MessagePage;
