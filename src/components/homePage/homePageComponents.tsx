/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LocationPinIcon from 'assets/postListIcon/Location.svg';
import schedule from 'assets/postListIcon/Schedule.svg';
import Exercise from 'assets/postListIcon/Exercise.svg';
import { useNavigate } from 'react-router-dom';
import HomePageTopLogo from 'assets/homePage/HomePageTopLogo.svg';
import NewPleMateListBoxPng from 'assets/homePage/NewPleMateListBox.png';
import MingcuteRightLine from 'assets/mingcute_right-line.svg';

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
  endDate: string;
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
      {props.postList.map((post) => (
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
                  <p>{post.endDate}</p>
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
      ))}
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
  nickname: string;
  profileImg: string;
}

interface NewPleMateListData {
  matelist: Profile[];
}

/*
    [내 주변 뉴플메이트 프로필&닉네임]
*/
export function NewPleMateList(props: NewPleMateListData) {
  const onClickNewPleMate = (memberId: number) => {
    console.log('추후에 클릭한 회원으로 이동', memberId);
  };
  return (
    <div
      css={css({
        paddingTop: '22px',
        paddingLeft: '20.25px',
        paddingBottom: '31px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        '& > div': {
          marginRight: '10.74px',
        },
      })}
    >
      {props.matelist.map((profile) => (
        <div
          onClick={() => onClickNewPleMate(profile.memberId)}
          key={profile.memberId}
        >
          <img
            src={profile.profileImg}
            alt={profile.nickname}
            css={css({
              width: '70px',
              height: '70px',
              borderRadius: '70px',
              flexShrink: 0,
            })}
          />
          <p
            css={css({
              marginTop: '4px',
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Pretendard',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '150%',
              letterSpacing: '-0.266px',
            })}
          >
            {profile.nickname}
          </p>
        </div>
      ))}
    </div>
  );
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
      <NewPleMateList matelist={props.matelist} />
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
  onClickArrow: () => void;
  nickname: string;
  count: string;
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
      <SubTitleHeader
        text={`${props.nickname}님 이번 주 일정이 ${props.count}개 있어요!`}
      />
      <div css={css({ display: 'flex' })}>
        {props.scheduleDataList.map((sch) => (
          <div
            key={sch.id}
            css={css({
              display: 'flex',
              flexDirection: 'column',
              width: '260px',
              height: '120px',
              marginLeft: '7px',
              //backgroundColor: 'yellow',
              paddingLeft: '23px',
              paddingTop: '20px',
              marginTop: '20px',
            })}
          >
            <div css={css({ display: 'flex' })}>
              <div
                css={css({
                  display: 'flex',
                  padding: '4px 12px',
                  gap: '8px',
                  flexShrink: 0,
                  background: '#FFF1ED',
                  borderRadius: '19.35px',
                  alignItems: 'center',
                })}
              >
                <div
                  css={css({
                    color: '#FF8761',
                    fontFamily: 'Pretendard',
                    fontSize: '13px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '150%', // 문자열 형태로 표기
                    letterSpacing: '-0.247px',
                  })}
                >
                  D-{sch.dDay}
                </div>
              </div>
              <div
                css={css({
                  padding: '4px 12px',
                  color: '#FF7246',
                  fontFamily: 'Pretendard',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '150%', // 문자열 형태로 표기
                  letterSpacing: '-0.266px',
                })}
              >
                {sch.runTime}
              </div>
            </div>
            <div
              css={css({
                color: '#3A3A3A',
                fontFamily: 'Pretendard',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '150%', // 문자열 형태로 표기
                letterSpacing: '-0.304px',
                marginTop: '12px',
                marginBottom: '3px',
              })}
            >
              {sch.title}
            </div>
            <div
              css={css({
                display: 'flex',
                flexDirection: 'row',
                '& > div': {
                  display: 'flex',
                  ' > img': {
                    marginTop: '1.5px',
                    width: '17px',
                    height: '17px',
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
                <p>{sch.region}</p>
              </div>
              <div>
                <img src={Exercise} />
                <p>{sch.sport}</p>
              </div>
            </div>
          </div>
        ))}
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
        text={`${props.nickname}님의 관심 운동을 기반으로 한 추천게시글 입니다.`}
      />
      <MatchingPostList postList={props.postList} />
    </div>
  );
}
