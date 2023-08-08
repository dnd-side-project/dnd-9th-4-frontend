/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const matchingPageStyles = {
  displayFlex: css({
    display: 'flex',
  }),

  title: css({
    flex: 5,
    textAlign: 'left',
    color: '#000',
    fontFamily: 'Pretendard',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '150%',
    letterSpacing: '-0.38px',
    marginLeft: '26px',
    marginBottom: '0px',
    marginTop: '70px',
  }),

  mailBox: css({
    flex: 1,
    marginTop: '70px',
    position: 'relative',
    textAlign: 'center',
    '& > img': {
      width: '27px',
    },
  }),

  mailBoxCircle: css({
    position: 'absolute',
    top: '0px',
    right: '0.7rem',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#FF7246',
    opacity: '0.8',
  }),

  searchIcon: css({
    flex: 1,
    marginTop: '70px',
    '& > img': {
      width: '27px',
      marginRight: '16px',
      marginLeft: '10px',
    },
  }),

  filterIcon: css({
    width: '38px',
    height: '38px',
    marginLeft: '25px',
  }),

  filterSheetSize: css({
    maxWidth: '480px',
    width: '100%',
    margin: '0 auto',
  }),

  writeButton: css({
    position: 'fixed',
    bottom: '111px',
    right: '16px',
    zIndex: 999,
    width: '97px',
    height: '46px',
    flexShrink: 0,
    borderRadius: '23px',
    backgroundColor: '#2E7BEE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '2px 3px 4px rgba(0, 0, 0, 0.25)',
    '& > span': {
      color: '#FFF',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '150%',
      letterSpacing: '-1',
    },
  }),
};
