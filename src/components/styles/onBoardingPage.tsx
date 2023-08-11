import { css } from '@emotion/react';

export const onBoardingBodyArea = css({
  width: '100%',
  flex: 1,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
});

export const onBoardingProfileText = css({
  marginTop: '67px',
  textAlign: 'center',
  fontWeight: 700,
  fontSize: '20px',
});

export const onBoardingProfileImg = css({
  marginTop: '38px',
  marginBottom: '36px',
  width: '179px',
  height: '179px',
});

export const selectProfileHeader = css({
  fontSize: '13px',
  color: '#676F83',
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: '27px',
  '.title': {
    fontSize: '18px',
    color: '#000',
    fontWeight: 700,
    marginBottom: '10px',
  },
});

export const selectProfileImg = css({
  width: '109px',
  height: '109px',
  marginBottom: '11px',
});

export const selectProfileListArea = css({
  fontSize: '14px',
  fontWeight: 500,
  color: '#676F83',
  width: '330px',
});

export const selectProfileListStyle = css({
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  width: '330px',
});

export const selectProfileListSlider = css({
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(4,52px)',
  gridTemplateRows: 'repeat(2,52px)',
  columnGap: '36px',
  rowGap: '25px',
  width: '100%',
});

export const progressBg = css({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '62px',
  height: '4px',
  backgroundColor: '#DEDEDE',
  overflow: 'hidden',
});

export const progressInner = (value: number) =>
  css({
    width: `${value * 14.3}%`,
    height: '100%',
    backgroundColor: '#0066FF',
  });

export const question = (isEssential: boolean) =>
  css({
    width: '100%',
    marginTop: '47px',
    fontSize: '24px',
    color: '#3A3A3A',
    lineHeight: '150%',
    fontWeight: 500,
    '&:after': {
      content: isEssential ? '"*"' : '""',
      color: '#407CF6',
      fontWeight: 700,
    },
  });

export const questionKeyword = css({
  fontWeight: 700,
});

export const genderBoxArea = css({
  marginTop: '29px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const genderArea = css({
  flex: 1,
  height: '164.5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '9px',
  backgroundColor: '#F9FAFC',
});

export const healthLabel = css({
  margin: '17px auto 17px 0',
});

export const selectRectangle = css({
  flex: 1,
  borderRadius: '5px',
  border: '1px solid #959DB1',
  padding: '11px 16px',
  fontFamily: 'Pretendard',
  color: '#959DB1',
  fontSize: '16px',
  fontWeight: 500,
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const selectPeriodContainer = css({
  width: '100%',
  marginTop: '31px',
  display: 'flex',
  flexDirection: 'row',
});

export const mbtiArea = css({
  marginTop: '31px',
});

export const subQuestionHeader = css({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  marginBottom: '16px',
});

export const subQuestion = css({
  color: '#3A3A3A',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '120%',
  marginRight: '14px',
});
