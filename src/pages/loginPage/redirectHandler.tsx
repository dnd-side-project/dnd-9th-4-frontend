import React, { useEffect } from 'react';
import axios from 'axios';
import config from 'config';

function RedirectHandler() {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  const backendUrl = `${config.backendUrl}/login`;

  const codeData = {
    code: code,
  };

  useEffect(() => {
    axios
      .post(backendUrl, codeData)
      .then((response) => {
        console.log('인가코드 전송 성공');
        console.log(response.data);
        // 토큰 받아서 로그인 세션 유지
        // 온보딩 페이지로 이동
      })
      .catch((error) => {
        console.error('인가코드 전송 실패');
        console.error(error);
      });
  }, []);

  return <div>인가코드</div>;
}

export default RedirectHandler;
