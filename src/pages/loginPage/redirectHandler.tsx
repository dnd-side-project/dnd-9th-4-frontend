/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import axios from 'axios';
import config from 'config';
import { useNavigate } from 'react-router-dom';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    console.log('인가코드', code);
    console.log(typeof code);

    const codeData = {
      code: code,
    };

    axios
      .post(`${config.backendUrl}/api/v1/kakao/signup`, codeData)
      .then((response) => {
        console.log('axios 2=======>', response.data);
        navigate('/onboarding');
      })
      .catch((error) => {
        console.error('axios 2=======>', error);
      });
  }, []);

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center', // 수평 가운데 정렬
        alignItems: 'center', // 세로 가운데 정렬
        height: '100vh',
      })}
    >
      로그인 중 입니다~!
    </div>
  );
}

export default RedirectHandler;
