/** @jsxImportSource @emotion/react */
import React from 'react';
import { loginPageStyles } from 'components/styles/loginPageStyles';

function LoginPage() {
  const onClickLoginButton = () => {
    console.log('카카오톡으로 로그인 클릭');
  };
  const onClickLookAroundText = () => {
    console.log('둘러보기 클릭');
  };
  return (
    <div css={loginPageStyles.container}>
      <div css={loginPageStyles.flex2Container} />
      <div css={loginPageStyles.flex2Container}>
        <p css={loginPageStyles.title}>NewPle</p>
        <p css={loginPageStyles.subTitle}>
          나와 맞는 운동메이트와 만나
          <br /> 함께 운동해요!
        </p>
      </div>
      <div css={loginPageStyles.flex3Container}>
        <img
          css={loginPageStyles.image}
          src="https://colorate.azurewebsites.net/SwatchColor/D9D9D9"
        />
      </div>
      <div css={loginPageStyles.logonButtonContainer}>
        <div css={loginPageStyles.loginButton} onClick={onClickLoginButton}>
          <p css={loginPageStyles.loginButtonText}>카카오톡으로 로그인</p>
        </div>
        <p css={loginPageStyles.lookAroundText} onClick={onClickLookAroundText}>
          둘러보기
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
