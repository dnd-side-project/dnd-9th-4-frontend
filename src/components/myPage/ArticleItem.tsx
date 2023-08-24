/** @jsxImportSource @emotion/react */
import { ReactComponent as Location } from 'assets/icon/icon_location.svg';
import { ReactComponent as Time } from 'assets/icon/icon_time.svg';
import { ReactComponent as Exercise } from 'assets/icon/icon_exercise.svg';
import React from 'react';
import { myArticleItemArea } from 'components/styles/myPage';
import { MyPost } from 'data/type';
import { day, imageList, sportValue } from 'data/variable';

const ArticleItem = ({
  article,
  divide,
  onClick,
  imageView,
}: {
  article: MyPost;
  divide: boolean;
  imageView?: boolean;
  onClick: () => void;
}) => {
  const DateToString = (date: string) => {
    const target = new Date(date);
    const format =
      target.getMonth() +
      1 +
      '월' +
      target.getDate() +
      '일(' +
      day[target.getDay()] +
      ')';

    return format;
  };
  return (
    <div css={myArticleItemArea}>
      <div className="content">
        <img
          className="img"
          src={imageList[1]}
          style={{
            width: '52px',
            height: '52px',
            display: imageView === false ? 'none' : 'flex',
          }}
        />
        <div className="text" onClick={onClick}>
          <div className="title">{article.title}</div>
          <div className="info-area">
            <div className="info-item">
              <Location width={17} height={17} />
              <div className="item-text">{article.region}</div>
            </div>
            <div className="info-item">
              <Time width={17} height={17} />
              <div className="item-text">{DateToString(article.runtime)}</div>
            </div>
            <div className="info-item">
              <Exercise width={17} height={17} />
              <div className="item-text">{sportValue[article.sport]}</div>
            </div>
          </div>
        </div>
      </div>
      {divide && <div className="divider" />}
    </div>
  );
};

export default ArticleItem;
