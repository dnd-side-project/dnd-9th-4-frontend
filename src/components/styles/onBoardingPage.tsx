import { css } from '@emotion/react';

export const onBoardingBodyArea = css({
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
  marginBottom: '30px',
  width: '330px',
});

export const selectProfileListSlider = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,52px)',
  gridTemplateRows: 'repeat(2,52px)',
  columnGap: '36px',
  rowGap: '25px',
  width: '100%',
});

export const selectProfileNavigator = (isCurrent: boolean) =>
  css({
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: isCurrent ? '#0074FF' : '#D9D9D9',
  });

export const progressBg = css({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '62px',
  height: '4px',
  backgroundColor: '#DEDEDE',
  overflow: 'hidden',
  zIndex: 1,
});

export const progressInner = (value: number) =>
  css({
    width: `${value * 12.5}%`,
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

  '& .content-box': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 500,
    color: '#000000',
  },
});

export const genderArea = css({
  width: '100%',
  height: '164.5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '9px',
  backgroundColor: '#F9FAFC',
  marginBottom: '7px',
  '&.active': {
    border: '2px solid #0066FF',
  },
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
  color: '#000000',
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

export const mbtiSectionContainer = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 600,
  lineHeight: '120%',
  color: '#676F83',
  marginBottom: '30px',
  '& .box-area': {
    marginTop: '12px',
    display: 'flex',
    width: '100%',
  },
});

export const mbtiSectionBoxArea = (isActive: boolean) =>
  css({
    flex: 1,
    height: '46px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: isActive ? '1px solid #0074FF' : '1px solid #959DB1',
    borderRadius: '5px',
    color: isActive ? '#0074FF' : '#959DB1',
    fontSize: '18px',
    fontWeight: 600,
    backgroundColor: isActive ? '#ECF6FE' : '#FFFFFF',
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

export const locationAgree = css({
  fontSize: '16px',
  fontWeight: 500,
  flex: 1,
});

export const infoContainer = css({
  marginTop: '19px',
});

export const infoIconArea = css({
  height: '100%',
  marginTop: '2px',
});

export const infoTextArea = css({
  color: '#959DB1',
  fontSize: '14px',
  fontWeight: 500,
  flex: 1,
  marginLeft: '7px',
});

export const finishContainer = css({
  marginTop: '147.18px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '& .title': {
    marginTop: '20.22px',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '160%',
    color: '#3A3A3A',
  },
  '& .text': {
    marginTop: '3.75px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '160%',
    color: '#959DB1',
  },
});

export const finishTextArea = css({});

export const sliderContainer = css({
  overflow: 'hidden',
});

export const sliderArea = css({
  display: 'flex',
});

export const slider = css({
  margin: '0 50px 0 14px',
  display: 'flex',
  flex: '0 0 80%',
  justifyContent: 'center',
  alignItems: 'center',
  '&:nth-child(2)': {
    marginRight: 0,
  },
});

export const slideDots = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '22px 0 27px 0',
});

export const slideDotStyle = (isCurrentIndex: boolean) =>
  css({
    width: '7px',
    height: '7px',
    padding: 0,
    margin: 0,
    borderRadius: '50%',
    borderWidth: 0,
    backgroundColor: isCurrentIndex ? '#0074FF' : '#D9D9D9',
    '&:first-child': {
      marginRight: '12px',
    },
  });

export const checkNicknameContainer = (isComplete: boolean) =>
  css({
    display: isComplete ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '13px',
    fontSize: '14px',
    fontWeight: 400,
    color: '#959DB1',
  });

export const checkNicknameIcon = css({
  marginBottom: '15px',
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  backgroundColor: '#0066FF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const exercisePeriodContentContainer = css({
  fontSize: '16px',
  color: '#000000',
  fontWeight: 700,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const exercisePeriodPickerContainer = css`
  position: relative;
  width: 100%;
  height: 126px;
  border: 1px solid #a5a5a5;
  margin-top: 47.5px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const exercisePeriodPickerArea = css({
  display: 'flex',
});

export const selectStyleContent = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingRight: '70px',
});

export const skipStyle = css({
  position: 'absolute',
  right: 16,
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: 600,
  color: '#676F83',
});
