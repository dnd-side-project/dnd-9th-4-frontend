/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import {
  NaviBarTitle,
  BottomButton,
} from 'components/matchingPage/matchingPostWritePageComponents';
import { useNavigate } from 'react-router-dom';

function sportSytleInterestPage() {
  const navigate = useNavigate();

  const onClickNextButton = () => {
    navigate('/post/detail');
  };
  return (
    <div>
      <NaviBarTitle title="운동스타일/관심사" />
      <div
        css={css({
          height: '1px',
          backgroundColor: '#E2E2E2',
          marginBlock: '10px',
        })}
      />
      <div css={css({ paddingInline: '24px' })}>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <div
            css={css({
              display: 'flex',
              '& > p': {
                fontFamily: 'Pretendard',
                textAlign: 'center',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '120%',
                letterSpacing: '-0.266px',
                textAlignLast: 'left',
                //marginBottom: '21px',
              },
            })}
          >
            <p
              css={css({
                color: '#3A3A3A',
                marginTop: '20px',
                fontSize: '18px',
              })}
            >
              운동스타일
            </p>
            <p
              css={css({
                color: '#959DB1',
                marginTop: '24px',
                marginLeft: '17px',
                fontSize: '13px',
              })}
            >
              중복선택 가능
            </p>
          </div>
          <div
            css={css({
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
            })}
          >
            <div>
              <div>운동만 집중해서</div>
              <div>서로 도우면서 보조</div>
            </div>
            <div>
              <div>편안하고 친근한 분위기</div>
              <div>저중량 고반복</div>
            </div>
          </div>
        </div>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'column',
            marginTop: '40px',
          })}
        >
          <div
            css={css({
              display: 'flex',
              '& > p': {
                fontFamily: 'Pretendard',
                textAlign: 'center',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '120%',
                letterSpacing: '-0.266px',
                textAlignLast: 'left',
                //marginBottom: '21px',
              },
            })}
          >
            <p
              css={css({
                color: '#3A3A3A',
                marginTop: '20px',
                fontSize: '18px',
              })}
            >
              관심사
            </p>
            <p
              css={css({
                color: '#959DB1',
                marginTop: '24px',
                marginLeft: '17px',
                fontSize: '13px',
              })}
            >
              중복선택 가능
            </p>
          </div>
          <div
            css={css({
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
            })}
          >
            <div>
              <div>체력 키우기</div>
              <div>다이어트</div>
              <div>유산소</div>
            </div>
            <div>
              <div>무산소</div>
              <div>바디프로필</div>
              <div>식단조절</div>
            </div>
            <div>
              <div>근력 향상</div>
              <div>건강</div>
            </div>
          </div>
        </div>
      </div>
      <BottomButton title="다음" onClickButton={onClickNextButton} />
    </div>
  );
}

export default sportSytleInterestPage;
