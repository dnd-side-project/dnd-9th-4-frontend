/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Dialog from '@mui/material/Dialog';
import { matchingPostPageStyles } from 'components/styles/matchingPostPageStyles';
import PostBack from 'assets/matchingPostIcon/PostBack.svg';
import PostMore from 'assets/matchingPostIcon/MoreIcon.svg';
import { useNavigate } from 'react-router-dom';
import 배너1 from 'assets/postBanner/배너1.png';
import 배너2 from 'assets/postBanner/배너2.png';
import 배너3 from 'assets/postBanner/배너3.png';
import 배너4 from 'assets/postBanner/배너4.png';
import 배너5 from 'assets/postBanner/배너5.png';
import 배너6 from 'assets/postBanner/배너6.png';
import 배너7 from 'assets/postBanner/배너7.png';
import 배너8 from 'assets/postBanner/배너8.png';
import { getMemberId } from 'api/localStorage';

interface BannerData {
  id: number;
  memberId: number | null;
  onClickMoreButton?: () => void;
}

/*
  [상단 배너]
*/
export function TopBanner(props: BannerData) {
  const navigate = useNavigate();
  const bannerImages = [배너1, 배너2, 배너3, 배너4, 배너5, 배너6, 배너7, 배너8];
  const id = props.id % 8;
  const selectedBannerIndex = id === 0 ? 7 : id - 1;
  const selectedBanner = bannerImages[selectedBannerIndex];

  return (
    <div
      css={[
        matchingPostPageStyles.banner,
        { backgroundImage: `url(${selectedBanner})` },
      ]}
    >
      <div css={matchingPostPageStyles.bannerButton}>
        <img src={PostBack} onClick={() => navigate(-1)} />
        {props.memberId == getMemberId() ? (
          <img
            src={PostMore}
            css={css({ paddingBottom: '5px' })}
            onClick={props.onClickMoreButton}
          />
        ) : (
          <div />
        )}
      </div>
      <div css={matchingPostPageStyles.emptyButton}></div>
    </div>
  );
}

interface MatchingModalData {
  open: boolean;
  onClickModalClose?: () => void;
  onClickModalOk: () => void;
  title: string;
  title2?: string;
  subTitle: string;
  buttonOne?: string;
  img?: string;
}

/*
    [매칭 신청 모달]
*/
export function MatchingModal(props: MatchingModalData) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClickModalClose}
      PaperProps={{
        style: { borderRadius: '16px', overflow: 'visible' },
      }}
    >
      {props.img ? (
        <img
          src={props.img}
          css={css({
            position: 'absolute',
            top: '-50px',
            left: '75px',
            width: '50%',
          })}
        />
      ) : null}
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          width: '290px',
          height: '150px',
          alignItems: 'center',
        })}
      >
        <div css={css({ flex: 1, paddingTop: '30px' })}>
          <span
            css={css({
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Pretendard',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '150%', // 혹은 24px로 표현해도 됩니다.
              letterSpacing: '-0.8px',
              display: props.title2 ? 'flex' : undefined,
              justifyContent: props.title2 ? 'center' : undefined,
              alignItems: props.title2 ? 'center' : undefined,
              height: props.title2 ? 'center' : '100%',
            })}
          >
            {props.title}
            {props.title2 && <br />}
            {props.title2}
          </span>
          <div
            css={css({
              color: 'var(--grey-04, var(--grey-04, #959DB1))',
              textAlign: 'center',
              fontFamily: 'Pretendard',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '150%',
              letterSpacing: '-0.266px',
              marginTop: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            })}
          >
            {props.subTitle}
          </div>
        </div>
        <div
          css={css({
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > div': {
              display: 'flex',
              width: props.buttonOne ? '256px' : '128px',
              height: '41px',
              margin: '0px 4px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
              borderRadius: '6px',
              ' > span': {
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '-0.304px',
              },
            },
          })}
        >
          {props.buttonOne ? null : (
            <div
              css={css({
                background: '#000000',
              })}
              onClick={props.onClickModalClose}
            >
              <span>취소</span>
            </div>
          )}
          <div
            css={css({
              background: '#0066FF',
            })}
            onClick={props.onClickModalOk}
          >
            <span>확인</span>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

interface PostHashTagData {
  title: string;
  hashTag: string[];
}

/*
    [운동 스타일, 관심사]
*/
export function PostHashTag(props: PostHashTagData) {
  return (
    <div>
      <div
        css={css({
          color: 'var(--grey-01, var(--grey-01, #202123))',
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '150%',
          letterSpacing: '-0.304px',
          marginBottom: '11px',
        })}
      >
        {props.title}
      </div>
      {props.hashTag.map((content, index) => (
        <div
          key={index}
          css={css({
            display: 'inline-flex',
            padding: '4px 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '19.35px',
            background: 'rgba(255, 135, 97, 0.10)',
            color: '#FF8761',
            fontFamily: 'Pretendard',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '150%',
            letterSpacing: '-0.266px',
            marginRight: '12px',
            marginBottom: '25px',
          })}
        >
          #{content}
        </div>
      ))}
    </div>
  );
}
