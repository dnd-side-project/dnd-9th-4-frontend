/** @jsxImportSource @emotion/react */
import { ReactComponent as Location } from 'assets/icon/icon_location.svg';
import { ReactComponent as Exercise } from 'assets/icon/icon_exercise.svg';
import React from 'react';
import { myArticleItemArea } from 'components/styles/myPage';
import ScheduleTag from './ScheduleTag';
import { MatchingSchedule } from 'data/type';

const MatchingRecordItem = ({
  article,
  divide,
}: {
  article: MatchingSchedule;
  divide: boolean;
}) => {
  return (
    <div css={myArticleItemArea}>
      <div className="content">
        <img
          className="img"
          src={article.img}
          style={{ width: '52px', height: '52px' }}
        />
        <div className="text">
          <ScheduleTag
            state={article.state}
            tag={article.tag}
            date={article.date}
          />
          <div className="title">{article.title}</div>
          <div className="info-area">
            <div className="info-item">
              <Location width={17} height={17} />
              <div className="item-text">{article.location}</div>
            </div>
            <div className="info-item">
              <Exercise width={17} height={17} />
              <div className="item-text">{article.exercise}</div>
            </div>
          </div>
        </div>
      </div>
      {divide && <div className="divider" />}
    </div>
  );
};

export default MatchingRecordItem;
