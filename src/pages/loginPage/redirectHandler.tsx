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

    const codeData = {
      code: code,
    };

    axios
      .post(`${config.backendUrl}/api/v1/kakao/signup`, codeData)
      .then((response) => {
        console.log('카카오 로그인 성공 ======>', response);

        const storedMemberId = localStorage.getItem('memberId');
        const storedJwtToken = localStorage.getItem('jwtToken');

        console.log('localStorage -> memberId', storedMemberId);
        console.log('localStorage -> jwtToken', storedJwtToken);

        // memberId
        const memberId = response.data['data']['memberId'];
        console.log('post -> memberId', memberId);

        // 이미 storedJwtToken가 있고 storedMemberId가 memberId랑 같으면 온보딩 이동X
        if (storedJwtToken && storedMemberId === memberId) {
          console.log('이미 가입된 회원');
          navigate('/');
        } else {
          console.log('새로운 회원');

          localStorage.setItem('memberId', memberId);

          // JWT Token
          const jwtToken = response.headers['authorization'].substring(7);
          localStorage.setItem('jwtToken', jwtToken);

          navigate('/onboarding');
        }
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
