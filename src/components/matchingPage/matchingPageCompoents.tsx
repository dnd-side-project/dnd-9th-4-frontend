/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LocationPinIcon from 'assets/locationPin.svg';
import Sheet from 'react-modal-sheet';
import Resatrt from 'assets/Restart.svg';

interface MatchingPost {
  id: number;
  title: string;
  sport: string;
  region: string;
  time: string;
  endDate: string;
  image: string;
}

interface MatchingPostListData {
  postList: MatchingPost[];
}

interface MatchingFilterSheetData {
  gender: string | null;
  recruit: string | null;
  onhandleGenderChange: (value: string) => void;
  onhandleRecruitChange: (value: string) => void;
  onClickSelectionInit: () => void;
  onClickApplyFilter: () => void;
}

interface Weekday {
  day: string;
  date: number;
}

interface MatchingPostDateData {
  weekdays: Weekday[];
  date: number;
  onClickDate: (date: number) => void;
}

/*
    [매칭 게시물 목록]
*/
export function MatchingPostList(props: MatchingPostListData) {
  const onClickMatchingPost = (id: number) => {
    console.log('추후에 클릭한 매칭 게시물로 이동', id);
  };
  return (
    <div
      css={css({
        paddingTop: '16px',
        paddingLeft: '19.5px',
        paddingRight: '19.5px',
        paddingBottom: '90px',
      })}
    >
      {props.postList.map((post) => (
        <div
          key={post.id}
          css={css({
            height: '129px',
            borderRadius: '17px',
            background: '#FFF',
            marginBottom: '16px',
            boxShadow: '0px 0px 4px 3px rgba(0, 0, 0, 0.05)',
          })}
        >
          <div
            onClick={() => onClickMatchingPost(post.id)}
            css={css({ display: 'flex', flexDirection: 'row' })}
          >
            <div
              css={css({
                width: '98px',
                height: '108px',
                flexShrink: '0px',
                paddingTop: '10.6px',
                paddingBotton: '10.1px',
                paddingLeft: '11.8px',
              })}
            >
              <img
                src={post.image}
                style={{ width: '100%', height: '100%', borderRadius: '8px' }}
              />
            </div>
            <div css={css({ marginLeft: '12.15px', paddingTop: '14px' })}>
              <div
                css={css({
                  background: '#ECF6FE',
                  color: '#06F',
                  fontFamily: 'Pretendard',
                  fontSize: '11px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '150%',
                  borderRadius: '12.055px',
                  display: 'flex',
                  padding: '1px 11px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  width: '32px',
                  height: '20px',
                })}
              >
                {post.sport}
              </div>
              <div>
                <p
                  css={css({
                    color: '#3A3A3A',
                    fontFamily: 'Pretendard',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '120%',
                    letterSpacing: '-0.5px',
                    marginTop: '11px',
                    marginBottom: '0px',
                    textAlign: 'left',
                  })}
                >
                  {post.title}
                </p>
              </div>
              <div
                css={css({
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '30px',
                })}
              >
                <div css={css({ display: 'flex' })}>
                  <img
                    src={LocationPinIcon} // Assuming you have imported LocationPinIcon from some source.
                    css={css({
                      marginTop: '1.5px',
                      width: '14px',
                      height: '14px',
                    })}
                  />
                  <p
                    css={css({
                      marginTop: '0px',
                      marginBottom: '0px',
                      marginLeft: '3.26px',
                      color: '#676F83',
                      fontFamily: 'Pretendard',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '150%' /* 21px */,
                      letterSpacing: '-1px',
                    })}
                  >
                    {post.region}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/*
    [게시물 필터링]
*/
export function MatchingPostFiltering(props: MatchingFilterSheetData) {
  return (
    <Sheet.Container>
      <Sheet.Header />
      <Sheet.Content>
        <div
          css={css({
            height: '700px',
            paddingLeft: '34px',
            paddingRight: '34px',
          })}
        >
          <div>
            <p
              css={css({
                fontFamily: 'Pretendard',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '-1px',
                textAlign: 'center',
                marginTop: '2px',
                marginBottom: '56px',
              })}
            >
              상세 필터
            </p>
          </div>
          <div
            css={css({
              display: 'flex',
              flexDirection: 'column',
            })}
          >
            <p
              css={css({
                color: '#B2B2B2',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '-0.266px',
                textAlignLast: 'left',
                marginTop: '0px',
                marginBottom: '21px',
              })}
            >
              성별
            </p>
            <label
              css={css({
                color: 'black',
                display: 'flex',
                alignItems: 'center',
              })}
            >
              <p
                css={css({
                  color: props.gender === 'male' ? '#0066FF' : '#939393',
                  flex: 1,
                  textAlign: 'center',
                  fontFamily: 'Pretendard',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '150%',
                  letterSpacing: '-0.304px',
                  textAlignLast: 'left',
                  marginTop: '5px',
                  marginBottom: '5px',
                })}
              >
                남자
              </p>
              <input
                css={css({ width: '19px', height: '19px' })}
                type="radio"
                value="male"
                checked={props.gender === 'male'}
                onChange={() => props.onhandleGenderChange('male')}
              />
            </label>
            <label
              css={css({
                color: '#939393',
                display: 'flex',
                alignItems: 'center',
              })}
            >
              <p
                css={css({
                  color: props.gender === 'female' ? '#0066FF' : '#939393',
                  flex: 1,
                  textAlign: 'center',
                  fontFamily: 'Pretendard',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '150%',
                  letterSpacing: '-0.304px',
                  textAlignLast: 'left',
                  marginTop: '20px',
                  marginBottom: '20px',
                })}
              >
                여자
              </p>
              <input
                css={css({ width: '19px', height: '19px' })}
                type="radio"
                value="female"
                checked={props.gender === 'female'}
                onChange={() => props.onhandleGenderChange('female')}
              />
            </label>
          </div>
          <div
            css={css({
              display: 'flex',
              flexDirection: 'column',
            })}
          >
            <p
              css={css({
                color: '#B2B2B2',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '-0.266px',
                textAlignLast: 'left',
                marginTop: '40px',
                marginBottom: '21px',
              })}
            >
              모집상태
            </p>
            <label
              css={css({
                color: 'black',
                display: 'flex',
                alignItems: 'center',
              })}
            >
              <p
                css={css({
                  color: props.recruit === 'recruiting' ? '#0066FF' : '#939393',
                  flex: 1,
                  textAlign: 'center',
                  fontFamily: 'Pretendard',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '150%',
                  letterSpacing: '-0.304px',
                  textAlignLast: 'left',
                  marginTop: '5px',
                  marginBottom: '5px',
                })}
              >
                모집 중
              </p>
              <input
                css={css({ width: '19px', height: '19px' })}
                type="radio"
                value="recruiting"
                checked={props.recruit === 'recruiting'}
                onChange={() => props.onhandleRecruitChange('recruiting')}
              />
            </label>
            <label
              css={css({
                color: '#939393',
                display: 'flex',
                alignItems: 'center',
              })}
            >
              <p
                css={css({
                  color:
                    props.recruit === 'recruitmentClose'
                      ? '#0066FF'
                      : '#939393',
                  flex: 1,
                  textAlign: 'center',
                  fontFamily: 'Pretendard',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '150%',
                  letterSpacing: '-0.304px',
                  textAlignLast: 'left',
                  marginTop: '20px',
                  marginBottom: '20px',
                })}
              >
                모집 완료
              </p>
              <input
                css={css({ width: '19px', height: '19px' })}
                type="radio"
                value="recruitmentClose"
                checked={props.recruit === 'recruitmentClose'}
                onChange={() => props.onhandleRecruitChange('recruitmentClose')}
              />
            </label>
          </div>
          <div
            css={css({
              display: 'flex',
              flexDirection: 'column',
            })}
          >
            <p
              css={css({
                color: '#B2B2B2',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '-0.266px',
                textAlignLast: 'left',
                marginTop: '40px',
                marginBottom: '21px',
              })}
            >
              종목
            </p>
            <div>
              <div
                css={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  marginBottom: '8px',
                  '& > div': {
                    marginRight: '8px',
                  },
                })}
              >
                <div
                  css={css({
                    border: '1px solid #ECF6FE',
                    background: '#ECF6FE',
                    color: '#06F',
                    fontFamily: 'Pretendard',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '150%',
                    borderRadius: '3px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '102px',
                    height: '35px',
                    flexShrink: 0,
                  })}
                >
                  헬스
                </div>
                <div
                  css={css({
                    border: '1px solid #ECF6FE',
                    background: '#ECF6FE',
                    color: '#06F',
                    fontFamily: 'Pretendard',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '150%',
                    borderRadius: '3px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '102px',
                    height: '35px',
                    flexShrink: 0,
                  })}
                >
                  러닝
                </div>
                <div
                  css={css({
                    border: '1px solid #E5E5E5',
                    color: 'var(--sub, #E5E5E5)',
                    fontFamily: 'Pretendard',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '150%',
                    borderRadius: '3px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '102px',
                    height: '35px',
                    flexShrink: 0,
                  })}
                >
                  수영
                </div>
              </div>
              <div
                css={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  '& > div': {
                    marginRight: '8px',
                  },
                })}
              >
                <div
                  css={css({
                    border: '1px solid #E5E5E5',
                    color: 'var(--sub, #E5E5E5)',
                    fontFamily: 'Pretendard',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '150%',
                    borderRadius: '3px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '102px',
                    height: '35px',
                    flexShrink: 0,
                  })}
                >
                  싸이클
                </div>
                <div
                  css={css({
                    border: '1px solid #E5E5E5',
                    color: 'var(--sub, #E5E5E5)',
                    fontFamily: 'Pretendard',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '150%',
                    borderRadius: '3px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '102px',
                    height: '35px',
                    flexShrink: 0,
                  })}
                >
                  등산
                </div>
                <div
                  css={css({
                    width: '102px',
                  })}
                />
              </div>
            </div>
          </div>
          <div
            css={css({
              marginTop: '46px',
              display: 'flex',
              textAlign: 'center',
            })}
          >
            <div
              css={css({
                flex: '3',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '16px',
                paddingRight: '20px',
              })}
            >
              <img src={Resatrt} css={css({ width: '20px', height: '20px' })} />
              <div
                css={css({
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Pretendard',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '150%',
                  letterSpacing: '-0.266px',
                })}
                onClick={props.onClickSelectionInit}
              >
                선택초기화
              </div>
            </div>
            <div
              css={css({
                flex: '5',
                display: 'flex',
                width: '181px',
                height: '49px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                borderRadius: '8px',
                background: '#06F',
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '150%' /* 24px */,
                letterSpacing: '-0.304px',
              })}
              onClick={props.onClickApplyFilter}
            >
              적용하기
            </div>
          </div>
        </div>
      </Sheet.Content>
    </Sheet.Container>
  );
}

/*
    [게시물 날짜 필터링]
*/
export function MatchingPostDate(props: MatchingPostDateData) {
  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        marginLeft: '16px',
        marginRight: '16px',
        marginTop: '16px',
        marginBottom: '6px',
      })}
    >
      {props.weekdays.map((weekday, index) => (
        <div
          key={index}
          css={css({
            flex: 1,
            textAlign: 'center',
            width: '38px',
            height: '85px',
            margin: '5px',
            backgroundColor:
              weekday.date === props.date ? '#ECF6FE' : 'transparent',
            borderRadius: weekday.date === props.date ? '20.5px' : undefined,
          })}
          onClick={() => props.onClickDate(weekday.date)}
        >
          <div css={css({ paddingTop: '13px' })}>
            <span
              css={css({
                color: weekday.date === props.date ? '#4F4F4F' : '#676F83',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontSize: weekday.date === props.date ? '15px' : '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '150%' /* 21px */,
                letterSpacing: '-0.266px',
              })}
            >
              {weekday.day}
            </span>
          </div>
          <div
            css={css({
              backgroundColor:
                weekday.date === props.date ? '#0066FF' : 'transparent',
              borderRadius: weekday.date === props.date ? '50%' : undefined,
              height: '25px',
              paddingTop: '4px',
              paddingBottom: '3px',
              margin: '5px',
            })}
          >
            <span
              css={css({
                color: weekday.date === props.date ? '#FFFFFF' : '#676F83',
                textAlign: 'center',
                alignItems: 'center',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '150%' /* 21px */,
                letterSpacing: '-0.266px',
              })}
            >
              {weekday.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
