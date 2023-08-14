/** @jsxImportSource @emotion/react */
import React from 'react';
import { loginPageStyles } from 'components/styles/loginPageStyles';
import config from 'config';
import LoginLogo from 'assets/newPleLogo/LoginLogo.svg';
import LoginLogoTitle from 'assets/newPleLogo/LoginLogoTitle.svg';
import Kakao from 'assets/Kakao.svg';
import { css } from '@emotion/react';

function LoginPage() {
  const restApiKey = config.restApiKey;
  const redirectUri = config.redirectUri;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`;

  const onClickLoginButton = () => {
    console.log('카카오톡으로 로그인 클릭');
    window.location.href = kakaoURL;
  };

  const onClickLookAroundText = () => {
    console.log('둘러보기 클릭');
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
        <p css={loginPageStyles.lookAroundText} onClick={onClickLookAroundText}>
          둘러보기
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
