/** @jsxImportSource @emotion/react */
import { ReactComponent as Location } from 'assets/icon/icon_location.svg';
import { ReactComponent as Exercise } from 'assets/icon/icon_exercise.svg';
import React from 'react';
import { myArticleItemArea } from 'components/styles/myPage';
// import ScheduleTag from './ScheduleTag';
import { MatchingSchedule } from 'data/type';

const MatchingRecordItem = ({
  article,
  divide,
}: {
  article: MatchingSchedule;
  divide: boolean;
}) => {
  // const runtimeConverter = () => {
  //   const date: Date = new Date(article.runtime);
  //   const today: Date = new Date();

  // }

  return (
    <div css={myArticleItemArea}>
      <div className="content">
        <img
          className="img"
          src={article.profileImg}
          style={{ width: '52px', height: '52px' }}
        />
        <div className="text">
          {/* <ScheduleTag
            state={article.state}
            tag={article.tag}
            date={article.date}
          /> */}
          <div className="title">{article.title}</div>
          <div className="info-area">
            <div className="info-item">
              <Location width={17} height={17} />
              <div className="item-text">{article.region}</div>
            </div>
            <div className="info-item">
              <Exercise width={17} height={17} />
              <div className="item-text">{article.sport}</div>
            </div>
          </div>
        </div>
      </div>
      {divide && <div className="divider" />}
    </div>
  );
};

export default MatchingRecordItem;
