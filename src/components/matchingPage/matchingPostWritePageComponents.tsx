/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BackIos from 'assets/BackIos.svg';
import { useNavigate } from 'react-router-dom';

interface NaviBarTitleData {
  title: string;
}

interface SportData {
  id: number;
  sport: string;
  img: string;
}

interface SelectSportListData {
  sportListData: {
    sportList: SportData[];
  };
  selectSport: string | null;
  onClickSport: (sport: string) => void;
}

interface StyleInterTitleData {
  title: string;
}

interface LableTitleData {
  title: string;
  marginTop: string;
}

interface BottomButtonData {
  title: string;
  onClickButton: () => void;
}

/*
    [상단 네비게이션(뒤로 가기) 타이틀]
*/
export function NaviBarTitle(props: NaviBarTitleData) {
  const navigate = useNavigate();
  const onClickBackIcon = () => {
    console.log('뒤로가기');
    navigate(-1);
    window.scrollTo(0, 0);
  };
  return (
    <div
      css={css({
        display: 'flex',
        height: '56px',
        marginTop: '40px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: '12px',
        marginLeft: '12px',
      })}
    >
      <img src={BackIos} onClick={onClickBackIcon} />
      <span
        css={css({
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Pretendard',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '150%',
          letterSpacing: '-0.342px',
          flex: '1',
        })}
      >
        {props.title}
      </span>
      <div css={css({ width: '25px' })} />
    </div>
  );
}

/*
    [운동 종목 선택]
*/
export function SelectSportList(props: SelectSportListData) {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        marginTop: '25px',
        marginLeft: '16px',
        marginRight: '16px',
      })}
    >
      {props.sportListData.sportList.map((sport) => (
        <div
          key={sport.id}
          css={css({
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
            paddingLeft: '20px',
            height: '80px',
            backgroundColor:
              props.selectSport === sport.sport ? '#ECF6FE' : 'transparent',
            borderRadius: '8px',
          })}
          onClick={() => props.onClickSport(sport.sport)}
        >
          <div
            css={css({
              width: '58px',
              //height: '57px',
              //borderRadius: '50%',
              overflow: 'hidden',
            })}
          >
            <img
              src={sport.img}
              alt={sport.sport}
              css={css({ width: '100%', height: '100%', objectFit: 'cover' })}
            />
          </div>
          <div css={css({ marginLeft: '27px' })}>
            <span
              css={css({
                color: '#000',
                fontFamily: 'Pretendard',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '-0.342px',
              })}
            >
              {sport.sport}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/*
    [관심사/스타일 타이틀]
*/
export function StyleInterTitle(props: StyleInterTitleData) {
  return (
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
        {props.title}
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
  );
}

/*
   [입력 폼 레이블]
*/
export function LableTitle(props: LableTitleData) {
  return (
    <div
      css={css({
        color: '#000',
        fontFamily: 'Pretendard',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '150%',
        letterSpacing: '-0.304px',
        marginTop: props.marginTop,
      })}
    >
      {props.title}
    </div>
  );
}

/*
   [하단 버튼]
*/
export function BottomButton(props: BottomButtonData) {
  return (
    <div
      css={css({
        width: '100%',
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
      })}
    >
      <div
        css={css({
          margin: '17px 15px',
          textAlign: 'center',
          display: 'flex',
          height: '48px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          borderRadius: '6px',
          background: '#06F',
          cursor: 'pointer',
        })}
        onClick={props.onClickButton}
      >
        <span
          css={css({
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Pretendard',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '150%',
            letterSpacing: '-0.342px',
          })}
        >
          {props.title}
        </span>
      </div>
    </div>
  );
}
