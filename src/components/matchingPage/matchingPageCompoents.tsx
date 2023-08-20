/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
//import LocationPinIcon from 'assets/locationPin.svg';
//import Sheet from 'react-modal-sheet';
//import { useNavigate } from 'react-router-dom';
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
  weekdays: Weekday[];
  date: number;
  onClickDate: (date: number) => void;
}

/*
    [주간 달력]
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

// 날짜 정보 가져옴
const getCurrentDateAndDay = (date: Date) => {
  const today = date;

  // 오늘 날짜&요일 가져옴
  const todayDate = today.getDate();

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const weekdays = [];
  for (let i = 0; i <= 6; i++) {
    const nextDay = date;
    nextDay.setDate(todayDate + i);
    weekdays.push({ date: nextDay.getDate(), day: days[nextDay.getDay()] });
  }

  const year = today.getFullYear();
  const month = today.toLocaleString('default', { month: 'long' });

  const calendarDate = `${year}년 ${month}`;

  return { todayDate, weekdays, calendarDate };
};

/*
    [주간 + 월간 달력]
*/
export function MatchingPostBigCalendar() {
  // 오늘 날짜 가져오기
  const { todayDate, weekdays, calendarDate } = getCurrentDateAndDay(
    new Date(),
  );

  // 주간 데이터, 년도-월간 데이터, 오늘 날짜 데이터
  const [week, setWeek] = useState(weekdays);
  const [date, setDate] = useState(todayDate);
  const [month, setMonth] = useState(calendarDate);

  // [작은 달력]
  // 날짜 누르기
  const onClickDate = (date: number) => {
    setDate(date);
    console.log('나중에 해당 날짜 게시물 목록 보이게 함', date);
  };

  // [큰 달력]
  const [isOpenDay, setIsOpenDay] = useState(false);
  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');
  const [calenderDay, setCalenderDay] = useState(new Date());

  // 큰 달력 날짜 클릭
  const onClickApplyCalender = () => {
    console.log(calenderDay);
    const { todayDate, weekdays, calendarDate } =
      getCurrentDateAndDay(calenderDay);
    setIsOpenDay(false);
    console.log(weekdays, todayDate, calendarDate);
    setWeek(weekdays);
    setDate(todayDate);
    setMonth(calendarDate);
  };

  // 큰 달력 초기화
  const onClickInitCalender = () => {
    setCalenderDay(currDate);
    const { todayDate, weekdays, calendarDate } =
      getCurrentDateAndDay(currDate);
    setIsOpenDay(false);
    setWeek(weekdays);
    setDate(todayDate);
    setMonth(calendarDate);
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
          {month}
        </div>
        <img src={DownArrow} />
      </div>
      <BottomSheet
        isOpen={isOpenDay}
        onClose={() => {
          setIsOpenDay(false);
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
            onClickDay={setCalenderDay}
            value={calenderDay}
          />
          <InitAndApplyButton
            onClickSelectionInit={() => onClickInitCalender()}
            onClickApply={() => onClickApplyCalender()}
          />
        </>
      </BottomSheet>
      <MatchingPostDate weekdays={week} date={date} onClickDate={onClickDate} />
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
          options={['최신순', '가까운 일정 순']}
          selectedOption={props.sort}
          onChange={props.onhandleSortChange}
        />
      </div>
    </div>
  );
}
