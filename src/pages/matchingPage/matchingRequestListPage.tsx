/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { NaviBarTitle } from 'components/matchingPage/matchingPostWritePageComponents';
import { EmptyRequestComponent } from 'components/matchingPage/matchingRequestListPageComponents';
import { MatchingModal } from 'components/matchingPage/matchingPostPageComponents';
import { matchingRequestStyles } from 'components/styles/matchingPageStyles';

const testData = {
  matchingRequest: [
    {
      memberId: 1,
      username: 'jane_smith',
      gender: 'FEMALE',
      age: '25',
      profileImg:
        'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg',
      matchStatus: 'APPLYING',
    },
    {
      memberId: 2,
      username: 'jane_smith',
      gender: 'FEMALE',
      age: '25',
      profileImg:
        'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg',
      matchStatus: 'APPLYING',
    },
  ],
};

function MatchingRequestListPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectUser, setSelectUser] = useState<string | null>(null);

  const onClickProfile = (id: number) => {
    console.log(id, '회원 프로필 보기 클릭');
  };

  const onClickReject = (id: number) => {
    console.log(id, '거절하기');
  };

  const onClickAccept = (id: number, name: string) => {
    console.log(id, '수락하기', name);
    setSelectUser(name);
    setIsOpen(true);
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
      {testData.matchingRequest.length == 0 ? (
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
            {testData.matchingRequest.map((req) => (
              <div
                key={req.memberId}
                css={matchingRequestStyles.requestContainer}
              >
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
