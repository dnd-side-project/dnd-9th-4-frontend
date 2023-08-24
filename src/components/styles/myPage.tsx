import { css } from '@emotion/react';

export const myPageContainer = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const myPageProfileContainer = css({
  marginTop: '54px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '79px',
});

export const myPageProfileTextArea = css({
  fontSize: '20px',
  fontWeight: 700,
  color: '#000000',
  marginLeft: '25px',
});

export const userInfoBoxContainer = css({
  width: '100%',
  height: '164px',
  border: '1px solid #D9D9D9',
  borderRadius: '9px',
  padding: '16px 11px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const userInfoBoxItem = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  '& .left': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#676F83',
    fontSize: '15px',
    fontWeight: 500,

    '& .text': {
      marginLeft: '12px',
    },
  },
  '& .right': {
    color: '#333B4F',
    fontSize: '16px',
    fontWeight: 600,
  },
});

export const myPageDivider = css({
  position: 'absolute',
  backgroundColor: '#F4F4F4',
  top: '174px',
  left: 0,
  right: 0,
  height: '7.5px',
});

export const moreListItemContainer = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: 500,
  color: '#000',
});

export const moreListArea = css({
  height: '220px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '68px',
});

export const userListItemContainer = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '28px',
  '& .profile_img': {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
  },
  '& .content': {
    marginLeft: '14px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    color: '#000',
    fontSize: '14px',
    fontWeight: 700,
    '& .sub_content': {
      color: '#959DB1',
      fontSize: '13px',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      '& .info': {
        marginRight: '8.5px',
        display: 'flex',
        alignItems: 'center',
        '& .text': {
          marginLeft: '2px',
        },
      },
    },
  },
});

export const matchingRecordContentContainer = css({
  flex: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const matchingRecordContentArea = css({
  padding: '5px 6px',
});

export const profileHeaderContainer = css({
  marginTop: '27px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

export const profileHeaderTextArea = css({
  marginTop: '13px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 500,
  color: '#202123',
});

export const profileHeaderTextTitle = css({
  fontSize: '18px',
  fontWeight: 700,
});

export const profileEditBoxContainer = css({
  cursor: 'pointer',
  marginTop: '30px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  border: '1px solid #676F83',
  padding: '7px 141px',
  fontWeight: 600,
});

export const profileUserInfoContainer = css({
  marginTop: '12px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const introduceBoxContainer = css({
  width: '100%',
  marginTop: '15.68px',
});

export const introduceBoxArea = css({
  borderRadius: '9px',
  border: '1px solid #D9D9D9',
  padding: '18px 27px 21px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 500,
  color: '#676F83',
});

export const introduceBoxTextTitle = css({
  color: '#000000',
  marginBottom: '19px',
});

export const profileMateContainer = css({
  marginTop: '41px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '34px',
});

export const profileMateContentArea = css({
  marginTop: '19px',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
});

export const myPageProfileDivider = css({
  position: 'absolute',
  backgroundColor: '#F5F5F5',
  height: '6.5px',
  left: 0,
  right: 0,
  top: 0,
});

export const profileReviewContainer = css({
  marginTop: '37.5px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const reviewBoxContainer = css({
  marginTop: '25px',
  width: '100%',
  marginBottom: '95.78px',
});

export const reviewBoxArea = css({
  borderRadius: '9px',
  border: '1px solid #D9D9D9',
  backgroundColor: '#FFFFFF',
  padding: '23px 22.5px 23px 36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const reviewBoxScoreArea = (score: number) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& .score-text': {
      fontSize: '30px',
      fontWeight: 700,
      color: '#333B4F',
      width: '45px',
      height: '45px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.61px',
    },
    '& .score-img': {
      position: 'relative',
      top: 0,
      bottom: 0,
      marginBottom: '9.65px',

      '& .selected': {
        width: `${score * 20}px`,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
      },
    },
    '& .score-count': {
      fontSize: '12px',
      fontWeight: 600,
      color: '#202123',
    },
  });

export const reviewBoxDivider = css({
  width: '2px',
  height: '83.746px',
  backgroundColor: '#CACFD9',
  marginLeft: '36px',
  marginRight: '22px',
});

export const reviewBoxContentArea = css({
  flex: 1,
  fontSize: '15px',
  fontWeight: 500,
  color: '#676F83',
  height: '80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const editProfileHeaderContainer = css({
  marginTop: '31px',
  paddingLeft: '15px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const editProfileHeaderTextArea = css({
  marginLeft: '24px',
  flex: 1,
  fontSize: '18px',
  fontWeight: 600,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
});

export const editProfileBodyItemContainer = css({
  marginTop: '40px',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& .title': {
    fontSize: '18px',
    fontWeight: 600,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  '& .content': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '12px',
  },
});

export const editProfileHeaderInputArea = css({
  marginTop: '11.6px',
  width: '100%',
});

export const myArticleTopDivider = css({
  marginTop: '16.4px',
  width: '100%',
  backgroundColor: '#CFCFCF',
  height: '1px',
});

export const myArticleItemArea = css({
  width: '100%',
  paddingTop: '25px',
  display: 'flex',
  flexDirection: 'column',

  '& .content': {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    '& .img': {
      borderRadius: '50%',
    },
    '& .text': {
      marginLeft: '23.4px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      '& .title': {
        fontSize: '17px',
        lineHeight: '120%',
        fontWeight: 600,
        color: '#3A3A3A',
        marginBottom: '4px',
      },
      '& .info-area': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      '& .info-item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '8.5px',
        fontSize: '13px',
        fontWeight: 500,
        color: '#676F83',

        '& .item-text': {
          marginLeft: '4px',
        },
      },
    },
  },
  '& .divider': {
    marginTop: '27px',
    width: '100%',
    height: '1px',
    backgroundColor: '#CFCFCF',
  },
});

export const logoutModalArea = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '290px',
  height: '144px',
  borderRadius: '17px',
  backgroundColor: '#FFFFFF',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '150%',
  fontFamily: 'Pretendard',
  display: 'flex',
  flexDirection: 'column',
  padding: '11px 13.5px',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& .text': {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .buttons': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const withDrawContentArea = css({
  marginBottom: '70px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '160%',
  color: '#3A3A3A',
  textAlign: 'center',
  '& .text': {
    marginTop: '9.23px',
    fontSize: '16px',
    fontWeight: 600,
    color: '#959DB1',
  },
  '& .img': {
    marginTop: '49.4px',
  },
});

export const withDrawButtonArea = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const editProfileBottomSheet = css({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '120%',
  fontFamily: 'Pretendard',
  color: '#000000',
});

export const scheduleTag = (state: 'RESERVED' | 'COMPLETED') =>
  css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 600,
    color: state === 'RESERVED' ? '#FF7246' : '#676F83',
    '& .tag': {
      padding: '4px 12px',
      fontSize: '13px',
      backgroundColor:
        state === 'RESERVED' ? 'rgba(255, 135, 97, 0.1)' : '#E5E9EF',
    },
  });
