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
