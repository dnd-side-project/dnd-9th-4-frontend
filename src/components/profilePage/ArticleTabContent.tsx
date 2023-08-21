/** @jsxImportSource @emotion/react */
import Profile3 from 'assets/profile/img_profile_3.svg';
import ArticleItem from 'components/myPage/ArticleItem';
import { profilePageArticleTabArea } from 'components/styles/common/profilePageStyles';
import { ArticleListItem } from 'pages/myPage/MyArticlePage';
import React from 'react';

const ArticleTabContent = () => {
  const uploadList: ArticleListItem[] = [
    {
      profileImg: Profile3,
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
    <div css={profilePageArticleTabArea}>
      {uploadList.map((article, index) => (
        <ArticleItem key={index} article={article} divide={true} />
      ))}
    </div>
  );
};

export default ArticleTabContent;
