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

  const onSubmitLoginForm = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const restApiKeyInput = document.createElement('input');
    restApiKeyInput.type = 'hidden';
    restApiKeyInput.name = 'client_id';
    restApiKeyInput.value = config.restApiKey;
    form.appendChild(restApiKeyInput);

    const redirectUriInput = document.createElement('input');
    redirectUriInput.type = 'hidden';
    redirectUriInput.name = 'redirect_uri';
    redirectUriInput.value = config.redirectUri;
    form.appendChild(redirectUriInput);

    form.submit();
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
        <form
          action={`${config.backendUrl}/api/v1/kakao/login`}
          method="GET"
          onSubmit={onSubmitLoginForm}
        >
          <button type="submit" css={loginPageStyles.loginButton}>
            <img src={Kakao} />
            <p css={loginPageStyles.loginButtonText}>카카오 로그인</p>
          </button>
        </form>
        <p css={loginPageStyles.lookAroundText} onClick={onClickGuest}>
          게스트로 입장하기
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
