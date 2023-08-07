/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const loginPageStyles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  }),

  flex2Container: css({ flex: 2 }),

  title: css({
    color: '#3A3A3A',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '150%' /* 54px */,
    letterSpacing: '-0.684px',
    marginTop: 0,
    marginBottom: 15,
  }),

  subTitle: css({
    color: '#3A3A3A',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '150%' /* 30px */,
    letterSpacing: '-0.38px',
    margin: 0,
  }),

  flex3Container: css({ flex: 3 }),

  image: css({
    width: '178px',
    height: '178px',
    borderRadius: '50%',
  }),

  logonButtonContainer: css({
    flex: 2,
    width: '85%',
  }),

  loginButton: css({
    display: 'flex',
    width: '100%',
    height: '58px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '8px',
    background: '#FFE606',
    cursor: 'pointer',
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
