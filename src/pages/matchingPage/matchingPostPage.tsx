/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useParams, useNavigate } from 'react-router-dom';
import PostBack from 'assets/matchingPostIcon/PostBack.svg';
import PostMore from 'assets/matchingPostIcon/MoreIcon.svg';
import PostLocation from 'assets/matchingPostIcon/PostLocation.svg';
import PostSport from 'assets/matchingPostIcon/PostSport.svg';
import PostTime from 'assets/matchingPostIcon/PostTime.svg';
import {
  MatchingModal,
  PostHashTag,
} from 'components/matchingPage/matchingPostPageComponents';
import { matchingPostPageStyles } from 'components/styles/matchingPostPageStyles';

const testData = {
  id: 1,
  memberId: 1, // 사진도 있어야 하지 않을까?
  profileImg:
    'https://image.hmall.com/static/8/0/42/35/2135420804_0.jpg?RS=600x600&AR=0',
  writerUsername: 'john_doe',
  writerAge: '30',
  writerGender: 'MALE',
  sport: 'HIKING',
  exerciseStyles: ['운동만 집중해서', '서로 도우면서 보조'],
  interests: ['체력키우기', '다이어트', '유산소'],
  title: '한라산 올라가실 분~',
  content: '취미로 등산하는데 한라산 꼭 가보고 싶었어요!!',
  region: '대전광역시 유성구',
  gender: '여성',
  age: '20대 초반',
  runtime: '2023-09-12 13:00:00',
  periodEx: null,
  matchedMembers: [],
  selectedMember: null,
};

