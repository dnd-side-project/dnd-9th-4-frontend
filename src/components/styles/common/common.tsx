import { css } from '@emotion/react';

export const appContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  fontFamily: 'Pretendard',
  lineHeight: '150%',
  padding: '16px 16px 15px 16px',
  margin: '0 auto',
  height: '100%',
  width: '100%',
});

// margin
export const marginSize = (size: string) =>
  css({
    margin: size,
  });

// stack

export const stackColumn = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const stackRow = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

// absolute

export const absoluteLeft = css({
  position: 'absolute',
  left: 0,
});

// text

export const textCenter = css({
  textAlign: 'center',
});

export const textWeight = (size: number) =>
  css({
    fontWeight: size,
  });

export const prevHeaderContainer = css({
  width: '100%',
  minHeight: '46px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'top',
  position: 'relative',
});

export const nextButtonContainer = css({
  width: '100%',
  height: '48px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginTop: '16px',
});

export const bottomSheetHeadBarStyle = css({
  width: '33px',
  height: '4px',
  margin: '17px auto',
  backgroundColor: '#E5E5E5',
});

export const bottomSheetContentContainer = css({
  margin: '0 auto',
  padding: '3px 16px 15px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '480px',
  minWidth: '300px',
  fontFamily: 'Pretendard',
});
