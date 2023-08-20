/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const matchingPostWriteStyles = {
  styleInterestBody: css({
    paddingInline: '24px',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '40px',
    },
  }),

  styleInterestButton: css({
    '& > div': {
      display: 'flex',
      textAlign: 'center',
      marginTop: '12px',
      '& > div': {
        marginRight: '11px',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '150%',
        borderRadius: '19.35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '7px 16px',
        flexShrink: 0,
        border: '1px solid #959DB1',
        color: '#959DB1',
        fontWeight: '500',
        letterSpacing: '-0.304px',
        '&.selected': {
          border: '1px solid #0074FF',
          background: '#ECF6FE',
          color: '#0074FF',
          fontWeight: '600',
        },
      },
    },
  }),
};

export const matchingDetailWrtieStyles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '22px',
    marginRight: '22px',
  }),

  titleInput: css({
    borderRadius: '6px',
    width: '100%',
    height: '47px',
    border: '0.75px solid #D1D3D7',
    marginTop: '13px',
    paddingLeft: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    // fontWeight: 400,
    lineHeight: '150%', // "24px"
    letterSpacing: '-0.304px',
  }),

  bodyInput: css({
    borderRadius: '6px',
    width: '100%',
    height: '150px',
    border: '0.75px solid #D1D3D7',
    marginTop: '13px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '12px',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    //fontWeight: 400,
    lineHeight: '150%', // "24px"
    letterSpacing: '-0.304px',
  }),

  bodyLen: css({
    color: '#C0C0C0',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '150%', // "24px"
    letterSpacing: '-0.8px',
    textAlign: 'right',
    marginRight: '3px',
  }),

  runTimeInput: css({
    display: 'flex',
    textAlign: 'end',
    justifyContent: 'center',
    alignItems: 'center',
    '& > input': {
      flex: 1,
      borderRadius: '6px',
      width: '60px',
      height: '47px',
      //border: '0.75px solid #D1D3D7',
      marginTop: '13px',
      textAlign: 'center',
      //paddingLeft: '25px',
      outline: 'none',
      //transition: 'border-color 0.3s ease-in-out',
      fontFamily: 'Pretendard',
      fontSize: '16px',
      fontStyle: 'normal',
      //fontWeight: 400,
      lineHeight: '150%', // "24px"
      letterSpacing: '-0.8px',
    },
  }),

  regionInput: css({
    borderRadius: '6px',
    width: '100%',
    height: '47px',
    border: '0.75px solid #D1D3D7',
    marginTop: '13px',
    paddingLeft: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
    color: '#CACFD9',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    //fontWeight: 400,
    lineHeight: '150%', // "24px"
    letterSpacing: '-0.304px',
  }),

  bottomSheetTitle: css({
    color: '#000',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '120%',
    letterSpacing: '-0.304px',
    marginBottom: '20px',
  }),
};
