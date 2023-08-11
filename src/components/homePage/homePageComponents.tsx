/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LocationPinIcon from 'assets/postListIcon/Location.svg';
import HomePageLogo from 'assets/newPleLogo/HomePageLogo.svg';
import schedule from 'assets/postListIcon/Schedule.svg';
import Exercise from 'assets/postListIcon/Exercise.svg';
import { useNavigate } from 'react-router-dom';

interface HomeTopScreenData {
  nickname: string;
  profileImg: string;
}

interface TitleHeaderData {
  title: string;
}

interface Profile {
  memberId: number;
  nickname: string;
  profileImg: string;
}

interface NewPleMateListData {
  matelist: Profile[];
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
    [상단 로고 및 사용자 인사]
*/
export function HomeTopScreen(props: HomeTopScreenData) {
  return (
    <div
      css={css({
        //width: '390px',
        height: '292px',
        flexShrink: 0,
        backgroundColor: '#25252D',
      })}
    >
      <div
        css={css({
          fontSize: '20px',
          lineHeight: '150%',
          paddingLeft: '21.42px',
          paddingTop: '40px',
        })}
      >
        <img src={HomePageLogo} />
      </div>
      <div
        css={css({
          display: 'flex',
          marginTop: '50px',
        })}
      >
        <div css={css({ flex: 4 })}>
          <p
            css={css({
              color: '#FFF',
              fontFamily: 'Pretendard',
              fontSize: '1.375rem',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '130%',
              letterSpacing: '-3.5px',
              paddingLeft: '16.13px',
              paddingTop: '39.01px',
              margin: '0',
            })}
          >
            {props.nickname}님,
            <br />
            더운 여름 운동으로
            <br /> 이겨내요!
          </p>
        </div>
        <div css={css({ flex: 1 })}>
          <img
            src={props.profileImg}
            css={css({
              width: '71.002px',
              heigh: '71.002px',
              flexShrink: 0,
              borderRadius: '71.002px',
              marginTop: '39.01px',
              marginRight: '18px',
            })}
          />
        </div>
      </div>
    </div>
  );
}

/*
    [매칭 게시물 목록]
*/
export function MatchingPostList(props: MatchingPostListData) {
  const navigate = useNavigate();
  const onClickMatchingPost = (id: number) => {
    console.log('추후에 클릭한 매칭 게시물로 이동', id);
    navigate(`/post/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      css={css({
        paddingTop: '16.09px',
        paddingLeft: '15px',
        paddingRight: '15px',
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
                width: '60px',
                height: '60px',
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
              {/* <div
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
              </div> */}
              <div>
                <p
                  css={css({
                    color: '#3A3A3A',
                    fontFamily: 'Pretendard',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '120%',
                    letterSpacing: '-1px',
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
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '150%' /* 21px */,
                      letterSpacing: '-1px',
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

/*
    [타이틀 헤더]
*/
export function TitleHeader(props: TitleHeaderData) {
  return (
    <p
      css={css({
        color: '#3A3A3A',
        fontFamily: 'Pretendard',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '150%', // 혹은 1.5 (line-height의 값은 단위를 생략해도 됩니다)
        letterSpacing: '-3px',
        paddingLeft: '20px',
        paddingTop: '30.65px',
        margin: '0px',
      })}
    >
      {props.title}
    </p>
  );
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
        paddingTop: '19px',
        paddingLeft: '20.25px',
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
              marginTop: '8px',
              color: '#3A3A3A',
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
