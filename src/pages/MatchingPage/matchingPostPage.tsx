/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useParams, useNavigate } from 'react-router-dom';
import HomeLogo from 'assets/newPleLogo/HomePageLogo.svg';
import PostBack from 'assets/matchingPostIcon/PostBack.svg';
import PostMore from 'assets/matchingPostIcon/MoreIcon.svg';
import PostLocation from 'assets/matchingPostIcon/PostLocation.svg';
import PostSport from 'assets/matchingPostIcon/PostSport.svg';
import PostTime from 'assets/matchingPostIcon/PostTime.svg';
//import Dialog from '@mui/material/Dialog';
import { MatchingModal } from 'components/matchingPage/matchingPostPageComponents';

const testData = {
  id: 1,
  memberId: 1, // id랑 닉네임도 있어야 할 듯
  profileImg:
    'https://image.hmall.com/static/8/0/42/35/2135420804_0.jpg?RS=600x600&AR=0',
  title: '같이 헬스하실 분!',
  sport: '헬스',
  region: '대전광역시 유성구 봉명동',
  time: '2023-08-20 18:30:00',
  createDate: '2023-07-31',
  endDate: '2023-08-15',
  mateExercisePeriod: '경력상관없어요',
  mateGender: 'MAN', // ui에는 한글인데 여기서는 MAN, 프론트에서 MAN->남자 이렇게 할 순 있긴함
  mateAge: '20',
  description:
    '동네에서 같이 헬스하실 분 구해요\n운동 초보라서 같이 운동하면서\n성장할 또래 운동친구 만나고 싶습니다!\n헬스장은 상의해서 정해요~!',
  image: '?',
};

function MatchingPostPage() {
  const [recruiting, setRecruiting] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

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

  return (
    <div>
      <div
        css={css({
          backgroundColor: '#66A3FF',
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
        >
          <img
            src={HomeLogo}
            css={css({ height: '30px', marginRight: '10px' })}
          />
        </div>
      </div>
      <div
        css={css({
          marginTop: '17px',
          marginInline: '15px',
        })}
      >
        <div
          css={css({
            display: 'flex',
            alignItems: 'center',
          })}
        >
          <img
            src={testData.profileImg}
            css={css({
              flex: 1,
              width: '60px',
              height: '60px',
              borderRadius: '50%',
            })}
          />
          <span
            css={css({
              flex: 1,
              color: '#000',
              fontFamily: 'Pretendard',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '150%',
              letterSpacing: '-0.266px',
              paddingLeft: '12px',
              paddingRight: '15px',
            })}
          >
            푸바오
          </span>
          <span
            css={css({
              flex: 3,
              color: '#676F83',
              fontFamily: 'Pretendard',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '150%',
              letterSpacing: '-0.266px',
            })}
          >
            {testData.mateAge}/{testData.mateGender === 'MAN' ? '남' : '여'}
          </span>
          <div
            css={css({
              flex: 2,
              display: 'inline-flex',
              padding: '4px 0px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '19.35px',
              border: '1px solid var(--grey-04, #959DB1)',
              background: '#FFF',
            })}
          >
            <span
              css={css({
                color: 'var(--grey-04, var(--grey-04, #959DB1))',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '150%', // 21px
                letterSpacing: '-0.8px',
              })}
            >
              프로필보기
            </span>
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
        <div
          css={css({
            color: '#3A3A3A',
            fontFamily: 'Pretendard',
            fontSize: '22px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '120%' /* 24px */,
            letterSpacing: '-0.6px',
            marginBottom: '19.97px',
          })}
        >
          {testData.title}
        </div>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '11px',
            '& > div': {
              display: 'flex',
              '> div': {
                color: 'var(--grey-03, #676F83)',
                fontFamily: 'Pretendard',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '150%', // '24px'
                letterSpacing: '-0.304px',
                paddingLeft: '8.74px',
              },
            },
          })}
        >
          <div>
            <img src={PostLocation} />
            <div>{testData.region}</div>
          </div>
          <div>
            <img src={PostTime} />
            <div>{testData.time}</div>
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
        <div
          css={css({
            color: '#3A3A3A',
            fontFamily: 'Pretendard',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '150%', // '24px'
            letterSpacing: '-0.304px',
            paddingBlock: '8px',
            whiteSpace: 'pre-line',
          })}
        >
          {testData.description}
        </div>
        <div
          css={css({
            height: '1px',
            backgroundColor: '#E2E2E2',
            marginBlock: '18px',
          })}
        />
        <div>{id}번 게시물</div>
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
      />
      <MatchingModal // 매칭 신청 확인 모달
        open={openModal2}
        onClickModalClose={onClickModal2Close}
        onClickModalOk={onClickModal2Close}
        title="매칭을 신청 완료되었습니다!"
      />
      <MatchingModal // 매칭 취소 모달
        open={openCancelModal}
        onClickModalClose={onClickCancelModalClose}
        onClickModalOk={onClickCancleMatching}
        title="매칭을 취소하시겠습니까?"
      />
    </div>
  );
}

export default MatchingPostPage;
