/** @jsxImportSource @emotion/react */
import { baseAxios } from 'api/baseAxios';
import { postLogout } from 'api/memberApi';
import { logoutModalArea } from 'components/styles/myPage';
import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import CancelButton from './CancelButton';
import ContinueButton from './ContinueButton';

const LogoutModalArea = ({ clickClose }: { clickClose: () => void }) => {
  const navigate = useNavigate();
  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { mutate } = useMutation(() => postLogout(), {
    onSuccess: (data) => {
      console.log('POST LOGOUT SUCCESS : ', data);
    },
    onError: (error) => console.log(error),
  });

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('memberId');
    localStorage.removeItem('kakaoId');
    mutate();
  };

  return (
    <div css={logoutModalArea}>
      <div className="text">로그아웃 하시겠습니까?</div>
      <div className="buttons">
        <CancelButton onClick={clickClose} />
        <div style={{ width: '8px' }} />
        <ContinueButton
          text="로그아웃"
          bgColor="#0074FF"
          onClick={() => {
            handleLogout();
            navigate('/login');
          }}
        />
      </div>
    </div>
  );
};

export default LogoutModalArea;
