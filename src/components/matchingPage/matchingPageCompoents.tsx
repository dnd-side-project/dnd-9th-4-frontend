/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { InitAndApplyButton } from 'components/common/commonComponents';
import DownArrow from 'assets/matchingPageIcon/DownArrow.svg';
import BottomSheet from 'components/common/BottomSheet';
import Calendar from 'react-calendar';
import 'pages/matchingPostWritePage/calendar.css';
import moment from 'moment';
import { Horizontalline } from 'components/common/commonComponents';
import CheckBlue from 'assets/matchingPageIcon/CheckBlue.svg';
import CheckGray from 'assets/matchingPageIcon/CheckGray.svg';
import DownArrowGray from 'assets/matchingPageIcon/DownArrowGray.svg';
import { matchingPageStyles } from 'components/styles/matchingPageStyles';
import Search from 'assets/matchingPageIcon/Search.svg';
import { useRecoilState } from 'recoil';
import { DateState } from 'recoil/postDate';

/*
  [매칭 상단]
*/
export function TopBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div css={matchingPageStyles.displayFlex}>
        <p css={matchingPageStyles.title}>뉴플메이트 모집글</p>
        <div css={matchingPageStyles.searchIcon}>
          <img
            src={Search}
            alt="Search Icon"
            onClick={() => navigate('/matching/search')}
          />
        </div>
      </div>
    </div>
  );
}

interface RadioGroupData {
  title: string;
  options: string[];
  selectedOption: string | null;
  onChange: (option: string) => void;
}

/*
  [라디오 그룹]
*/
export function RadioGroup(props: RadioGroupData) {
  return (
    <div css={css({ display: 'flex', flexDirection: 'column' })}>
      <p
        css={css({
          color: '#B2B2B2',
          textAlign: 'center',
          fontFamily: 'Pretendard',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '150%',
          letterSpacing: '-0.266px',
          textAlignLast: 'left',
          marginTop: '35px',
          marginBottom: '4px',
        })}
      >
        {props.title}
      </p>
      {props.options.map((option: string, index: number) => (
        <label
          key={index}
          css={css({
            color: 'black',
            display: 'flex',
            alignItems: 'center',
          })}
        >
          <p
            css={css({
              color: props.selectedOption === option ? '#0066FF' : '#939393',
              flex: 1,
              textAlign: 'center',
              fontFamily: 'Pretendard',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '150%',
              letterSpacing: '-0.304px',
              textAlignLast: 'left',
              marginBlock: '12px',
            })}
          >
            {option}
          </p>
          <input
            css={css({ display: 'none' })}
            type="radio"
            value={option}
            checked={props.selectedOption === option}
            onChange={() => props.onChange(option)}
          />
          <img
            src={props.selectedOption === option ? CheckBlue : CheckGray}
            alt={option}
            css={css({ width: '21px', height: '21px', cursor: 'pointer' })}
            onClick={() => props.onChange(option)}
          />
        </label>
      ))}
    </div>
  );
}

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

