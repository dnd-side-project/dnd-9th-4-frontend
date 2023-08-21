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
    margin: '0 22px',
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
    lineHeight: '150%',
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
    lineHeight: '150%',
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
      marginTop: '13px',
      textAlign: 'center',
      outline: 'none',
      fontFamily: 'Pretendard',
      fontSize: '16px',
      fontStyle: 'normal',
      lineHeight: '150%',
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
    lineHeight: '150%',
    letterSpacing: '-0.304px',
  }),

  tagContainer: css({
    display: 'flex',
    alignItems: 'center',
  }),

  tagPlus: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-30px',
    fontSize: '25px',
    textAlign: 'center',
    marginTop: '5px',
    fontWeight: '600',
    color: '#CACFD9',
  }),

  tagExplan: css({
    color: 'var(--grey-04, var(--grey-04, #959DB1))',
    fontFamily: 'Pretendard',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.247px',
    marginLeft: '3px',
    marginTop: '10px',
    marginBottom: '16.45px',
  }),

  tagBox: css({
    background: '#ECF6FE',
    borderRadius: '8px',
    marginBottom: '18.12px',
    gap: '8px',
  }),

  tagButton: css({
    marginTop: '16.5px',
    marginLeft: '11px',
    height: '29px',
    padding: '4px 12px',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '19.35px',
    border: '1px solid var(--main-01, #0074FF)',
    background: '#ECF6FE',
    display: 'inline-flex',
    justifyContent: 'center',
    color: '#007BFF',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.266px',
  }),

  tagBlueBox: css({
    width: '9px',
    height: '9px',
    backgroundColor: '#007BFF',
    borderRadius: '50%',
  }),

  commendTag: css({
    color: '#3A3A3A',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.304px',
    marginBottom: '19px',
  }),

  commendTagList: css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  }),

  commendTagButton: css({
    display: 'inline-flex',
    padding: '4px 12px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '19.35px',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.266px',
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
