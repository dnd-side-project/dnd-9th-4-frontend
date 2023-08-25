/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { NaviBarTitle } from 'components/matchingPage/matchingPostWritePageComponents';
import { EmptyRequestComponent } from 'components/matchingPage/matchingRequestListPageComponents';
import { MatchingModal } from 'components/matchingPage/matchingPostPageComponents';
import { matchingRequestStyles } from 'components/styles/matchingPageStyles';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import {
  postMatchingRefuse,
  postMatchingComfrim,
  getMatchingApplyMember,
} from 'api/matchingApplyApi';
import { useNavigate } from 'react-router-dom';

type RequestListType = {
  profileImg: string;
  username: string;
  age: number;
  gender: string;
  memberId: number;
  matchStatus: string;
};

function MatchingRequestListPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, SetIsOpen3] = useState(false);

  const [selectUser, setSelectUser] = useState<string | null>(null);

  const [applyList, setApplyList] = useState<RequestListType[]>([]);

  const { mutate: mutateMatchingMember } = useMutation(
    () => getMatchingApplyMember(id),
    {
      onSuccess: (data) => {
        setApplyList(data);
        console.log(data);
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
    setIsOpen2(true);
    mutateMatchingRefuse(applicantId);
  };

  const onClickCancle = () => {
    mutateMatchingMember();
    setIsOpen2(false);
  };

  const onClickAccept = (applicantId: number, name: string) => {
    console.log(applicantId, '수락하기', name);
    setSelectUser(name);
    setIsOpen(true);
    mutateMatchingComfrim(applicantId);
  };

  const onClickOK = () => {
    setIsOpen(false);
    SetIsOpen3(true);
    mutateMatchingMember();
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
                  {req.matchStatus === 'REJECTED' ? (
                    <div css={matchingRequestStyles.rejectButton2}>
                      <span>요청 거절 됨</span>
                    </div>
                  ) : (
                    <div
                      css={matchingRequestStyles.rejectButton}
                      onClick={() => onClickReject(req.memberId)}
                    >
                      <span>거절하기</span>
                    </div>
                  )}
                  {req.matchStatus === 'MATCHED' ? (
                    <div css={matchingRequestStyles.applyButton2}>
                      <span>요청 승인 됨</span>
                    </div>
                  ) : (
                    <div
                      css={matchingRequestStyles.applyButton}
                      onClick={() => onClickAccept(req.memberId, req.username)}
                    >
                      <span>수락하기</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <MatchingModal // 매칭 수락 모달
          open={isOpen}
          onClickModalOk={onClickOK}
          title={`${selectUser}님의 매칭 요청을`}
          title2="수락하였습니다."
          subTitle=""
          buttonOne="yes"
        />
        <MatchingModal // 매칭 수락 후
          open={isOpen3}
          onClickModalOk={() => navigate('/message')}
          title={'매칭이 완료 되었어요!'}
          title2="쪽지로 자세한 일정을 정해볼까요?"
          subTitle=""
          buttonOne="yes"
        />
        <MatchingModal // 매칭 거절 모달
          open={isOpen2}
          onClickModalOk={onClickCancle}
          title={`${selectUser}님의 매칭 요청을`}
          title2="거절하였습니다."
          subTitle=""
          buttonOne="yes"
        />
      </div>
    </div>
  );
}

export default MatchingRequestListPage;
