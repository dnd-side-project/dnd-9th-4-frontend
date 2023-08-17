/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
//import LocationPinIcon from 'assets/locationPin.svg';
import Sheet from 'react-modal-sheet';
//import { useNavigate } from 'react-router-dom';
import { InitAndApplyButton } from 'components/common/commonComponents';

// interface MatchingPost {
//   id: number;
//   title: string;
//   sport: string;
//   region: string;
//   time: string;
//   endDate: string;
//   image: string;
// }

// interface MatchingPostListData {
//   postList: MatchingPost[];
// }

interface MatchingFilterSheetData {
  gender: string | null;
  recruit: string | null;
  sports: string[];
  onhandleGenderChange: (value: string) => void;
  onhandleRecruitChange: (value: string) => void;
  onhandleSportChange: (value: string) => void;
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
// export function MatchingPostList(props: MatchingPostListData) {
//   const navigate = useNavigate();
//   const onClickMatchingPost = (id: number) => {
//     console.log('추후에 클릭한 매칭 게시물로 이동', id);
//     navigate(`/post/${id}`);
//     window.scrollTo(0, 0);
//   };
//   return (
//     <div
//       css={css({
//         paddingTop: '16px',
//         paddingLeft: '19.5px',
//         paddingRight: '19.5px',
//         paddingBottom: '90px',
//       })}
//     >
//       {props.postList.map((post) => (
//         <div
//           key={post.id}
//           css={css({
//             height: '129px',
//             borderRadius: '17px',
//             background: '#FFF',
//             marginBottom: '16px',
//             boxShadow: '0px 0px 4px 3px rgba(0, 0, 0, 0.05)',
//           })}
//         >
//           <div
//             onClick={() => onClickMatchingPost(post.id)}
//             css={css({ display: 'flex', flexDirection: 'row' })}
//           >
//             <div
//               css={css({
//                 width: '98px',
//                 height: '108px',
//                 flexShrink: '0px',
//                 paddingTop: '10.6px',
//                 paddingBotton: '10.1px',
//                 paddingLeft: '11.8px',
//               })}
//             >
//               <img
//                 src={post.image}
//                 style={{ width: '100%', height: '100%', borderRadius: '8px' }}
//               />
//             </div>
//             <div css={css({ marginLeft: '12.15px', paddingTop: '14px' })}>
//               <div
//                 css={css({
//                   background: '#ECF6FE',
//                   color: '#06F',
//                   fontFamily: 'Pretendard',
//                   fontSize: '11px',
//                   fontStyle: 'normal',
//                   fontWeight: '700',
//                   lineHeight: '150%',
//                   borderRadius: '12.055px',
//                   display: 'flex',
//                   padding: '1px 11px',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   gap: '10px',
//                   width: '32px',
//                   height: '20px',
//                 })}
//               >
//                 {post.sport}
//               </div>
//               <div>
//                 <p
//                   css={css({
//                     color: '#3A3A3A',
//                     fontFamily: 'Pretendard',
//                     fontSize: '16px',
//                     fontStyle: 'normal',
//                     fontWeight: 600,
//                     lineHeight: '120%',
//                     letterSpacing: '-0.5px',
//                     marginTop: '11px',
//                     marginBottom: '0px',
//                     textAlign: 'left',
//                   })}
//                 >
//                   {post.title}
//                 </p>
//               </div>
//               <div
//                 css={css({
//                   display: 'flex',
//                   flexDirection: 'row',
//                   marginTop: '30px',
//                 })}
//               >
//                 <div css={css({ display: 'flex' })}>
//                   <img
//                     src={LocationPinIcon} // Assuming you have imported LocationPinIcon from some source.
//                     css={css({
//                       marginTop: '1.5px',
//                       width: '14px',
//                       height: '14px',
//                     })}
//                   />
//                   <p
//                     css={css({
//                       marginTop: '0px',
//                       marginBottom: '0px',
//                       marginLeft: '3.26px',
//                       color: '#676F83',
//                       fontFamily: 'Pretendard',
//                       fontSize: '12px',
//                       fontStyle: 'normal',
//                       fontWeight: 500,
//                       lineHeight: '150%' /* 21px */,
//                       letterSpacing: '-1px',
//                     })}
//                   >
//                     {post.region}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

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
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '-1px',
                textAlign: 'center',
                marginTop: '2px',
                marginBottom: '21px',
              })}
            >
              상세 필터
            </p>
          </div>
          <div
            css={css({
              height: '1px',
              backgroundColor: '#E2E2E2',
              marginBlock: '10px',
              marginBottom: '35px',
            })}
          />
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
                fontSize: '16px',
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
                  color: props.gender === '남자' ? '#0066FF' : '#939393',
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
                value="남자"
                checked={props.gender === '남자'}
                onChange={() => props.onhandleGenderChange('남자')}
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
                  color: props.gender === '여자' ? '#0066FF' : '#939393',
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
                value="여자"
                checked={props.gender === '여자'}
                onChange={() => props.onhandleGenderChange('여자')}
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
                fontSize: '16px',
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
                  color: props.recruit === '모집중' ? '#0066FF' : '#939393',
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
                모집중
              </p>
              <input
                css={css({ width: '19px', height: '19px' })}
                type="radio"
                value="모집중"
                checked={props.recruit === '모집중'}
                onChange={() => props.onhandleRecruitChange('모집중')}
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
                  color: props.recruit === '모집완료' ? '#0066FF' : '#939393',
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
                모집완료
              </p>
              <input
                css={css({ width: '19px', height: '19px' })}
                type="radio"
                value="모집완료"
                checked={props.recruit === '모집완료'}
                onChange={() => props.onhandleRecruitChange('모집완료')}
              />
            </label>
          </div>
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
                  fontWeight: 700,
                  lineHeight: '150%',
                  letterSpacing: '-0.266px',
                  textAlignLast: 'left',
                  //marginBottom: '21px',
                },
              })}
            >
              <p
                css={css({
                  color: '#B2B2B2',
                  marginTop: '40px',
                  fontSize: '16px',
                })}
              >
                종목
              </p>
              <p
                css={css({
                  color: '#959DB1',
                  marginTop: '42px',
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
                <div
                  onClick={() => props.onhandleSportChange('헬스')}
                  className={props.sports.includes('헬스') ? 'selected' : ''}
                >
                  헬스
                </div>
                <div
                  onClick={() => props.onhandleSportChange('러닝')}
                  className={props.sports.includes('러닝') ? 'selected' : ''}
                >
                  러닝
                </div>
                <div
                  onClick={() => props.onhandleSportChange('수영')}
                  className={props.sports.includes('수영') ? 'selected' : ''}
                >
                  수영
                </div>
                <div
                  onClick={() => props.onhandleSportChange('등산')}
                  className={props.sports.includes('등산') ? 'selected' : ''}
                >
                  등산
                </div>
              </div>
              <div>
                <div
                  onClick={() => props.onhandleSportChange('싸이클')}
                  className={props.sports.includes('싸이클') ? 'selected' : ''}
                >
                  싸이클
                </div>
                <div
                  onClick={() => props.onhandleSportChange('기타')}
                  className={props.sports.includes('기타') ? 'selected' : ''}
                >
                  기타
                </div>
              </div>
            </div>
          </div>
          <InitAndApplyButton
            onClickSelectionInit={props.onClickSelectionInit}
            onClickApply={props.onClickApplyFilter}
          />
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
        marginTop: '5px',
        marginBottom: '15px',
      })}
    >
      {props.weekdays.map((weekday, index) => (
        <div
          key={index}
          css={css({
            flex: 1,
            textAlign: 'center',
            width: '38px',
            height: '70px',
            margin: '5px',
            backgroundColor:
              weekday.date === props.date ? '#ECF6FE' : 'transparent',
            borderRadius: weekday.date === props.date ? '8px' : undefined,
          })}
          onClick={() => props.onClickDate(weekday.date)}
        >
          <div css={css({ paddingTop: '10px' })}>
            <span
              css={css({
                color: weekday.date === props.date ? '#306BF6' : '#939393',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontSize: weekday.date === props.date ? '15px' : '14px',
                fontStyle: 'normal',
                fontWeight: weekday.date === props.date ? 600 : 500,
                lineHeight: '150%' /* 21px */,
                letterSpacing: '-0.266px',
              })}
            >
              {weekday.day}
            </span>
          </div>
          <div
            css={css({
              // backgroundColor:
              //   weekday.date === props.date ? '#0066FF' : 'transparent',
              // borderRadius: weekday.date === props.date ? '50%' : undefined,
              height: '25px',
              paddingTop: '4px',
              paddingBottom: '3px',
              margin: '5px',
            })}
          >
            <span
              css={css({
                color: weekday.date === props.date ? '#306BF6' : '#939393',
                textAlign: 'center',
                alignItems: 'center',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: weekday.date === props.date ? 600 : 500,
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
