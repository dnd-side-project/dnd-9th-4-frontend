import { css } from '@emotion/react';

export const appContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  fontFamily: 'Pretendard',
  lineHeight: '150%',
  color: '#3A3A3A',
  padding: '16px 16px 15px 16px',
  margin: '0 auto',
  height: '100%',
  width: '100%',
  fontSize: '16px',
});

export const noPdddingContainer = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '150%',
  color: '#000000',
});

export const bodyContainer = css({
  width: '100%',
  flex: 1,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
  scrollbarGutter: 'unset',
  '&::-webkit-scrollbar': {
    width: '0.5em',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'transparent',
  },
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
  marginBottom: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  fontSize: '18px',
  fontWeight: 600,
  color: '#000',
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

export const checkCircle = ({
  isChecked,
  size,
}: {
  isChecked: boolean;
  size: number;
}) =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: isChecked ? '#0066FF' : '#D9D9D9',
    transition: 'background-color 0.2s',
  });

export const dividerContainer = css({
  position: 'relative',
  width: '100%',
});

export const verticalLastBlock = css({
  marginBottom: '60px',
});
