/** @jsxImportSource @emotion/react */
import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { css } from '@emotion/react';
import 'components/homePage/matchingSchedule.css';
import LocationPinIcon from 'assets/postListIcon/Location.svg';
import Exercise from 'assets/postListIcon/Exercise.svg';

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  containScroll: 'trimSnaps',
};

interface scheduleData {
  id: number;
  dDay: number;
  runtime: string;
  title: string;
  region: string;
  sport: string;
}

interface MatchingScheduleData {
  onClickArrow?: () => void;
  scheduleDataList: scheduleData[];
}

const calculateDday = (targetDate: string) => {
  const targetDateTime = new Date(targetDate).getTime();
  const today = new Date();
  const todayTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ).getTime();

  const timeDiff = targetDateTime - todayTime;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
};

/*
      [나의 매칭 일정 캐서셀]
  */
export function MatchingScheduleCarousel(props: MatchingScheduleData) {
  const [emblaRef] = useEmblaCarousel(OPTIONS);

  const onClickSchedule = (id: number) => {
    console.log('추후', id, '번째 스케쥴 페이지로 이동?');
  };

  return (
    <div className="embla2">
      <div className="embla2__viewport" ref={emblaRef}>
        <div
          css={css({
            display: '-webkit-box',
          })}
        >
          {props.scheduleDataList.map((sch) => {
            const dday = calculateDday(sch.runtime) - 1;
            const ddayText =
              dday === 0
                ? 'D-DAY'
                : dday > 0
                ? `D-${dday}`
                : `D+${Math.abs(dday)}`;
            return (
              <div
                className="embla2__slide"
                key={sch.id}
                onClick={() => onClickSchedule(sch.id)}
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
                      {ddayText}
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
                    {sch.runtime.split(' ')[0]}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
