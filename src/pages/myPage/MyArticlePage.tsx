/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import { appContainer, bodyContainer } from 'components/styles/common/common';
import React from 'react';
import ArticleItem from 'components/myPage/ArticleItem';
import { myArticleTopDivider } from 'components/styles/myPage';
import { useNavigate } from 'react-router-dom';
import { baseAxios } from 'api/baseAxios';
import { useQuery } from 'react-query';
import { getMyArticle } from 'api/articleApi';
import { MyPost } from 'data/type';
import EmptyArticle from 'components/myPage/EmptyArticle';

const MyArticlePage = () => {
  const navigate = useNavigate();

  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { data, isLoading, isError } = useQuery('get-my-article', () =>
    getMyArticle(),
  );

  return (
    <div css={appContainer}>
      <PrevHeader text="내가 작성한 글" />
      <div css={bodyContainer}>
        <div css={myArticleTopDivider} />
        {isError && <div>에러가 발생했습니다.</div>}
        {isLoading ? (
          <div>로딩 중...</div>
        ) : data.length > 0 ? (
          data.map((article: MyPost, index: number) => (
            <ArticleItem
              article={article}
              key={index}
              divide={true}
              onClick={() => navigate(`/post/${article.postId}`)}
            />
          ))
        ) : (
          <EmptyArticle text="아직 작성한 모집글이 없어요." />
        )}
      </div>
    </div>
  );
};

export default MyArticlePage;
