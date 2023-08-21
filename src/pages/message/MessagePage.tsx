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

export type Message = {
  userName: string;
  img: string;
  message: string;
  time: string;
  isMe: boolean;
};

export type UserMessage = {
  title: string;
  messages: Message[];
};

const MessagePage = () => {
  const list: UserMessage = {
    title: '같이 헬스 하실 분!',
    messages: [
      {
        userName: '아메리카노',
        img: Profile5,
        message: '안녕하세요 ~! 푸바오님, 뉴플메이트로 매칭되어서 반갑습니다!',
        time: '00/00 00:00',
        isMe: false,
      },
      {
        userName: '푸바오',
        img: Profile6,
        message: '안녕하세요~',
        time: '00/00 00:00',
        isMe: true,
      },
      {
        userName: '아메리카노',
        img: Profile5,
        message: '그럼 그 때 뵙겠습니다!',
        time: '00/00 00:00',
        isMe: false,
      },
      {
        userName: '푸바오',
        img: Profile6,
        message: '좋아요! 그때 봬요~~',
        time: '00/00 00:00',
        isMe: true,
      },
    ],
  };
  return (
    <div css={messagePageContainer}>
      <div style={{ margin: '0 16px 45px 16px' }}>
        <PrevHeader text={list.title} />
      </div>
      <div css={messagePageBodyArea}>
        {list.messages.map((message, index) => (
          <MessageItem messageItem={message} imgSize={52} key={index} />
        ))}
      </div>
      <div style={{ margin: '0 16px' }}>
        <NextButton
          text="쪽지 보내기"
          isEnabled={true}
          onEnabledClick={() => {}}
        />
      </div>
    </div>
  );
};

export default MessagePage;
