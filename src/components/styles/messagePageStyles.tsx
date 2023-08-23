import { css } from '@emotion/react';

export const messageListItemArea = css({
  width: '100%',
  padding: '14px 27px 13px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const messageListItemBodyArea = css({
  marginLeft: '12.6px',
  height: '100%',
  padding: '4px 5px 4px 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '150%',
  color: '#949494',
  '& .user-name': {
    fontWeight: 700,
    marginBottom: '4px',
    color: '#000000',
  },
});

export const messageListItemTimeArea = css({
  display: 'flex',
  margin: '0 0 auto 0',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '12px',
  lineHeight: '150%',
  fontWeight: 400,
  color: '#949494',
});

export const messagePageContainer = css({
  padding: '20px 0',
  height: '100%',
  fontFamily: 'Pretendard',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const messagePageHeaderArea = css({
  width: '100%',
  paddingLeft: '27px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingBottom: '28px',
  fontSize: '20px',
  fontWeight: 700,
});

export const messagePageBodyArea = css({
  flex: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const sentButtonContainer = css({
  position: 'absolute',
  top: '16px',
  right: '19px',
});

export const messageWriteDividerContainer = css({
  width: '100%',
  height: '0.5px',
  backgroundColor: '#E2E2E2',
  marginTop: '20px',
});

export const messageWriteInputContainer = css({
  flex: 1,
  padding: '26px 15px 26px',
  width: '100%',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: 500,
  color: '#000000',
  border: 'none',
  '&:focus': {
    outline: 'none',
  },
  '&::placeholder': {
    color: '#A5A5A5',
  },
});
