/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Mail from 'assets/matchingPageIcon/mail.svg';
import Search from 'assets/matchingPageIcon/Search.svg';
import Filter from 'assets/matchingPageIcon/Filter.svg';
import PostWrite from 'assets/matchingPageIcon/PostWriteIcon.svg';
import { ButtonNavigation } from 'components/common/commonComponents';
import {
  //MatchingPostList,
  MatchingPostFiltering,
  MatchingPostDate,
} from 'components/matchingPage/matchingPageCompoents';
import { MatchingPostList } from 'components/homePage/homePageComponents';
import Sheet from 'react-modal-sheet';
import { matchingPageStyles } from 'components/styles/matchingPageStyles';
import { useNavigate } from 'react-router-dom';

// 매칭 모집글 테스트 데이터
const mathcingPostsTestData = {
  postList: [
    {
      id: 1,
      title: '런닝 메이트 구해요',
      sport: '런닝',
      region: '대전광역시 유성구 봉명동',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2022/08/19/18/56/gym-7397553_1280.jpg',
    },
    {
      id: 2,
      title: '런닝 메이트 구해요',
      sport: '런닝',
      region: '대전광역시 유성구 봉명동',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_1280.jpg',
    },
    {
      id: 3,
      title: '같이 헬스다닐 분 구해요!',
      sport: '헬스',
      region: '인천광역시 남동구 구월동',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    },
    {
      id: 4,
      title: '같이 헬스다닐 분 구해요!',
      sport: '헬스',
      region: '인천광역시 연수구 송도동',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    },
    {
      id: 5,
      title: '같이 헬스다닐 분 구해요!',
      sport: '헬스',
      region: '인천광역시 연수구 송도동',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    },
    {
      id: 6,
      title: '수영할 사람 구함!',
      sport: '수영',
      region: '인천광역시 연수구 송도동',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    },
  ],
};

// 오늘 날짜&요일 가져옴
const getCurrentDateAndDay = () => {
  const today = new Date();

  const todayDate = today.getDate();

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const weekdays = [];
  for (let i = 0; i <= 6; i++) {
    const nextDay = new Date();
    nextDay.setDate(todayDate + i);
    weekdays.push({ date: nextDay.getDate(), day: days[nextDay.getDay()] });
  }

  return { todayDate, weekdays };
};

interface FilterListData {
  gender: string | null;
  recruit: string | null;
  sports: string[];
}

function MatchingPage() {
  const navigate = useNavigate();

  const [showMailCircle] = useState(true); // false이면 쪽지창에 주황색원 안보임

  // 상세 필터 창
  const [isOpen, setOpen] = useState(false);
  const [gender, setGender] = useState<string | null>(null);
  const [recruit, setRecruit] = useState<string | null>(null);
  const [sports, setSports] = useState<string[]>([]);
  const [filterList, setFilterList] = useState<FilterListData | null>(null);

  const onhandleGenderChange = (gender: string) => {
    setGender(gender);
  };
  const onhandleRecruitChange = (recruit: string) => {
    setRecruit(recruit);
  };
  const onhandleSportChange = (sport: string) => {
    if (sports.includes(sport)) {
      setSports(sports.filter((item) => item !== sport));
    } else {
      setSports([...sports, sport]);
    }
  };

  const onClickSelectionInit = () => {
    console.log('선택 초기화');
    setGender(null);
    setRecruit(null);
    setSports([]);
    //setFilterList(null);
  };

  const onClickApplyFilter = () => {
    console.log('필터링 적용');
    setOpen(false);
    setFilterList({
      gender: gender,
      recruit: recruit,
      sports: sports,
    });
  };

  // 날짜
  const { todayDate, weekdays } = getCurrentDateAndDay();
  const [date, setDate] = useState(todayDate);

  // 날짜 누르기
  const onClickDate = (date: number) => {
    setDate(date);
    console.log(date);
  };

  // 쪽지함 클릭
  const onClickMailbox = () => {
    console.log('쪽지함 클릭');
  };

  // 검색 아이콘 클릭
  const onClickSearchICon = () => {
    console.log('검색 아이콘 클릭');
    navigate('/matching/search');
  };

  // 글쓰기 클릭
  const onClickWriteButton = () => {
    console.log('글쓰기 버튼 클릭');
    navigate('/post/sport');
  };

  return (
    <div>
      <div>
        <div>
          <div css={matchingPageStyles.displayFlex}>
            <p css={matchingPageStyles.title}>뉴플메이트 모집글</p>
            <div css={matchingPageStyles.mailBox}>
              {showMailCircle && <div css={matchingPageStyles.mailBoxCircle} />}
              <img src={Mail} alt="Mail Icon" onClick={onClickMailbox} />
            </div>
            <div css={matchingPageStyles.searchIcon}>
              <img src={Search} alt="Search Icon" onClick={onClickSearchICon} />
            </div>
          </div>
        </div>
        <MatchingPostDate
          weekdays={weekdays}
          date={date}
          onClickDate={onClickDate}
        />
        <div css={matchingPageStyles.displayFlex}>
          <img
            src={Filter}
            css={matchingPageStyles.filterIcon}
            onClick={() => setOpen(true)}
          />
          <Sheet
            isOpen={isOpen}
            onClose={() => setOpen(false)}
            detent="content-height"
            css={matchingPageStyles.filterSheetSize}
          >
            <MatchingPostFiltering
              gender={gender}
              recruit={recruit}
              sports={sports}
              onhandleGenderChange={onhandleGenderChange}
              onhandleRecruitChange={onhandleRecruitChange}
              onhandleSportChange={onhandleSportChange}
              onClickSelectionInit={onClickSelectionInit}
              onClickApplyFilter={onClickApplyFilter}
            />
            <Sheet.Backdrop />
          </Sheet>
          <div
            css={css({
              display: 'flex',
              marginLeft: '11px',
              '& > div': {
                marginRight: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                flexShrink: '0',
                padding: '7px 15px',
                borderRadius: '16.5px',
                border: '1px solid #0074FF',
                color: '#0074FF',
                fontSize: '14px',
                fontFamily: 'Pretendard',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '100%',
                letterSpacing: '-0.266px',
              },
            })}
          >
            {filterList && filterList?.gender !== null && (
              <div>성별 {filterList.gender}</div>
            )}

            {filterList && filterList?.recruit !== null && (
              <div>{filterList.recruit}</div>
            )}

            {filterList && filterList?.sports.length !== 0 && (
              <div>{filterList.sports}</div>
            )}
          </div>
        </div>
        <div css={css({ marginBottom: '80px' })}>
          <MatchingPostList postList={mathcingPostsTestData.postList} />
        </div>
      </div>
      <img
        src={PostWrite}
        css={matchingPageStyles.writeButton}
        onClick={onClickWriteButton}
      />
      {/* <div css={matchingPageStyles.writeButton} onClick={onClickWriteButton}>
        <span>+ 글쓰기</span>
      </div> */}
      <ButtonNavigation />
    </div>
  );
}

export default MatchingPage;
