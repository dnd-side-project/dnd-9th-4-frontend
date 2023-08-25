/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
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
//import { useQuery } from 'react-query';
import axios from 'axios';
import config from 'config';
import { useMutation } from 'react-query';
import { getMatchingPostDetail, deleteMatchingPost } from 'api/matchingPageApi';
import { MatchingPostData } from 'data/type';
import { getMemberId } from 'api/localStorage';
import { postMatchingApply } from 'api/matchingApplyApi';
import { useRecoilState } from 'recoil';
import { postEditState } from 'recoil/postEdit';
import { imageList } from 'data/variable';

// 매칭 취소하기 api
const putMatchingCancel = async (postId: string | undefined) => {
  try {
    const res = await axios.put(
      `${config.backendUrl}/api/match/${Number(postId)}`,
      // cancel,
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

// 매칭 여부 조회 api
const getMatchingStatus = async (postId: string | undefined) => {
  try {
    const res = await axios.get(
      `${config.backendUrl}/api/match/${Number(postId)}`,
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

function MatchingPostPage() {
  const navigate = useNavigate();

  const [editPost, setEditPost] = useRecoilState(postEditState);

  const onClickEditButton = () => {
    navigate(`edit`);
    console.log(editPost);
    setEditPost({
      sport: postContent?.sport,
      tags: postContent?.tags,
      title: postContent?.title,
      content: postContent?.content,
      region: postContent?.region,
      gender: postContent?.gender,
      age: postContent?.age,
      runtime: postContent?.runtime,
    });
  };

  const [postContent, setPostContent] = useState<MatchingPostData | null>(null);

  const [recruiting, setRecruiting] = useState<boolean>(false);
  const { id } = useParams();

  const [isMatching, setIsMatching] = useState(null);

  // 매칭 여부
  const { mutate: mutateMatchingStatus } = useMutation(
    () => getMatchingStatus(id),
    {
      onSuccess: (data) => {
        console.log('매칭 여부 확인 성공', data);
        setIsMatching(data.status);
      },
      onError: (error) => console.log(error),
    },
  );

  // 모집글
  const { mutate: mutateMatchingPost } = useMutation(
    () => getMatchingPostDetail(id),
    {
      onSuccess: (data) => {
        console.log('매칭 게시물 가져오기 성공', data);
        setPostContent(data);
      },
      onError: (error) => console.log(error),
    },
  );

  useEffect(() => {
    mutateMatchingStatus();
    mutateMatchingPost();
  }, []);

  // 매칭 신청 모달
  const [openModal1, setOpenModal1] = useState(false);

  const onClickModalOepn = () => {
    setOpenModal1(true);
  };

  const onClickModalClose = () => {
    setOpenModal1(false);
  };

  const { mutate: mutateMatchingApply } = useMutation(
    () => postMatchingApply(id, localStorage.getItem('memberId')),
    {
      onSuccess: (data) => {
        console.log('매칭 신청 성공', data);
      },
      onError: (error) => console.log(error),
    },
  );

  // 매칭 신청
  const onClickApplyMatching = () => {
    setOpenModal1(false);
    setRecruiting(true);
    mutateMatchingApply(); // 매칭 신청
  };

  // 매칭 취소 모달
  const [openCancelModal, setOpenCancelModal] = useState(false);

  const onClickCancelModal = () => {
    setOpenCancelModal(true);
  };

  const onClickCancelModalClose = () => {
    setOpenCancelModal(false);
  };

  // 매칭 취소
  const { mutate: mutateMatchingCancel } = useMutation(
    () => putMatchingCancel(id),
    {
      onSuccess: (data) => {
        console.log('매칭 취소 성공', data);
      },
      onError: (error) => console.log(error),
    },
  );

  // 매칭 취소
  const onClickCancleMatching = () => {
    setOpenCancelModal(false);
    setOpenCancelCheckModal(true);
    mutateMatchingCancel(); // 매칭 취소
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

  // 게시물 삭제
  const [openDeletePostModal, setOpenDeletePostModal] = useState(false);

  const { mutate: mutateDeleteMatchingPost } = useMutation(
    (postId: string | undefined) => deleteMatchingPost(postId),
    {
      onSuccess: (data) => {
        console.log('게시물 삭제 성공', data);
        navigate('/matching');
      },
      onError: (error) => console.log(error),
    },
  );

  // 게시물 삭제
  const onClickPostDelete = () => {
    setOpenDeletePostModal(true);
  };

  const onClickDeletePostModal = () => {
    mutateDeleteMatchingPost(id);
  };

  return (
    <div>
      <TopBanner
        id={Number(id)}
        onClickMoreButton={() => setIsMore(true)}
        memberId={postContent == null ? null : postContent.memberId}
      />
      {postContent == null ? (
        <div></div>
      ) : (
        <div css={matchingPostPageStyles.container}>
          <div css={matchingPostPageStyles.profileContainer}>
            <img
              src={imageList[Number(postContent.writerProfileImg)] || undefined}
              css={matchingPostPageStyles.profileImg}
            />
            <span css={matchingPostPageStyles.profileName}>
              {postContent.writerUsername}
            </span>
            <span css={matchingPostPageStyles.profileInfo}>
              {postContent.writerAge}/
              {postContent.writerGender === 'MALE' ? '남' : '여'}
            </span>
            <div
              css={matchingPostPageStyles.profileButton}
              onClick={() => navigate(`/profile/${postContent.memberId}`)}
            >
              <span>프로필보기</span>
            </div>
          </div>
          <div css={matchingPostPageStyles.recruit} />
          <div
            css={[
              matchingPostPageStyles.recruitText,
              {
                color:
                  recruiting || isMatching == 'APPLYING'
                    ? '#FF8761'
                    : '#0074FF',
              },
            ]}
          >
            {recruiting || isMatching == 'APPLYING' ? '수락대기중' : '모집중'}
          </div>
          <div css={matchingPostPageStyles.title}>{postContent.title}</div>
          <div css={matchingPostPageStyles.matchingInfo}>
            <div>
              <img src={PostLocation} />
              <div>{postContent.region}</div>
            </div>
            <div>
              <img src={PostTime} />
              <div>{postContent.runtime}</div>
            </div>
            <div>
              <img src={PostSport} />
              <div>{postContent.sport}</div>
            </div>
          </div>
          <Horizontalline margin="21px" />
          <div css={matchingPostPageStyles.content}>{postContent.content}</div>
          <Horizontalline margin="18px" />
          <div>
            <PostHashTag title="운동태그" hashTag={postContent.tags} />
          </div>
        </div>
      )}
      <div css={matchingPostPageStyles.modalButtonContainer}>
        {postContent?.memberId == Number(getMemberId()) ? (
          <div
            css={matchingPostPageStyles.modalButtonBox}
            onClick={() => navigate(`request`)}
          >
            <span css={matchingPostPageStyles.modalButtonText}>
              매칭 요청 확인
            </span>
          </div>
        ) : (
          <div
            css={matchingPostPageStyles.modalButtonBox}
            onClick={
              recruiting || isMatching == 'APPLYING'
                ? onClickCancelModal
                : onClickModalOepn
            }
          >
            <span css={matchingPostPageStyles.modalButtonText}>
              {recruiting || isMatching == 'APPLYING'
                ? '매칭 취소하기'
                : '매칭 신청하기'}
            </span>
          </div>
        )}
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
      <MatchingModal // 매칭 취소 확인 모달
        open={openDeletePostModal}
        onClickModalOk={onClickDeletePostModal}
        title="게시물이 삭제 되었습니다."
        subTitle="게시물이 삭제 되었습니다."
        buttonOne="buttonOne"
      />
      <BottomSheet isOpen={isMore} onClose={() => setIsMore(false)}>
        <div css={matchingPostPageStyles.moreModal}>
          <div css={css({ color: '#2E7BEE' })} onClick={onClickEditButton}>
            수정하기
          </div>
          <Horizontalline color="#D1D3D7" />
          <div
            css={css({ color: '#FF0000' })}
            onClick={() => onClickPostDelete()}
          >
            삭제하기
          </div>
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
