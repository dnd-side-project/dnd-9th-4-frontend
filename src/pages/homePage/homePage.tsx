/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
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
import {
  getMatchingPostSimple,
  getMatchingRecord,
  getMateGround,
} from 'api/homePageApi';
import { useMutation } from 'react-query';

function HomePage() {
  const navigate = useNavigate();

  // useState
  const [postList, setPostList] = useState([]);
  const [recordList, setRecordList] = useState([]);
  const [mateList, setMateList] = useState([]);

  console.log(postList, recordList, mateList);

  // 매칭 게시물 페이지로 이동동
  const onClickMatchingPostList = () => {
    navigate('/matching');
    window.scrollTo(0, 0);
  };

  // 매칭 일정 페이지로 이동
  const onClickMatchingScheduleList = () => {
    console.log('이동');
  };

  // API 호출
  const { mutate: post } = useMutation(() => getMatchingPostSimple(), {
    onSuccess: (data) => {
      setPostList(data);
    },
    onError: (error) => console.log(error),
  });

  const { mutate: record } = useMutation(() => getMatchingRecord(), {
    onSuccess: (data) => {
      setRecordList(data);
    },
    onError: (error) => console.log(error),
  });

  const { mutate: mate } = useMutation(() => getMateGround(), {
    onSuccess: (data) => {
      setMateList(data);
    },
    onError: (error) => console.log(error),
  });

  useEffect(() => {
    post();
    record();
    mate();
  }, []);

  return (
    <div css={css({ marginInline: '16px', paddingBottom: '90px' })}>
      <HomeTopScreen nickname="뉴플" text="더운 여름 운동으로 이겨내요!" />
      <NewPleMateListBox matelist={mateList} />
      <MatchingSchedule
        onClickArrow={onClickMatchingScheduleList}
        nickname="뉴플"
        count={recordList.length}
        scheduleDataList={recordList}
      />
      <Horizontalline margin="40px" color="#EFF3FA" height="6px" />
      <Recommendation
        onClickArrow={onClickMatchingPostList}
        nickname="뉴플"
        postList={postList}
      />
      <ButtonNavigation />
    </div>
  );
}

export default HomePage;