/*
    [게시물 필터링 sheet]
*/
export function MatchingPostFiltering(props: MatchingFilterSheetData) {
  return (
    <div>
      <div>
        <p
          css={css({
            fontFamily: 'Pretendard',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '120%',
            letterSpacing: '-0.304px',
            textAlign: 'center',
            marginTop: '2px',
            marginBottom: '18px',
          })}
        >
          상세 필터
        </p>
      </div>
      <Horizontalline margin="0px" />
      <div css={css({ display: 'flex', flexDirection: 'column' })}>
        <RadioGroup
          title="성별"
          options={['남자', '여자']}
          selectedOption={props.gender}
          onChange={props.onhandleGenderChange}
        />
      </div>
      <div css={css({ display: 'flex', flexDirection: 'column' })}>
        <RadioGroup
          title="모집상태"
          options={['모집중', '모집완료']}
          selectedOption={props.recruit}
          onChange={props.onhandleRecruitChange}
        />
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
            },
          })}
        >
          <p
            css={css({
              color: '#B2B2B2',
              marginTop: '40px',
              fontSize: '18px',
            })}
          >
            종목
          </p>
          <p
            css={css({
              color: '#959DB1',
              marginTop: '44px',
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
            {['헬스', '러닝', '수영', '등산'].map((sport) => (
              <div
                key={sport}
                onClick={() => props.onhandleSportChange(sport)}
                className={props.sports.includes(sport) ? 'selected' : ''}
              >
                {sport}
              </div>
            ))}
          </div>
          <div>
            {['싸이클', '기타'].map((sport) => (
              <div
                key={sport}
                onClick={() => props.onhandleSportChange(sport)}
                className={props.sports.includes(sport) ? 'selected' : ''}
              >
                {sport}
              </div>
            ))}
          </div>
        </div>
      </div>
      <InitAndApplyButton
        onClickSelectionInit={props.onClickSelectionInit}
        onClickApply={props.onClickApplyFilter}
      />
    </div>
  );
}

interface Weekday {
  day: string;
  date: number;
}

interface MatchingPostDateData {
  weekdays?: Weekday[];
  date?: number;
  onClickDate: (date: number) => void;
}

/*
    [주간 달력]
*/
export function MatchingPostDate(props: MatchingPostDateData) {
  const [recoilDate] = useRecoilState(DateState);
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
      {props.weekdays?.map((weekday, index) => (
        <div
          key={index}
          css={css({
            flex: 1,
            textAlign: 'center',
            width: '38px',
            height: '70px',
            margin: '5px',
            backgroundColor:
              weekday.date === Number(recoilDate.DD)
                ? '#ECF6FE'
                : 'transparent',
            borderRadius:
              weekday.date === Number(recoilDate.DD) ? '8px' : undefined,
          })}
          onClick={() => props.onClickDate(weekday.date)}
        >
          <div css={css({ paddingTop: '10px' })}>
            <span
              css={css({
                color:
                  weekday.date === Number(recoilDate.DD)
                    ? '#306BF6'
                    : '#939393',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontSize:
                  weekday.date === Number(recoilDate.DD) ? '15px' : '14px',
                fontStyle: 'normal',
                fontWeight: weekday.date === Number(recoilDate.DD) ? 600 : 500,
                lineHeight: '150%' /* 21px */,
                letterSpacing: '-0.266px',
              })}
            >
              {weekday.day}
            </span>
          </div>
          <div
            css={css({
              height: '25px',
              paddingTop: '4px',
              paddingBottom: '3px',
              margin: '5px',
            })}
          >
            <span
              css={css({
                color:
                  weekday.date === Number(recoilDate.DD)
                    ? '#306BF6'
                    : '#939393',
                textAlign: 'center',
                alignItems: 'center',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: weekday.date === Number(recoilDate.DD) ? 600 : 500,
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

// 날짜 정보 가져옴
const getCurrentDateAndDay = (date: Date) => {
  const today = new Date(date);

  // 오늘 날짜&요일 가져옴
  const todayDateDay = today.getDate();

  const dates = ['일', '월', '화', '수', '목', '금', '토'];

  const weekdays = [];
  for (let i = 0; i <= 6; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(todayDateDay + i);
    weekdays.push({
      date: nextDay.getDate(),
      day: dates[nextDay.getDay()],
    });
  }

  const year = today.getFullYear();
  const month = today.toLocaleString('default', { month: 'long' });

  const calendarDate = `${year}년 ${month}`;

  return { weekdays, calendarDate };
};

interface weekdays {
  date: number; // 날짜 ex 21
  day: string; // 요일 ex 월
}

/*
    [주간 + 월간 달력]
*/
export function MatchingPostBigCalendar() {
  const [DateDate, setDateDate] = useRecoilState(DateState);

  const [weekday, setWeekday] = useState<weekdays[]>([]);
  const [yearMonth, setYearMonth] = useState<string>('');
  const [date, setDate] = useState<number>(1);

  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');
  const [runtime, setRuntime] = useState(new Date()); // 달력 선택하는 값
  const [day, setDay] = useState<Date | null>(null); // 최종 선택된 날짜 값
  const [isOpenDay, setIsOpenDay] = useState(false);

  useEffect(() => {
    if (day) {
      const { weekdays, calendarDate } = getCurrentDateAndDay(day);
      setWeekday(weekdays);
      setYearMonth(calendarDate);
      setDate(weekdays[0].date);
    } else {
      const { weekdays, calendarDate } = getCurrentDateAndDay(new Date());
      setWeekday(weekdays);
      setYearMonth(calendarDate);
      setDate(weekdays[0].date);
    }
  }, [day]);

  // 큰 달력 날짜 선택
  const onClickCalenderDay = (runtime: Date) => {
    setRuntime(runtime);
  };

  // 큰 달력 날짜 반영
  const onClickApplyCalender = () => {
    setIsOpenDay(false);
    setDay(runtime);
    const YYDate = runtime.getFullYear().toString();
    const MMDate = (runtime.getMonth() + 1).toString().padStart(2, '0');
    const DDDate = runtime.getDate().toString().padStart(2, '0');
    setDateDate({
      YY: YYDate,
      MM: MMDate,
      DD: DDDate,
      runtime: YYDate + '-' + MMDate + '-' + DDDate,
    });
  };

  // 큰 달력 초기화
  const onClickInitCalender = () => {
    setIsOpenDay(false);
    setDay(null);
    setRuntime(new Date());
  };

  const onClickDate = (date: number) => {
    console.log(date);
    setDate(date);
    const DDDate = date.toString().padStart(2, '0');
    setDateDate({
      ...DateDate,
      DD: date.toString().padStart(2, '0'),
      runtime: DateDate.YY + '-' + DateDate.MM + '-' + DDDate,
    });
  };

  return (
    <>
      <div css={css({ display: 'flex', marginTop: '20px' })}>
        <div
          css={css({
            color: '#333',
            fontFamily: 'Pretendard',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '150%',
            letterSpacing: '-0.304px',
            marginLeft: '26px',
          })}
          onClick={() => setIsOpenDay(true)}
        >
          {yearMonth}
        </div>
        <img src={DownArrow} />
      </div>
      <BottomSheet
        isOpen={isOpenDay}
        onClose={() => {
          setIsOpenDay(false);
          if (day == null) {
            setRuntime(new Date());
          } else if (day != null) {
            setRuntime(day);
          }
        }}
      >
        <>
          <Calendar
            className="react-calendar"
            formatDay={(locale, date) => moment(date).format('DD')}
            tileDisabled={({ date }) =>
              moment(date).format('MM-DD') < currDateTime
            }
            calendarType="gregory"
            onClickDay={onClickCalenderDay}
            value={runtime}
          />
          <InitAndApplyButton
            onClickSelectionInit={onClickInitCalender}
            onClickApply={onClickApplyCalender}
          />
        </>
      </BottomSheet>
      <MatchingPostDate
        weekdays={weekday}
        date={date}
        onClickDate={onClickDate}
      />
    </>
  );
}

interface FilterOptionData {
  active: boolean;
  text: string;
  onClick: () => void;
}

/*
  [필터링 버튼]
*/
export function FilterOption(props: FilterOptionData) {
  const buttonStyles = css({
    display: 'inline-flex',
    height: '34px',
    padding: props.active ? '4px 13px' : '4px 7px 4px 13px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '16.5px',
    border: `1px solid ${
      props.active ? 'var(--grey-04, #0074FF)' : 'var(--grey-04, #959DB1)'
    }`,
    background: '#FFF',
    marginRight: '9px',
    color: `var(--grey-04, ${
      props.active ? 'var(--grey-04, #0074FF)' : 'var(--grey-04, #959DB1)'
    })`,
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '100%',
    letterSpacing: '-0.266px',
  });

  return (
    <div css={buttonStyles} onClick={props.onClick}>
      {props.text}
      {!props.active && <img src={DownArrowGray} />}
    </div>
  );
}

interface SortFilterData {
  sort: string;
  onhandleSortChange: (value: string) => void;
}

/*
  [정렬 필터 sheet]
*/
export function SortFilter(props: SortFilterData) {
  return (
    <div
      css={css({
        paddingBottom: '40px',
        width: '21.25rem',
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
            letterSpacing: '-0.304px',
            textAlign: 'center',
            marginTop: '2px',
            marginBottom: '18px',
          })}
        >
          정렬
        </p>
      </div>
      <Horizontalline margin="0px" />
      <div css={css({ display: 'flex', flexDirection: 'column' })}>
        <RadioGroup
          title=""
          options={['매칭 느린 순', '매칭 빠른 순']}
          selectedOption={props.sort}
          onChange={props.onhandleSortChange}
        />
      </div>
    </div>
  );
}
