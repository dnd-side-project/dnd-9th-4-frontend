/** @jsxImportSource @emotion/react */
import ArticleItem from 'components/myPage/ArticleItem';
import EmptyArticle from 'components/myPage/EmptyArticle';
import { profilePageArticleTabArea } from 'components/styles/common/profilePageStyles';
import { MyPost } from 'data/type';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleTabContent = ({
  profileImg,
  articleList,
}: {
  profileImg: string;
  articleList: MyPost[];
}) => {
  const navigate = useNavigate();
  return (
    <div css={profilePageArticleTabArea}>
      {articleList.length > 0 ? (
        articleList.map((article, index) => (
          <ArticleItem
            profileImg={Number(profileImg)}
            imageView={false}
            key={index}
            article={article}
            divide={true}
            onClick={() => {
              navigate(`/post/${article.postId}`);
            }}
          />
        ))
      ) : (
        <EmptyArticle text="아직 등록된 게시글이 없어요!" />
      )}
    </div>
  );
};

export default ArticleTabContent;
