/*
    매칭 신청, 거절, 취소 등
*/

import { baseAxios } from './baseAxios';

/*
    [매칭 신청]
    Headers:	Authorization={액세스 토큰}
    {
        "postId":1,
        "memberId":1
    }
*/
interface matchingApply {
  postId: number;
  memberId: number;
}

export const postMatchingApply = async (apply: matchingApply) => {
  const response = await baseAxios
    .post('/api/match/apply', apply, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};

/*
    [매칭 취소]
    {
		    "memberId":1
    }
*/
interface matchingCancel {
  memberId: number;
}

export const putMatchingCancel = async (
  memberId: matchingCancel,
  postId: number,
) => {
  const response = await baseAxios
    .put(`/api/match/${postId}`, memberId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};

/*
    [매칭 거절]
    Headers:	Authorization={액세스 토큰}
    {
        "postId":1,
        "applicantId":2,
    }
*/
interface matchingRefuseAndComfirm {
  postId: number;
  applicantId: number;
}

export const postMatchingRefuse = async (refuse: matchingRefuseAndComfirm) => {
  const response = await baseAxios
    .post('/api/match/refuse', refuse, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};

/*
    매칭 승인
    Headers:	Authorization={액세스 토큰}
    {
        "postId":1,
        "applicantId":2,
    }
*/
export const postMatchingComfirm = async (
  comfirm: matchingRefuseAndComfirm,
) => {
  const response = await baseAxios
    .post('/api/match/comfirm', comfirm, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};

/*
    [매칭 신청자 조회]
    Headers:	Authorization={액세스 토큰}
*/
export const getMatchingMember = async (postId: number) => {
  const response = await baseAxios
    .get(`/api/match/${postId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};

/*
    [매칭 여부 조회]
    {
		    "memberId":2
    }
*/
export const getMatchingStatus = async (postId: number) => {
  const response = await baseAxios
    .get(`/api/match/${postId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
    .then((response) => response.data);
  return response.data;
};
