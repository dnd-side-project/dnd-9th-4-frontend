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

    const backendUrl = `${config.backendUrl}/api/kakao/login`;

    const codeData = {
      code: code,
    };

    axios
      .get(backendUrl, { params: codeData })
      .then((response) => {
        console.log(response.data); // 서버에서 반환된 데이터
        navigate('/onboarding');
      })
      .catch((error) => {
        console.error(error);
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
