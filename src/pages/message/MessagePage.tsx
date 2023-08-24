/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import {
  messagePageBodyArea,
  messagePageContainer,
} from 'components/styles/messagePageStyles';
import React, { useEffect, useState } from 'react';
import NextButton from 'components/common/NextButton';
import MessageItem from 'components/messagePage/MessageItem';
import { MessageHistory } from 'data/type';
import { useNavigate, useParams } from 'react-router-dom';
import { baseAxios } from 'api/baseAxios';
import { useMutation } from 'react-query';
import { postConversation } from 'api/messageApi';
import { defaultMessageHistory } from 'data/defaultValue';

const MessagePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const receiverId = Number(params.receiverId);

  const [messageHistory, setMessageHistory] = useState<MessageHistory>({
    ...defaultMessageHistory,
  });

  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { mutate } = useMutation(() => postConversation(receiverId), {
    onSuccess: (data: MessageHistory) => {
      setMessageHistory(data);
      console.log('POST CONVERSATION SUCCESS : ', data);
    },
    onError: (error) => console.log(error),
  });

  const handleClick = () => {
    navigate(`/message/${receiverId}/write`);
  };

  useEffect(() => {
    mutate();
  }, []);

  return (
    <div css={messagePageContainer}>
      <div style={{ margin: '0 16px 45px 16px' }}>
        <PrevHeader text="쪽지" />
      </div>
      <div css={messagePageBodyArea}>
        {messageHistory.messageResponses.map((message, index) => (
          <MessageItem
            receiverId={receiverId}
            messageItem={message}
            profileImg={
              message.sender === 'ME'
                ? messageHistory.myProfileImg
                : messageHistory.receiverProfileImg
            }
            userName={
              message.sender === 'ME'
                ? messageHistory.myUsername
                : messageHistory.receiverUsername
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
