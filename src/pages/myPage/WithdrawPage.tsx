/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import { appContainer, bodyContainer } from 'components/styles/common/common';
import { ReactComponent as Withdraw } from 'assets/myPageIcon/img_withdraw.svg';
import React from 'react';
import CancelButton from 'components/myPage/CancelButton';
import ContinueButton from 'components/myPage/ContinueButton';
import {
  withDrawButtonArea,
  withDrawContentArea,
} from 'components/styles/myPage';
import { baseAxios } from 'api/baseAxios';
import { useMutation } from 'react-query';
import { deleteMember } from 'api/memberApi';
import { useNavigate } from 'react-router-dom';
import { getJwtToken, getMemberId } from 'api/localStorage';

const WithdrawPage = () => {
  const navigate = useNavigate();
  const memberId = getMemberId();

  baseAxios.interceptors.request.use(function (config) {
    const token = getJwtToken();
    console.log('탈퇴 시도 토큰 ', token);
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { mutate } = useMutation(() => deleteMember(Number(memberId)), {
    onSuccess: (data) => {
      console.log('DELETE MEMBER SUCCESS : ', data);
    },
    onError: (error) => console.log(error),
  });

  const handleWithDrawClick = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('memberId');
    localStorage.removeItem('kakaoId');
    mutate();
  };

  return (
    <div css={appContainer}>
      <PrevHeader text="회원탈퇴" />
      <div css={[bodyContainer, withDrawContentArea]}>
        <div>뉴플을 정말 탈퇴하시겠습니까?</div>
        <div className="text">{`탈퇴할 경우 모든 데이터가 삭제되고\n복구가 불가능합니다.`}</div>
        <Withdraw className="img" />
      </div>
      <div css={withDrawButtonArea}>
        <CancelButton
          onClick={() => {
            navigate(-1);
          }}
        />
        <div style={{ width: '12px' }} />
        <ContinueButton
          text="탈퇴하기"
          bgColor="#FF4C47"
          onClick={() => {
            handleWithDrawClick();
            navigate('/login');
          }}
        />
      </div>
    </div>
  );
};

export default WithdrawPage;
