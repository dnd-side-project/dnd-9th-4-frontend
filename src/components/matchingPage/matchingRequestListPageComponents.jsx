/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import EmptyRequest from 'assets/matchingPageIcon/EmptyRequest.svg';

export function EmptyRequestComponent() {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '65vh',
      })}
    >
      <img src={EmptyRequest} />
      <span
        css={css({
          marginTop: '16px',
          color: '#949494',
          textAlign: 'center',
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '150%',
          letterSpacing: '-0.266px',
        })}
      >
        아직 요청온 매칭이 없어요!
      </span>
    </div>
  );
}
