/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { NaviBarTitle } from 'components/matchingPage/matchingPostWritePageComponents';
import { EmptyRequestComponent } from 'components/matchingPage/matchingRequestListPageComponents';
import { MatchingModal } from 'components/matchingPage/matchingPostPageComponents';
import { matchingRequestStyles } from 'components/styles/matchingPageStyles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from 'config';
import { useMutation } from 'react-query';

type RequestListType = {
  profileImg: string;
  username: string;
  age: number;
  gender: string;
  memberId: number;
  matchStatus: string;
};

// const testData = {
//   matchingRequest: [
//     {
//       memberId: 1,
//       username: 'jane_smith',
//       gender: 'FEMALE',
//       age: '25',
//       profileImg:
//         'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg',
//       matchStatus: 'APPLYING',
//     },
//     {
//       memberId: 2,
//       username: 'jane_smith',
//       gender: 'FEMALE',
//       age: '25',
//       profileImg:
//         'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg',
//       matchStatus: 'APPLYING',
//     },
//   ],
// };

// 매칭 수락 api
const postMatchingComfrim = async (
  postId: string | undefined,
  applicantId: number,
) => {
  const comfrim = {
    postId: Number(postId),
    applicantId: applicantId,
  };
  try {
    const res = await axios.post(
      `${config.backendUrl}/api/match/confirm`,
      comfrim,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// 매칭 거절 api
const postMatchingRefuse = async (
  postId: string | undefined,
  applicantId: number,
) => {
  const refuse = {
    postId: Number(postId),
    applicantId: applicantId,
  };
  try {
    const res = await axios.post(
      `${config.backendUrl}/api/match/refuse`,
      refuse,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// 매칭 신청자 조회 api
const getMatchingApplyMember = async (postId: string | undefined) => {
  try {
    const res = await axios.get(
      `${config.backendUrl}/api/match/${Number(postId)}/all`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

function MatchingRequestListPage() {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [selectUser, setSelectUser] = useState<string | null>(null);

  const [applyList, setApplyList] = useState<RequestListType[]>([]);

  const { mutate: mutateMatchingMember } = useMutation(
    () => getMatchingApplyMember(id),
    {
      onSuccess: (data) => {
        setApplyList(data);
      },
      onError: (error) => console.log(error),
    },
  );

  useEffect(() => {
    mutateMatchingMember();
  }, []);

  const onClickProfile = (applicantId: number) => {
    console.log(applicantId, '회원 프로필 보기 클릭');
  };

  // 매칭 수락
  const { mutate: mutateMatchingComfrim } = useMutation(
    (applicantId: number) => postMatchingComfrim(id, applicantId),
    {
      onSuccess: (data) => {
        console.log('매칭 수락 성공', data);
      },
      onError: (error) => console.log(error),
    },
  );

  // 매칭 거절
  const { mutate: mutateMatchingRefuse } = useMutation(
    (applicantId: number) => postMatchingRefuse(id, applicantId),
    {
      onSuccess: (data) => {
        console.log('매칭 거절 성공', data);
      },
      onError: (error) => console.log(error),
    },
  );

  const onClickReject = (applicantId: number) => {
    console.log(applicantId, '거절하기');
    mutateMatchingRefuse(applicantId);
  };

  const onClickAccept = (applicantId: number, name: string) => {
    console.log(applicantId, '수락하기', name);
    setSelectUser(name);
    setIsOpen(true);
    mutateMatchingComfrim(applicantId);
  };

  const onClickClose = () => {
    setIsOpen(false);
  };

  const onClickOK = () => {
    setIsOpen(false);
    console.log('수락');
  };

  return (
    <div>
      <NaviBarTitle title="매칭요청" />
      {applyList.length == 0 ? (
        <EmptyRequestComponent />
      ) : (
        <div css={matchingRequestStyles.container}>
          <div>
            <div css={matchingRequestStyles.title}>대기중 요청</div>
            <span css={matchingRequestStyles.explain}>
              함께 운동할 뉴플메이트를 수락해볼까요?
              <br />
              메이트의 프로필을 확인하고 요청을 수락해주세요.
            </span>
          </div>
          <div>
            {applyList.map((req, index) => (
              <div key={index} css={matchingRequestStyles.requestContainer}>
                <div css={matchingRequestStyles.flexBox}>
                  <div css={matchingRequestStyles.profile}>
                    <img src={req.profileImg} />
                  </div>
                  <div css={matchingRequestStyles.inforBox}>
                    <div>
                      <span css={matchingRequestStyles.username}>
                        {req.username}
                      </span>
                      <span css={matchingRequestStyles.userInfo}>
                        {req.age} / {req.gender == 'MALE' ? '남' : '여'}
                      </span>
                    </div>
                    <div css={matchingRequestStyles.uesrmsg}>
                      <span>안녕하세요~~~~~~</span>
                    </div>
                  </div>
                  <div
                    css={matchingRequestStyles.lookuser}
                    onClick={() => onClickProfile(req.memberId)}
                  >
                    <span>프로필보기</span>
                  </div>
                </div>
                <div css={matchingRequestStyles.button}>
                  <div
                    css={matchingRequestStyles.rejectButton}
                    onClick={() => onClickReject(req.memberId)}
                  >
                    <span>거절하기</span>
                  </div>
                  <div
                    css={matchingRequestStyles.applyButton}
                    onClick={() => onClickAccept(req.memberId, req.username)}
                  >
                    <span>수락하기</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <MatchingModal // 매칭 수락 모달
          open={isOpen}
          onClickModalClose={onClickClose}
          onClickModalOk={onClickOK}
          title={`${selectUser}님의 매칭 요청을`}
          title2="수락하시겠습니까?"
          subTitle=""
        />
      </div>
    </div>
  );
}

export default MatchingRequestListPage;