function MatchingPostPage() {
  const [recruiting, setRecruiting] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id, '번째 게시물');

  // 매칭 신청 모달
  const [openModal1, setOpenModal1] = useState(false);

  const onClickModalOepn = () => {
    setOpenModal1(true);
  };

  const onClickModalClose = () => {
    setOpenModal1(false);
  };

  const onClickApplyMatching = () => {
    console.log('매칭 신청');
    setOpenModal1(false);
    setTimeout(() => {
      onClickModal2Oepn();
    }, 200);
  };

  // 매칭 신청 확인 모달
  const [openModal2, setOpenModal2] = useState(false);

  const onClickModal2Oepn = () => {
    setOpenModal2(true);
  };

  const onClickModal2Close = () => {
    setOpenModal2(false);
    setRecruiting(true);
  };

  // 매칭 취소 모달
  const [openCancelModal, setOpenCancelModal] = useState(false);

  const onClickCancelModal = () => {
    setOpenCancelModal(true);
  };

  const onClickCancelModalClose = () => {
    setOpenCancelModal(false);
  };

  const onClickCancleMatching = () => {
    setOpenCancelModal(false);
    setRecruiting(false);
  };

  const backgroundImageUrl =
    'https://s3-alpha-sig.figma.com/img/c30e/7915/f5c8a8b7d7941fc9b5e4f753dc834a96?Expires=1693180800&Signature=OOHtxeyC3xlMhUGtV1ysNjRToOaFVYdgsjrz8HuKcAIj4pHAd6OI39e4DL6AWa6XNrLKxIwYg0AU42S-cm8d~g7PYKNzbTd5yhSAJmSKFiP7Br3SCHnCnNPwrLNEuBZKO2zcZKeaWWhogfcQ98CqRiaAJA17Bb1cldQk33O-qWbtXhRYrR4y384anMYBim0OJddhe4czf-hm7QWMeR5HdInD2~w1EzZWmFakLoa2R9SghM7RGyTrYL5G1Skl70lP0PI5C4uMo8q3jWEkGn5Yd64pS47gSXs5~V4xLTfnavauZfG~50oUc5TFNwgwxKwIhcMm7EPQ7xyZpDZxuDpTdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

  return (
    <div>
      <div
        css={css({
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover', // cover, contain, 또는 크기 값으로 설정 가능
          backgroundPosition: 'center',
          display: 'flex',
          height: '189.084px',
          flexDirection: 'column',
        })}
      >
        <div
          css={css({
            flex: 2,
            display: 'flex',
            justifyContent: 'space-between', // 가로 가운데 정렬
            alignItems: 'end',
            padding: '0px 16px',
            marginBottom: '20px',
          })}
        >
          <img src={PostBack} onClick={() => navigate(-1)} />
          <img src={PostMore} css={css({ paddingBottom: '5px' })} />
        </div>
        <div
          css={css({
            flex: 3,
            display: 'flex',
            justifyContent: 'center', // 가로 가운데 정렬
          })}
        ></div>
      </div>
      <div css={matchingPostPageStyles.container}>
        <div css={matchingPostPageStyles.profileContainer}>
          <img
            src={testData.profileImg}
            css={matchingPostPageStyles.profileImg}
          />
          <span css={matchingPostPageStyles.profileName}>
            {testData.writerUsername}
          </span>
          <span css={matchingPostPageStyles.profileInfo}>
            {testData.writerAge}/
            {testData.writerGender === 'MALE' ? '남' : '여'}
          </span>
          <div css={matchingPostPageStyles.profileButton}>
            <span>프로필보기</span>
          </div>
        </div>
        <div
          css={css({
            height: '1px',
            backgroundColor: '#E2E2E2',
            marginBlock: '11.47px',
          })}
        />
        <div
          css={css({
            color: recruiting ? '#FF8761' : '#0074FF',
            fontFamily: 'Pretendard',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '150%' /* 24px */,
            letterSpacing: '-0.304px',
            marginBottom: '11.47px',
          })}
        >
          {recruiting ? '수락대기중' : '모집중'}
        </div>
        <div css={matchingPostPageStyles.title}>{testData.title}</div>
        <div css={matchingPostPageStyles.matchingInfo}>
          <div>
            <img src={PostLocation} />
            <div>{testData.region}</div>
          </div>
          <div>
            <img src={PostTime} />
            <div>{testData.runtime}</div>
          </div>
          <div>
            <img src={PostSport} />
            <div>{testData.sport}</div>
          </div>
        </div>
        <div
          css={css({
            height: '1px',
            backgroundColor: '#E2E2E2',
            marginBlock: '21px',
          })}
        />
        <div css={matchingPostPageStyles.content}>{testData.content}</div>
        <div
          css={css({
            height: '1px',
            backgroundColor: '#E2E2E2',
            marginBlock: '18px',
          })}
        />
        <div>
          <PostHashTag title="운동스타일" hashTag={testData.exerciseStyles} />
          <PostHashTag title="저의 관심사예요" hashTag={testData.interests} />
        </div>
      </div>
      <div
        css={css({
          width: '100%',
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        })}
      >
        <div
          css={css({
            margin: '17px 15px',
            textAlign: 'center',
            display: 'flex',
            height: '48px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
            borderRadius: '6px',
            background: '#06F',
          })}
          onClick={recruiting ? onClickCancelModal : onClickModalOepn}
        >
          <span
            css={css({
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Pretendard',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '150%',
              letterSpacing: '-0.342px',
            })}
          >
            {recruiting ? '매칭 취소하기' : '매칭 신청하기'}
          </span>
        </div>
      </div>
      <MatchingModal // 매칭 신청 모달
        open={openModal1}
        onClickModalClose={onClickModalClose}
        onClickModalOk={onClickApplyMatching}
        title="매칭을 신청하시겠습니까?"
        subTitle="서브타이틀!"
      />
      <MatchingModal // 매칭 신청 확인 모달
        open={openModal2}
        onClickModalClose={onClickModal2Close}
        onClickModalOk={onClickModal2Close}
        title="매칭을 신청 완료되었습니다!"
        subTitle="서브타이틀"
      />
      <MatchingModal // 매칭 취소 모달
        open={openCancelModal}
        onClickModalClose={onClickCancelModalClose}
        onClickModalOk={onClickCancleMatching}
        title="매칭을 취소하시겠습니까?"
        subTitle="서브타이틀"
      />
    </div>
  );
}

export default MatchingPostPage;
