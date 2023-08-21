/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import { appContainer, bodyContainer } from 'components/styles/common/common';
import Profile2 from 'assets/profile/img_profile_2.svg';
import Profile3 from 'assets/profile/img_profile_3.svg';
import React from 'react';
import ArticleItem from 'components/myPage/ArticleItem';
import { myArticleTopDivider } from 'components/styles/myPage';

export type ArticleListItem = {
  profileImg: string;
  title: string;
  where: string;
  when: string;
  what: string;
};

const MyArticlePage = () => {
  const myUploadList: ArticleListItem[] = [
    {
      profileImg: Profile2,
      title: '등산초보 같이 등산 가주세요',
      where: '서울특별시 강남구',
      when: '8.6(일)',
      what: '헬스',
    },
    {
      profileImg: Profile3,
      title: '같이 헬스 다닐 분 구해요!',
      where: '서울특별시 강남구',
      when: '8.6(일)',
      what: '헬스',
    },
  ];
  return (
    <div css={appContainer}>
      <PrevHeader text="내가 작성한 글" />
      <div css={bodyContainer}>
        <div css={myArticleTopDivider} />
        {myUploadList.map((article, index) => (
          <ArticleItem key={index} article={article} divide={true} />
        ))}
      </div>
    </div>
  );
};

export default MyArticlePage;
