/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import PostLocation from 'assets/matchingPostIcon/PostLocation.svg';
import PostSport from 'assets/matchingPostIcon/PostSport.svg';
import PostTime from 'assets/matchingPostIcon/PostTime.svg';
import {
  MatchingModal,
  PostHashTag,
  TopBanner,
} from 'components/matchingPage/matchingPostPageComponents';
import { matchingPostPageStyles } from 'components/styles/matchingPostPageStyles';
import { Horizontalline } from 'components/common/commonComponents';
import BottomSheet from 'components/common/BottomSheet';
import { useNavigate } from 'react-router-dom';

const testData = {
  age: '20대 초반',
  content: '취미로 등산하는데 한라산 꼭 가보고 싶었어요!!',
  gender: '여성',
  id: 1,
  memberId: 1,
  region: '대전광역시 유성구',
  runtime: '2023-09-12 13:00:00',
  sport: 'HIKING',
  status: 'COMPLETED',
  tags: ['20대', '30대', '2030', '같이성장해요', '운동초보환영'],
  title: '한라산 올라가실 분~',
  writerAge: '30',
  writerGender: 'MALE',
  writerProfileImg:
    'https://image.hmall.com/static/8/0/42/35/2135420804_0.jpg?RS=600x600&AR=0',
  writerUsername: 'john_doe',
  writtenDate: new Date('2023-08-23T12:04:36.183Z'),
};

function MatchingPostPage() {
  const navigate = useNavigate();

  const [recruiting, setRecruiting] = useState<boolean>(false);
  const { id } = useParams();

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
    setOpenCancelCheckModal(true);
  };

  // 매칭 취소 확인 모달
  const [openCancelCheckModal, setOpenCancelCheckModal] = useState(false);
  const onClickCancelCheckModal = () => {
    setOpenCancelCheckModal(false);
    setRecruiting(false);
  };

  // 상단 more 버튼
  const [isMore, setIsMore] = useState(false);
  console.log(isMore);

  return (
    <div>
      <TopBanner id={Number(id)} onClickMoreButton={() => setIsMore(true)} />
      <div css={matchingPostPageStyles.container}>
        <div css={matchingPostPageStyles.profileContainer}>
          <img
            src={testData.writerProfileImg || undefined}
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
        <div css={matchingPostPageStyles.recruit} />
        <div
          css={[
            matchingPostPageStyles.recruitText,
            { color: recruiting ? '#FF8761' : '#0074FF' },
          ]}
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
        <Horizontalline margin="21px" />
        <div css={matchingPostPageStyles.content}>{testData.content}</div>
        <Horizontalline margin="18px" />
        <div>
          <PostHashTag title="운동태그" hashTag={testData.tags} />
        </div>
      </div>
      <div css={matchingPostPageStyles.modalButtonContainer}>
        <div
          css={matchingPostPageStyles.modalButtonBox}
          onClick={recruiting ? onClickCancelModal : onClickModalOepn}
        >
          <span css={matchingPostPageStyles.modalButtonText}>
            {recruiting ? '매칭 취소하기' : '매칭 신청하기'}
          </span>
        </div>
      </div>
      <MatchingModal // 매칭 신청 모달
        open={openModal1}
        onClickModalClose={onClickModalClose}
        onClickModalOk={onClickApplyMatching}
        title="매칭을 신청하시겠습니까?"
        subTitle="서브타이틀"
      />
      <MatchingModal // 매칭 취소 모달
        open={openCancelModal}
        onClickModalClose={onClickCancelModalClose}
        onClickModalOk={onClickCancleMatching}
        title="매칭을 취소하시겠습니까?"
        subTitle="서브타이틀"
      />
      <MatchingModal // 매칭 취소 확인 모달
        open={openCancelCheckModal}
        onClickModalOk={onClickCancelCheckModal}
        title="매칭 취소가 완료되었습니다."
        subTitle="매칭 신청이 취소되었습니다."
        buttonOne="buttonOne"
      />
      <BottomSheet isOpen={isMore} onClose={() => setIsMore(false)}>
        <div css={matchingPostPageStyles.moreModal}>
          <div css={css({ color: '#2E7BEE' })} onClick={() => navigate(`edit`)}>
            수정하기
          </div>
          <Horizontalline color="#D1D3D7" />
          <div css={css({ color: '#FF0000' })}>삭제하기</div>
          <Horizontalline color="#D1D3D7" />
          <div css={css({ color: '#2E7BEE' })} onClick={() => setIsMore(false)}>
            취소
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}

export default MatchingPostPage;
