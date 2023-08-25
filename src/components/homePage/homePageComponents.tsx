/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LocationPinIcon from 'assets/postListIcon/Location.svg';
import schedule from 'assets/postListIcon/Schedule.svg';
import Exercise from 'assets/postListIcon/Exercise.svg';
import { useNavigate } from 'react-router-dom';
import HomePageTopLogo from 'assets/homePage/HomePageTopLogo.svg';
import NewPleMateListBoxPng from 'assets/homePage/NewPleMateListBox.png';
import MingcuteRightLine from 'assets/mingcute_right-line.svg';
import EmptySchedule from 'assets/homePage/EmptySchedule.svg';
import { NewPleMateCarousel } from 'components/homePage/NewPleMateCarousel';
import { MatchingScheduleCarousel } from 'components/homePage/MatchingScheduleCarousel';

interface HomeTopScreenData {
  nickname: string;
  text: string;
}

/*
    [상단 로고 및 사용자 인사]
*/
export function HomeTopScreen(props: HomeTopScreenData) {
  return (
    <div
      css={css({
        marginLeft: '5px',
      })}
    >
      <img
        src={HomePageTopLogo}
        css={css({
          width: '132.682px',
          height: '20.528px',
          marginTop: '50px',
        })}
      />
      <div
        css={css({
          marginTop: '28px',
        })}
      >
        <div>
          <p
            css={css({
              fontFamily: 'Pretendard',
              fontSize: '1.375rem',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '130%',
              letterSpacing: '-0.418px',
            })}
          >
            {props.nickname}님,
            <br />
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

interface MatchingPost {
  id: number;
  title: string;
  sport: string;
  region: string;
  time: string;
  runtime: string;
  image: string;
}

interface MatchingPostListData {
  postList: MatchingPost[];
}

/*
    [매칭 게시물 목록]
*/
export function MatchingPostList(props: MatchingPostListData) {
  const navigate = useNavigate();

  const onClickMatchingPost = (id: number) => {
    navigate(`/post/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      css={css({
        paddingTop: '16.09px',
        // paddingLeft: '15px',
        // paddingRight: '15px',
      })}
    >
      {props.postList.length == 0 ? (
        <PostNo />
      ) : (
        props.postList.map((post) => (
          <div
            key={post.id}
            css={css({
              height: '101.851px',
              borderRadius: '17px',
              background: '#FFF',
              //marginBottom: '16px',
            })}
          >
            <div
              onClick={() => onClickMatchingPost(post.id)}
              css={css({ display: 'flex', flexDirection: 'row' })}
            >
              <div
                css={css({
                  width: '70px',
                  height: '70px',
                  flexShrink: '0px',
                  paddingTop: '10.6px',
                  paddingBotton: '10.1px',
                  paddingLeft: '11.8px',
                })}
              >
                <img
                  src={post.image}
                  style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                />
              </div>
              <div css={css({ marginLeft: '12.15px', paddingTop: '14px' })}>
                <div>
                  <p
                    css={css({
                      color: '#3A3A3A',
                      fontFamily: 'Pretendard',
                      fontSize: '17px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '120%',
                      letterSpacing: '-0.323px',
                      marginTop: '2px',
                      marginBottom: '0px',
                    })}
                  >
                    {post.title}
                  </p>
                </div>
                <div
                  css={css({
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '16px',
                    '& > div': {
                      display: 'flex',
                      ' > img': {
                        marginTop: '1.5px',
                        width: '14px',
                        height: '14px',
                      },
                      ' > p': {
                        marginTop: '0px',
                        marginBottom: '0px',
                        marginLeft: '1px',
                        marginRight: '7px',
                        color: '#676F83',
                        fontFamily: 'Pretendard',
                        fontSize: '13px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '150%' /* 21px */,
                        letterSpacing: '-0.247px',
                      },
                    },
                  })}
                >
                  <div>
                    <img src={LocationPinIcon} />
                    <p>{post.region}</p>
                  </div>
                  <div>
                    <img src={schedule} />
                    <p>{post.runtime.split(' ')[0]}</p>
                  </div>
                  <div>
                    <img src={Exercise} />
                    <p>{post.sport}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              css={css({
                height: '1px',
                backgroundColor: '#E2E2E2',
                marginBlock: '10px',
                marginTop: '20px',
              })}
            />
          </div>
        ))
      )}
    </div>
  );
}

interface TitleHeaderData {
  title: string;
  color: string;
  margin?: string;
  paddingTop?: string;
}

/*
    [타이틀 헤더]
*/
export function TitleHeader(props: TitleHeaderData) {
  return (
    <p
      css={css({
        color: props.color,
        fontFamily: 'Pretendard',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '150%',
        letterSpacing: '-0.342px',
        marginLeft: props.margin,
        paddingTop: props.paddingTop,
      })}
    >
      {props.title}
    </p>
  );
}

interface SubTitleHeaderData {
  text: string;
}

/*
  [서브 타이틀 헤더]
*/
export function SubTitleHeader(props: SubTitleHeaderData) {
  return (
    <div
      css={css({
        color: 'var(--grey-03, var(--grey-03, #676F83))',
        fontFamily: 'Pretendard',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '150%', // 문자열 형태로 표기
        letterSpacing: '-0.266px',
        marginLeft: '8px',
        marginTop: '4px',
      })}
    >
      {props.text}
    </div>
  );
}

interface Profile {
  memberId: number;
  username: string;
  profileImg: string;
}

interface NewPleMateListData {
  matelist: Profile[];
}

/*
  [내 주변 뉴플메이트(수정)]
*/
export function NewPleMateListBox(props: NewPleMateListData) {
  return (
    <div
      css={{
        backgroundImage: `url(${NewPleMateListBoxPng})`,
        backgroundSize: 'cover',
      }}
    >
      <TitleHeader
        title="내 주변 뉴플메이트"
        color="white"
        margin="21px"
        paddingTop="48px"
      />
      {props.matelist.length == 0 ? (
        <div
          css={css({
            height: '142px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gray-08, #949494)',
            fontFamily: 'Pretendard',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '120%', // '16.8px'
            letterSpacing: '-0.266px',
            paddingBottom: '20px',
          })}
        >
          내 주변 뉴플메이트가 없어요.
        </div>
      ) : (
        <NewPleMateCarousel matelist={props.matelist} />
      )}
    </div>
  );
}

interface scheduleData {
  id: number;
  dDay: number;
  runTime: string;
  title: string;
  region: string;
  sport: string;
}

interface MatchingScheduleData {
  onClickArrow?: () => void;
  nickname: string;
  count: number;
  scheduleDataList: scheduleData[];
}

/*
  [매칭 일정]
*/
export function MatchingSchedule(props: MatchingScheduleData) {
  return (
    <div css={css({ marginBottom: '20px' })}>
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '50px',
        })}
      >
        <TitleHeader title="나의 매칭 일정" color="black" margin="8px" />
        <div>
          <img src={MingcuteRightLine} onClick={props.onClickArrow} />
        </div>
      </div>
      {props.count == 0 ? (
        <SheduleNo />
      ) : (
        <ScheduleYes
          nickname={props.nickname}
          count={props.count}
          scheduleDataList={props.scheduleDataList}
        />
      )}
    </div>
  );
}

/*
  [매칭 일정 있음 O]
*/
export function ScheduleYes(props: MatchingScheduleData) {
  return (
    <>
      <SubTitleHeader
        text={`${props.nickname}님 이번 주 일정이 ${props.count}개 있어요!`}
      />
      <MatchingScheduleCarousel scheduleDataList={props.scheduleDataList} />
    </>
  );
}

/*
  [매칭 일정 없음 X]
*/
export function SheduleNo() {
  return (
    <div css={css({ textAlign: 'center' })}>
      <img src={EmptySchedule} />
      <div
        css={css({
          marginTop: '25px',
          color: 'var(--gray-08, #949494)',
          textAlign: 'center',
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '150%', // '21px'
          letterSpacing: '-0.266px',
        })}
      >
        이번 주 매칭 일정이 없어요.
      </div>
    </div>
  );
}

/*
  [맞춤 추천 없음 X]
*/
export function PostNo() {
  return (
    <div css={css({ textAlign: 'center' })}>
      <img src={EmptySchedule} />
      <div
        css={css({
          marginTop: '25px',
          color: 'var(--gray-08, #949494)',
          textAlign: 'center',
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '150%', // '21px'
          letterSpacing: '-0.266px',
        })}
      >
        게시물이 없어요.
      </div>
    </div>
  );
}

interface RecommendationData {
  nickname: string;
  postList: MatchingPost[];
  onClickArrow: () => void;
}

/*
  [맞춤 추천]
*/
export function Recommendation(props: RecommendationData) {
  return (
    <div>
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '50px',
        })}
      >
        <TitleHeader
          title={`${props.nickname}님을 위한 맞춤 추천`}
          color="black"
          margin="8px"
        />
        <div>
          <img src={MingcuteRightLine} onClick={props.onClickArrow} />
        </div>
      </div>
      <SubTitleHeader
        text={`${props.nickname}님의 관심 운동을 기반으로 한 추천게시글 입니다!`}
      />
      <MatchingPostList postList={props.postList} />
    </div>
  );
}
