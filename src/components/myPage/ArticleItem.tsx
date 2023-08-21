/** @jsxImportSource @emotion/react */
import { ArticleListItem } from 'pages/myPage/MyArticlePage';
import { ReactComponent as Location } from 'assets/icon/icon_location.svg';
import { ReactComponent as Time } from 'assets/icon/icon_time.svg';
import { ReactComponent as Exercise } from 'assets/icon/icon_exercise.svg';
import React from 'react';
import { myArticleItemArea } from 'components/styles/myPage';

const ArticleItem = ({
  article,
  divide,
}: {
  article: ArticleListItem;
  divide: boolean;
}) => {
  return (
    <div css={myArticleItemArea}>
      <div className="content">
        <img
          className="img"
          src={article.profileImg}
          style={{ width: '52px', height: '52px' }}
        />
        <div className="text">
          <div className="title">{article.title}</div>
          <div className="info-area">
            <div className="info-item">
              <Location width={17} height={17} />
              <div className="item-text">{article.where}</div>
            </div>
            <div className="info-item">
              <Time width={17} height={17} />
              <div className="item-text">{article.when}</div>
            </div>
            <div className="info-item">
              <Exercise width={17} height={17} />
              <div className="item-text">{article.what}</div>
            </div>
          </div>
        </div>
      </div>
      {divide && <div className="divider" />}
    </div>
  );
};

export default ArticleItem;
