/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import axios from 'axios';
//import config from 'config';
import { useNavigate } from 'react-router-dom';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    console.log('인가코드', code);

    //const backendUrl = `${config.backendUrl}/login`;
    const backendUrl = 'http://3.37.141.165:8000/api/v1/kakao/signup';

    const codeData = {
      code: code,
    };

    axios
      .post(backendUrl, codeData)
      .then((response) => {
        console.log('인가코드 전송 성공');
        console.log(response.data);
        // 토큰 받아서 로그인 세션 유지
        // 온보딩 페이지로 이동
        navigate('/onboarding');
      })
      .catch((error) => {
        console.error('인가코드 전송 실패');
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
