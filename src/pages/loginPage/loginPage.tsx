/** @jsxImportSource @emotion/react */
import React from 'react';
import { loginPageStyles } from 'components/styles/loginPageStyles';
import config from 'config';
import LoginLogo from 'assets/newPleLogo/LoginLogo.svg';
import LoginLogoTitle from 'assets/newPleLogo/LoginLogoTitle.svg';
import Kakao from 'assets/Kakao.svg';
import { css } from '@emotion/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const restApiKey = config.restApiKey;
  const redirectUri = config.redirectUri;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`;

  const onClickLoginButton = () => {
    console.log('카카오톡으로 로그인 클릭');
    window.location.href = kakaoURL;
  };

  // 게스트 입장하기
  const onClickGuest = () => {
    axios
      .post(`${config.backendUrl}/api/v1/guest/signup`)
      .then((response) => {
        console.log('응답 데이터:', response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('에러:', error);
      });
  };

  return (
    <div css={loginPageStyles.container}>
      <div css={loginPageStyles.flex1Container} />
      <div css={loginPageStyles.flex1Container}>
        <p css={loginPageStyles.subTitle}>
          나와 맞는 운동메이트와 만나
          <br /> 함께 운동해요!
        </p>
      </div>
      <div css={loginPageStyles.logoContainer}>
        <img src={LoginLogo} css={css({ width: '220px' })} />
        <img
          src={LoginLogoTitle}
          css={css({ width: '142px', marginTop: '71px' })}
        />
      </div>
      <div css={loginPageStyles.loginButtonContainer}>
        <div css={loginPageStyles.loginButton} onClick={onClickLoginButton}>
          <img src={Kakao} />
          <p css={loginPageStyles.loginButtonText}>카카오 로그인</p>
        </div>
        <p css={loginPageStyles.lookAroundText} onClick={onClickGuest}>
          게스트로 입장하기
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
