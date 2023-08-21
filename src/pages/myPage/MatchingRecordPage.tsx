/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import ArticleItem from 'components/myPage/ArticleItem';
import MatchingRecordContent from 'components/myPage/MatchingRecordContent';
import { appContainer } from 'components/styles/common/common';
import React from 'react';
import { ArticleListItem } from './MyArticlePage';

const MatchingRecordPage = () => {
  const users: ArticleListItem[] = [
    {
      title: '뉴플',
      profileImg:
        'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
      where: '서울특별시 강남구',
      when: '8.6(일)',
      what: '헬스',
    },
    {
      title: '뉴플',
      profileImg:
        'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
      where: '서울특별시 강남구',
      when: '8.6(일)',
      what: '헬스',
    },
    {
      title: '뉴플',
      profileImg:
        'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
      where: '서울특별시 강남구',
      when: '8.6(일)',
      what: '헬스',
    },
  ];

  const users2: ArticleListItem[] = [
    {
      title: '뉴플2',
      profileImg:
        'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
      where: '서울특별시 강남구',
      when: '8.6(일)',
      what: '헬스',
    },
    {
      title: '뉴플2',
      profileImg:
        'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
      where: '서울특별시 강남구',
      when: '8.6(일)',
      what: '헬스',
    },
    {
      title: '뉴플2',
      profileImg:
        'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
      where: '서울특별시 강남구',
      when: '8.6(일)',
      what: '헬스',
    },
    {
      title: '뉴플2',
      profileImg:
        'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
      where: '서울특별시 강남구',
      when: '8.6(일)',
      what: '헬스',
    },
  ];

  const tabs = [
    {
      label: '매칭 중',
      children: (
        <div>
          {users.map((matching, index) => (
            <ArticleItem key={index} article={matching} divide={false} />
          ))}
        </div>
      ),
    },
    {
      label: '매칭 완료',
      children: (
        <div>
          {users2.map((matching, index) => (
            <ArticleItem key={index} article={matching} divide={false} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div css={appContainer}>
      <PrevHeader text="매칭 기록" />
      <MatchingRecordContent tabs={tabs} />
    </div>
  );
};

export default MatchingRecordPage;
