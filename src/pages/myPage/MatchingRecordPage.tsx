/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import MatchingRecordContent from 'components/myPage/MatchingRecordContent';
import MatchingRecordItem from 'components/myPage/MatchingRecordItem';
import { appContainer } from 'components/styles/common/common';
import { MatchingSchedule } from 'data/type';
import React from 'react';

const MatchingRecordPage = () => {
  const users: MatchingSchedule[] = [
    // {
    //   title: '뉴플',
    //   img:
    //     'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
    //   where: '서울특별시 강남구',
    //   when: '8.6(일)',
    //   what: '헬스',
    // },
    // {
    //   title: '뉴플',
    //   profileImg:
    //     'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
    //   where: '서울특별시 강남구',
    //   when: '8.6(일)',
    //   what: '헬스',
    // },
    // {
    //   title: '뉴플',
    //   profileImg:
    //     'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
    //   where: '서울특별시 강남구',
    //   when: '8.6(일)',
    //   what: '헬스',
    // },
  ];

  const users2: MatchingSchedule[] = [
    // {
    //   title: '뉴플2',
    //   profileImg:
    //     'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
    //   where: '서울특별시 강남구',
    //   when: '8.6(일)',
    //   what: '헬스',
    // },
    // {
    //   title: '뉴플2',
    //   profileImg:
    //     'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
    //   where: '서울특별시 강남구',
    //   when: '8.6(일)',
    //   what: '헬스',
    // },
    // {
    //   title: '뉴플2',
    //   profileImg:
    //     'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
    //   where: '서울특별시 강남구',
    //   when: '8.6(일)',
    //   what: '헬스',
    // },
    // {
    //   title: '뉴플2',
    //   profileImg:
    //     'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
    //   where: '서울특별시 강남구',
    //   when: '8.6(일)',
    //   what: '헬스',
    // },
  ];

  const tabs = [
    {
      label: '예정중인 일정',
      children: (
        <div>
          {users.map((matching, index) => (
            <MatchingRecordItem key={index} article={matching} divide={false} />
          ))}
        </div>
      ),
    },
    {
      label: '완료된 일정',
      children: (
        <div>
          {users2.map((matching, index) => (
            <MatchingRecordItem key={index} article={matching} divide={false} />
          ))}
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
