/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Dialog from '@mui/material/Dialog';

interface MatchingModalData {
  open: boolean;
  onClickModalClose: () => void;
  onClickModalOk: () => void;
  title: string;
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
        style: { borderRadius: '16px' },
      }}
    >
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          width: '290px',
          height: '236px',
          alignItems: 'center',
        })}
      >
        <div css={css({ flex: 1, paddingTop: '120px' })}>
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
            })}
          >
            {props.title}
          </span>
        </div>
        <div
          css={css({
            flex: 1,
            display: 'flex',
            '& > div': {
              display: 'flex',
              width: '128px',
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
          <div
            css={css({
              background: '#000000',
            })}
            onClick={props.onClickModalClose}
          >
            <span>취소</span>
          </div>
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
