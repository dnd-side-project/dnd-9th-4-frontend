/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import {
  HomeTopScreen,
  NewPleMateListBox,
  MatchingSchedule,
  Recommendation,
} from 'components/homePage/homePageComponents';
import {
  ButtonNavigation,
  Horizontalline,
} from 'components/common/commonComponents';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  getMatchingPostSimple,
  getMatchingRecord,
  getAroundMate,
} from 'api/homePageApi';

// 내 주변 뉴플메이트 테스트 데이터
const profileTestData = {
  matelist: [
    {
      memberId: 1,
      username: '아이스크림',
      profileImg:
        'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg',
    },
    {
      memberId: 2,
      username: '석촌호수',
      profileImg:
        'https://cdn.pixabay.com/photo/2016/11/02/14/32/lotte-world-tower-1791802_1280.jpg',
    },
    {
      memberId: 3,
      username: '고양이',
      profileImg:
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    },
    {
      memberId: 4,
      username: '헬스짱',
      profileImg:
        'https://cdn.pixabay.com/photo/2022/08/19/18/56/gym-7397553_1280.jpg',
    },
    {
      memberId: 5,
      username: '런닝이',
      profileImg:
        'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    },
  ],
};

// 맞춤 추천 테스트 데이터
const mathcingPostsTestData = {
  postList: [
    {
      id: 1,
      title: '런닝 메이트 구해요',
      sport: '런닝',
      region: '대전광역시 유성구',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2022/08/19/18/56/gym-7397553_1280.jpg',
    },
    {
      id: 2,
      title: '런닝 메이트 구해요',
      sport: '런닝',
      region: '대전광역시 유성구',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_1280.jpg',
    },
    {
      id: 3,
      title: '같이 헬스다닐 분 구해요!',
      sport: '헬스',
      region: '인천광역시 남동구',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    },
  ],
};

// 나의 매칭 일정 테스트 데이터
const MatchingScheduleTestData = {
  schduleList: [
    {
      id: 1,
      memberId: 0,
      dDay: 3, // 이거는 runtime이랑 new Date() 비교해서 구하기
      runTime: '8월 6일(토)',
      title: '같이 퇴근 후 헬스다닐 분 구해요',
      region: '서울특별시 강남구',
      sport: '헬스',
    },
    {
      id: 2,
      memberId: 0,
      dDay: 5,
      runTime: '8월 8일(월)',
      title: '싸이클 같이 타요!!!!!',
      region: '서울특별시 강남구',
      sport: '싸이클',
    },
  ],
};

function HomePage() {
  const navigate = useNavigate();

  const onClickMatchingPostList = () => {
    navigate('/matching');
    window.scrollTo(0, 0);
  };

  const onClickMatchingScheduleList = () => {
    // 매칭 일정 페이지로 이동
    console.log('이동');
  };

  useQuery('matchingPosts', getMatchingPostSimple, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
  useQuery('aroundMates', getAroundMate, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
  useQuery('matchingRecord', getMatchingRecord, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });

  return (
    <div css={css({ marginInline: '16px', paddingBottom: '90px' })}>
      <HomeTopScreen nickname="뉴플" text="더운 여름 운동으로 이겨내요!" />
      <NewPleMateListBox matelist={profileTestData.matelist} />
      <MatchingSchedule
        onClickArrow={onClickMatchingScheduleList}
        nickname="뉴플"
        count={MatchingScheduleTestData.schduleList.length}
        scheduleDataList={MatchingScheduleTestData.schduleList}
      />
      <Horizontalline margin="40px" color="#EFF3FA" height="6px" />
      <Recommendation
        onClickArrow={onClickMatchingPostList}
        nickname="뉴플"
        postList={mathcingPostsTestData.postList}
      />
      <ButtonNavigation />
    </div>
  );
}

export default HomePage;
