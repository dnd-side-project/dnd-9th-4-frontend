/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const matchingPageStyles = {
  displayFlex: css({
    display: 'flex',
  }),

  filterContainer: css({
    display: 'flex',
    marginLeft: '17px',
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

  filterTimeBox: css({
    marginLeft: 'auto',
    marginRight: '18px',
    display: 'flex',
    alignItems: 'center',
  }),

  filterText: css({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'var(--grey-04, var(--grey-04, #959DB1))',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '150%',
    letterSpacing: '-0.247px',
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

  matchingList: css({
    marginBottom: '80px',
    marginInline: '17px',
  }),

  writeButton: css({
    position: 'fixed',
    bottom: '111px',
    right: '16px',
    zIndex: 999,
  }),
};
