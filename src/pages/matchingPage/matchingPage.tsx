/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
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
import { getMatchingPostList } from 'api/matchingPageApi';

interface FilterListData {
  gender: string | null;
  recruit: string | null;
  sports: string[];
}

function MatchingPage() {
  // API 통신 - 모집글 목록 전체 가져오기
  const [post, setPost] = useState([]);
  const { data, isError } = useQuery('matchingPostList', getMatchingPostList);

  useEffect(() => {
    if (data) {
      setPost(data);
    } else if (isError) {
      console.log(isError);
    }
  }, [data]);

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
          {data == null ? (
            <div>{post}</div>
          ) : (
            <MatchingPostList postList={data} />
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
