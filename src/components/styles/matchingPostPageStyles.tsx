/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const matchingPostPageStyles = {
  container: css({
    marginTop: '17px',
    marginInline: '15px',
    paddingBottom: '80px',
  }),
  profileContainer: css({
    display: 'flex',
    alignItems: 'center',
  }),
  profileImg: css({
    flex: 1,
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  }),
  profileName: css({
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
  }),
  profileInfo: css({
    flex: 3,
    color: '#676F83',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.266px',
  }),
  profileButton: css({
    flex: 2,
    display: 'inline-flex',
    padding: '4px 0px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '19.35px',
    border: '1px solid var(--grey-04, #959DB1)',
    background: '#FFF',
    '& > span': {
      color: 'var(--grey-04, var(--grey-04, #959DB1))',
      textAlign: 'center',
      fontFamily: 'Pretendard',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '150%', // 21px
      letterSpacing: '-0.8px',
    },
  }),
  title: css({
    color: '#3A3A3A',
    fontFamily: 'Pretendard',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '120%' /* 24px */,
    letterSpacing: '-0.6px',
    marginBottom: '19.97px',
  }),
  matchingInfo: css({
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
  }),
  content: css({
    color: '#3A3A3A',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%', // '24px'
    letterSpacing: '-0.304px',
    paddingBlock: '8px',
    whiteSpace: 'pre-line',
  }),
};
