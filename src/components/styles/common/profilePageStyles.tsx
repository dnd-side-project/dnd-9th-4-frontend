import { css } from '@emotion/react';

export const darkPrevHeader = css({
  width: '100%',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px',
  fontFamily: 'Pretendard',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '150%',
  color: '#FFFFFF',
});

export const profilePageContainer = css({
  backgroundColor: '#25252D',
  color: '#FFFFFF',
});

export const profilePageTopContainer = css({
  width: '100%',
  marginTop: '21px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& .name': {
    marginTop: '12.3px',
    fontSize: '18px',
    fontWeight: 700,
  },
  '& .basic': {
    fontSize: '14px',
  },
});

export const profilePageTabBarContainer = css({
  width: '100%',
  marginTop: '27.65px',
});

export const profilePageTabContentContainer = css({
  backgroundColor: '#FFFFFF',
  width: '100%',
  flex: 1,
});

export const profilePageProfileTabArea = css({
  color: '#000000',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '150%',
  paddingTop: '25.87px',
  paddingBottom: '70px',
  '& .user-info': {
    margin: '0 16px 15.68px',
  },
  '& .introduce': {
    margin: '0 16px 30px',
  },
  '& .mate': {
    margin: '0 16px 30.5px',
  },
  '& .title': {
    marginBottom: '19px',
  },
  '& .divider': {
    width: '100%',
    height: '6.4px',
    backgroundColor: '#F5F5F5',
    marginBottom: '15.68px',
  },
  '& .review': {
    margin: '0 16.7px',
  },
});

export const profilePageArticleTabArea = css({
  color: '#000000',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '150%',
  padding: '25.87px 16px 70px',
});

export const writeReviewPageContentContainer = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto 0',
  '& .question': {
    fontSize: '18px',
    marginTop: '27px',
    fontWeight: 500,
    lineHeight: '150%',
  },
  '& .rating': {
    marginTop: '27.87px',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const checkListStyles = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: '26.42px',
  '& .text': {
    flex: 1,
    marginLeft: '24px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '120%',
    color: '#333B4F',
  },
});

export const checkListContainer = css({
  margin: '35.13px 16px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export const writeReviewPageDivider = css({
  margin: '27.96px 16px 0',
  width: '100%',
  height: '0.5px',
  backgroundColor: '#CFCFCF',
});

export const writeReviewRatingMessage = css({
  marginTop: '22.12px',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '150%',
  color: '#7A7A7A',
});
