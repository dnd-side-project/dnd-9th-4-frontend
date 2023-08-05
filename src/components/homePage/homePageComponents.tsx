/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LocationPinIcon from 'assets/locationPin.svg';
import Logo from 'assets/Logo.svg';
import LogoName from 'assets/LogoName.svg';
import schedule from 'assets/Schedule.svg';

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
        height: '208.934px',
        flexShrink: 0,
        background: 'white',
      })}
    >
      <div
        css={css({
          color: '#3A3A3A',
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '150%',
          letterSpacing: '-0.38px',
          paddingLeft: '21.42px',
          paddingTop: '35.46px',
        })}
      >
        <img src={Logo} />
        <img
          src={LogoName}
          css={css({
            marginLeft: '6.31px',
            marginBottom: '1.5px',
          })}
        />
      </div>
      <div
        css={css({
          display: 'flex',
        })}
      >
        <div css={css({ flex: 4 })}>
          <p
            css={css({
              color: '#050505',
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
            더운 여름 운동으로 이겨내요!
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
              marginTop: '28px',
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
  const onClickMatchingPost = (id: number) => {
    console.log('추후에 클릭한 매칭 게시물로 이동', id);
  };
  return (
    <div
      css={css({
        paddingTop: '16.09px',
        paddingLeft: '19.5px',
        paddingRight: '19.5px',
      })}
    >
      {props.postList.map((post) => (
        <div
          key={post.id}
          css={css({
            height: '101.851px',
            borderRadius: '17px',
            background: '#FFF',
            marginBottom: '16px',
          })}
        >
          <div
            onClick={() => onClickMatchingPost(post.id)}
            css={css({ display: 'flex', flexDirection: 'row' })}
          >
            <div
              css={css({
                width: '69.833px',
                height: '86.39px',
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
                    letterSpacing: '-1px',
                    marginTop: '5.41px',
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
                <div css={css({ display: 'flex' })}>
                  <img
                    src={schedule} // Assuming you have imported schedule icon from some source.
                    css={css({
                      marginTop: '1.5px',
                      width: '14px',
                      height: '14px',
                      marginLeft: '13.64px',
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
                      letterSpacing: '-0.228px',
                    })}
                  >
                    {post.endDate}
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
    [타이틀 헤더]
*/
export function TitleHeader(props: TitleHeaderData) {
  return (
    <p
      css={css({
        color: '#3A3A3A',
        fontFamily: 'Pretendard',
        fontSize: '1.125rem',
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
              width: '72.298px',
              height: '72.298px',
              borderRadius: '72.298px',
              flexShrink: 0,
            })}
          />
          <p
            css={css({
              marginTop: '10px',
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
