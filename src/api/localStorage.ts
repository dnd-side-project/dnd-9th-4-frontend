// jwt 토큰 가져오기
export const getJwtToken = () => {
  return localStorage.getItem('jwtToken');
};

// memberId 가져오기
export const getMemberId = () => {
  return localStorage.getItem('memberId');
};

// kakaoId 가져오기
export const getKakaoId = () => {
  return localStorage.getItem('kakaoId');
};
