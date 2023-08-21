/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import axios from 'axios';
import config from 'config';
import { useNavigate } from 'react-router-dom';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('리다이렉트됨');
    const code = new URL(window.location.href).searchParams.get('code');

    console.log('인가코드', code);

    const codeData = {
      code: code,
    };

    axios
      .post(`${config.backendUrl}/api/v1/kakao/signup`, codeData)
      .then((response) => {
        console.log('카카오 로그인 성공 ======>', response.data);
        navigate('/onboarding');
      })
      .catch((error) => {
        console.error('카카오 로그인 실패 ======>', error);
      });
  }, []);

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      })}
    >
      로그인 중 입니다~!
    </div>
  );
}

export default RedirectHandler;
