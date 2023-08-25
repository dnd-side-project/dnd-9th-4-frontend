/** @jsxImportSource @emotion/react */
import React from 'react';
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
import { baseAxios } from 'api/baseAxios';
import { useQuery } from 'react-query';
import { getMessageList } from 'api/messageApi';
import EmptySchedule from 'components/myPage/EmptySchedule';
import ErrorComponent from 'components/common/ErrorComponent';

const MessageListPage = () => {
  const navigate = useNavigate();

  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { data, isLoading, isError } = useQuery('get-message-list', () =>
    getMessageList(),
  );

  const handleClick = (receiverId: number) => {
    navigate(`/message/${receiverId}`);
  };

  return (
    <div css={messagePageContainer}>
      <div css={messagePageHeaderArea}>쪽지함</div>
      <div css={messagePageBodyArea}>
        {isError ? (
          <ErrorComponent />
        ) : isLoading ? (
          <div>로딩 중...</div>
        ) : data !== undefined && data.length > 0 ? (
          data.map((message: MessageList, index: number) => (
            <MessageItem
              receiverId={message.receiverId}
              messageItem={MessageListToMessage(message)}
              profileImg={message.profileImg}
              userName={message.username}
              imgSize={48}
              key={index}
              onClick={() => handleClick(message.receiverId)}
            />
          ))
        ) : (
          <EmptySchedule text="주고받은 쪽지가 없어요." />
        )}
      </div>
      <ButtonNavigation />
    </div>
  );
};

export default MessageListPage;
