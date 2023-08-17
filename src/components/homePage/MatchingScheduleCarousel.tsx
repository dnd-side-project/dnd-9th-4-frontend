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
  runTime: string;
  title: string;
  region: string;
  sport: string;
}

interface MatchingScheduleData {
  onClickArrow?: () => void;
  scheduleDataList: scheduleData[];
}

/*
      [나의 매칭 일정 캐서셀]
  */
export function MatchingScheduleCarousel(props: MatchingScheduleData) {
  const [emblaRef] = useEmblaCarousel(OPTIONS);

  return (
    <div className="embla2">
      <div className="embla2__viewport" ref={emblaRef}>
        <div
          css={css({
            display: '-webkit-box',
          })}
        >
          {props.scheduleDataList.map((sch) => (
            <div className="embla2__slide" key={sch.id}>
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
    </div>
  );
}
