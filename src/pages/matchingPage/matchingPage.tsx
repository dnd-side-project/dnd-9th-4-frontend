/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import PostWrite from 'assets/matchingPageIcon/PostWriteIcon.svg';
import { ButtonNavigation } from 'components/common/commonComponents';
import {
  MatchingPostBigCalendar,
  MatchingPostFiltering,
  FilterOption,
  SortFilter,
  TopBar,
} from 'components/matchingPage/matchingPageCompoents';
import { MatchingPostList } from 'components/homePage/homePageComponents';
import { matchingPageStyles } from 'components/styles/matchingPageStyles';
import { useNavigate } from 'react-router-dom';
import 'pages/matchingPostWritePage/calendar.css';
import BottomSheet from 'components/common/BottomSheet';
import DownArrowGray from 'assets/matchingPageIcon/DownArrowGray.svg';
import { useQuery } from 'react-query';
//import { getMatchingPostList } from 'api/matchingPageApi';
import axios from 'axios';
import config from 'config';

// 매칭 모집글 테스트 데이터
const mathcingPostsTestData = {
  postList: [
    // {
    //   id: 1,
    //   title: '런닝 메이트 구해요',
    //   sport: '런닝',
    //   region: '대전광역시 유성구 봉명동',
    //   time: '18:30:00 - 21:00:00',
    //   endDate: '08.15(화)',
    //   image:
    //     'https://cdn.pixabay.com/photo/2022/08/19/18/56/gym-7397553_1280.jpg',
    // },
    // {
    //   id: 2,
    //   title: '런닝 메이트 구해요',
    //   sport: '런닝',
    //   region: '대전광역시 유성구 봉명동',
    //   time: '18:30:00 - 21:00:00',
    //   endDate: '08.15(화)',
    //   image:
    //     'https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_1280.jpg',
    // },
    // {
    //   id: 3,
    //   title: '같이 헬스다닐 분 구해요!',
    //   sport: '헬스',
    //   region: '인천광역시 남동구 구월동',
    //   time: '18:30:00 - 21:00:00',
    //   endDate: '08.15(화)',
    //   image:
    //     'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    // },
    // {
    //   id: 4,
    //   title: '같이 헬스다닐 분 구해요!',
    //   sport: '헬스',
    //   region: '인천광역시 연수구 송도동',
    //   time: '18:30:00 - 21:00:00',
    //   endDate: '08.15(화)',
    //   image:
    //     'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    // },
    // {
    //   id: 5,
    //   title: '같이 헬스다닐 분 구해요!',
    //   sport: '헬스',
    //   region: '인천광역시 연수구 송도동',
    //   time: '18:30:00 - 21:00:00',
    //   endDate: '08.15(화)',
    //   image:
    //     'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    // },
    // {
    //   id: 6,
    //   title: '수영할 사람 구함!',
    //   sport: '수영',
    //   region: '인천광역시 연수구 송도동',
    //   time: '18:30:00 - 21:00:00',
    //   endDate: '08.15(화)',
    //   image:
    //     'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    // },
  ],
};

interface FilterListData {
  gender: string | null;
  recruit: string | null;
  sports: string[];
}

function MatchingPage() {
  const getMatchingPostList = async () => {
    try {
      const res = await axios.get(`${config.backendUrl}/api/post`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      return res.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  // API 통신
  useQuery('matchingPostList', getMatchingPostList, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });

  // 페이지 이동
  const navigate = useNavigate();

  // 필터링 목록
  const [filterList, setFilterList] = useState<FilterListData | null>(null);

  // 상세 필터 창
  const [isOpen, setOpen] = useState(false);
  const [gender, setGender] = useState<string | null>(null);
  const [recruit, setRecruit] = useState<string | null>(null);
  const [sports, setSports] = useState<string[]>([]);

  // 필터링 운동 종목 리스트
  const onhandleSportChange = (sport: string) => {
    if (sports.includes(sport)) {
      setSports(sports.filter((item) => item !== sport));
    } else {
      setSports([...sports, sport]);
    }
  };

  // 필터링 초기화
  const onClickSelectionInit = () => {
    setGender(null);
    setRecruit(null);
    setSports([]);
    setFilterList(null);
    setOpen(false);
  };

  // 필터링 적용
  const onClickApplyFilter = () => {
    setOpen(false);
    setFilterList({
      gender: gender,
      recruit: recruit,
      sports: sports,
    });
  };

  // 시간 필터링
  const [isOpenTime, setOpenTime] = useState(false);
  const [sort, setSort] = useState('최신순');

  return (
    <div>
      <div>
        <TopBar />
        <MatchingPostBigCalendar />
        <div css={matchingPageStyles.filterContainer}>
          <FilterOption
            active={!!filterList?.gender}
            text={filterList?.gender ? `성별 ${filterList.gender}` : '성별'}
            onClick={() => setOpen(true)}
          />
          <FilterOption
            active={!!filterList?.recruit}
            text={filterList?.recruit || '모집상태'}
            onClick={() => setOpen(true)}
          />
          <FilterOption
            active={!!filterList?.sports && filterList.sports.length > 0}
            text={
              filterList?.sports && filterList.sports.length > 0
                ? filterList.sports.length === 1
                  ? filterList.sports[0]
                  : `${filterList.sports[0]} 외 ${
                      filterList.sports.length - 1
                    }개`
                : '종목'
            }
            onClick={() => setOpen(true)}
          />
          <div css={matchingPageStyles.filterTimeBox}>
            <div
              css={matchingPageStyles.filterText}
              onClick={() => setOpenTime(true)}
            >
              {sort}
              <img src={DownArrowGray} />
            </div>
          </div>
        </div>
        <div css={matchingPageStyles.matchingList}>
          {mathcingPostsTestData.postList == null ? (
            <div>게시물 없음</div>
          ) : (
            <MatchingPostList postList={mathcingPostsTestData.postList} />
          )}
        </div>
      </div>
      <img
        src={PostWrite}
        css={matchingPageStyles.writeButton}
        onClick={() => navigate('/post/sport')}
      />
      <BottomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <MatchingPostFiltering
          gender={gender}
          recruit={recruit}
          sports={sports}
          onhandleGenderChange={(gender) => setGender(gender)}
          onhandleRecruitChange={(recruit) => setRecruit(recruit)}
          onhandleSportChange={onhandleSportChange}
          onClickSelectionInit={onClickSelectionInit}
          onClickApplyFilter={onClickApplyFilter}
        />
      </BottomSheet>
      <BottomSheet isOpen={isOpenTime} onClose={() => setOpenTime(false)}>
        <SortFilter sort={sort} onhandleSortChange={(sort) => setSort(sort)} />
      </BottomSheet>
      <ButtonNavigation />
    </div>
  );
}

export default MatchingPage;
