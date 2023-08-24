/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import axios from 'axios';
import config from 'config';
import { useNavigate } from 'react-router-dom';
import { getJwtToken, getKakaoId, getMemberId } from 'api/localStorage';

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

        const storeKakaoId = getKakaoId();
        const storedMemberId = getMemberId();
        const storedJwtToken = getJwtToken();

        // memberId
        const memberId = response.data['data']['memberId'];
        // JWT Token
        const jwtToken = response.headers['authorization'].substring(7);

        // kakaoId
        const kakaoId = response.data['data']['kakaoId'];

        // 이미 storedJwtToken가 있고 storedMemberId가 memberId랑, storeKakaoId가 kakaoId랑 같으면 온보딩 이동X
        if (
          storedJwtToken &&
          Number(storedMemberId) === memberId &&
          Number(storeKakaoId) === kakaoId
        ) {
          console.log('이미 가입된 회원');

          // token 값이 바뀔 수 있으니깐 다시 새로 저장
          localStorage.setItem('jwtToken', jwtToken);

          navigate('/');
        } else {
          console.log('새로운 회원');

          localStorage.setItem('memberId', memberId);
          localStorage.setItem('kakaoId', kakaoId);

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
