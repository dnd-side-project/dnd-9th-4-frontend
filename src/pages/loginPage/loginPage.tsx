/** @jsxImportSource @emotion/react */
import React from 'react';
import { loginPageStyles } from 'components/styles/loginPageStyles';
import config from 'config';
import Kakao from 'assets/Kakao.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginCarousel } from 'components/loginPage/loginPage';

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
      <div css={loginPageStyles.carouselContainer}>
        <LoginCarousel />
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
