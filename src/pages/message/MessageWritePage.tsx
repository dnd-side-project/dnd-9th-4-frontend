/** @jsxImportSource @emotion/react */
import { baseAxios } from 'api/baseAxios';
import { getMemberId } from 'api/localStorage';
import { sendMessage } from 'api/messageApi';
import PrevHeader from 'components/common/PrevHeader';
import SendButton from 'components/messagePage/SendButton';
import { appContainer, bodyContainer } from 'components/styles/common/common';
import {
  messageWriteDividerContainer,
  messageWriteInputContainer,
  sentButtonContainer,
} from 'components/styles/messagePageStyles';
import React, { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

const MessageWritePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const receiverId = Number(params.receiverId);
  const senderId = Number(getMemberId());

  const [input, setInput] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { mutate } = useMutation(
    () => sendMessage(input, senderId, receiverId),
    {
      onSuccess: (data) => {
        console.log('POST MESSAGE SUCCESS : ', data);
        navigate(-1);
      },
      onError: (error) => console.log(error),
    },
  );

  return (
    <div css={appContainer}>
      <PrevHeader text="쪽지 보내기" />
      <div css={sentButtonContainer}>
        <SendButton
          onClick={() => {
            mutate();
          }}
        />
      </div>
      <div css={bodyContainer}>
        <div css={messageWriteDividerContainer} />
        <textarea
          css={messageWriteInputContainer}
          placeholder="쪽지 내용을 입력해주세요."
          value={input}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default MessageWritePage;
