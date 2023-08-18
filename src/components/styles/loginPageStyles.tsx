/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const loginPageStyles = {
  container: css({
    background: '#25252D',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  }),

  flex1Container: css({ flex: 1 }),

  flex2Container: css({ flex: 2 }),

  subTitle: css({
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '150%' /* 30px */,
    letterSpacing: '-0.8px',
    margin: 0,
  }),

  logoContainer: css({
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),

  loginButtonContainer: css({
    flex: 1,
    width: '85%',
  }),

  loginButton: css({
    display: 'flex',
    width: '100%',
    height: '48px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '8px',
    background: '#FFE606',
    cursor: 'pointer',
    textDecoration: 'none',
  }),

  loginButtonText: css({
    color: '#363636',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '150%',
    letterSpacing: '-0.38px',
  }),

  lookAroundText: css({
    color: '#939393',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '150%',
    letterSpacing: '-0.304px',
    marginTop: '14.5px',
    cursor: 'pointer',
  }),
};
