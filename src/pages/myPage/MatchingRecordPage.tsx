/** @jsxImportSource @emotion/react */
import { baseAxios } from 'api/baseAxios';
import { getMatchingSchedule } from 'api/matchApi';
import ErrorComponent from 'components/common/ErrorComponent';
import PrevHeader from 'components/common/PrevHeader';
import EmptySchedule from 'components/myPage/EmptySchedule';
import MatchingRecordContent from 'components/myPage/MatchingRecordContent';
import MatchingRecordItem from 'components/myPage/MatchingRecordItem';
import { appContainer } from 'components/styles/common/common';
import { GetMatchingScheduleResponse, MatchingSchedule } from 'data/type';
import { sport } from 'data/variable';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

const MatchingRecordPage = () => {
  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const [reservedSchedule, setReservedSchedule] = useState<MatchingSchedule[]>(
    [],
  );
  const [completedSchedule, setCompletedSchedule] = useState<
    MatchingSchedule[]
  >([]);
  const [isError, setIsError] = useState(false);

  const { mutate } = useMutation(() => getMatchingSchedule(), {
    onSuccess: (data: GetMatchingScheduleResponse) => {
      setReservedSchedule(data.reservedSchedule);
      setCompletedSchedule(data.completedSchedule);
      setCompletedSchedule([
        {
          id: 17,
          memberId: 44,
          profileImg: '3',
          title: '테스트 제목입니다',
          region: '서울특별시 강남구',
          sport: sport['수영'],
          runtime: '2023-08-06 12:15:50',
        },
      ]);
      console.log('GET MATCHING SCHEDULE SUCCESS : ', data);
    },
    onError: (error) => {
      setIsError(false);
      setCompletedSchedule([
        {
          id: 17,
          memberId: 44,
          profileImg: '3',
          title: '테스트 제목입니다',
          region: '서울특별시 강남구',
          sport: sport['수영'],
          runtime: '2023-08-06 12:15:50',
        },
      ]);
      setReservedSchedule([
        {
          id: 17,
          memberId: 44,
          profileImg: '3',
          title: '테스트 제목입니다',
          region: '서울특별시 강남구',
          sport: sport['수영'],
          runtime: '2023-08-06 12:15:50',
        },
      ]);
      console.log(error);
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  const tabs = [
    {
      label: '예정중인 일정',
      children: isError ? (
        <ErrorComponent />
      ) : (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
          {reservedSchedule.length > 0 ? (
            reservedSchedule.map((matching, index) => (
              <MatchingRecordItem
                key={index}
                article={matching}
                divide={true}
                state={'RESERVED'}
              />
            ))
          ) : (
            <EmptySchedule text="아직 예정중인 일정이 없어요." />
          )}
        </div>
      ),
    },
    {
      label: '완료된 일정',
      children: isError ? (
        <ErrorComponent />
      ) : (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
          {completedSchedule.length > 0 ? (
            completedSchedule.map((matching, index) => (
              <MatchingRecordItem
                key={index}
                article={matching}
                divide={true}
                state={'COMPLETED'}
              />
            ))
          ) : (
            <EmptySchedule text="아직 완료된 일정이 없어요." />
          )}
        </div>
      ),
    },
  ];

  return (
    <div css={appContainer}>
      <PrevHeader text="매칭 일정" />
      <MatchingRecordContent tabs={tabs} />
    </div>
  );
};

export default MatchingRecordPage;
