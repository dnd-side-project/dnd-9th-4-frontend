/** @jsxImportSource @emotion/react */
import { ReactComponent as Location } from 'assets/icon/icon_location.svg';
import { ReactComponent as Exercise } from 'assets/icon/icon_exercise.svg';
import React from 'react';
import { myArticleItemArea } from 'components/styles/myPage';
import ScheduleTag from './ScheduleTag';
import { MatchingSchedule } from 'data/type';
import { imageList } from 'data/variable';
import { useNavigate } from 'react-router-dom';

const MatchingRecordItem = ({
  state,
  article,
  divide,
}: {
  state: 'RESERVED' | 'COMPLETED';
  article: MatchingSchedule;
  divide: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div css={myArticleItemArea}>
      <div className="content">
        <img
          className="img"
          src={imageList[Number(article.profileImg)]}
          style={{ width: '52px', height: '52px' }}
          onClick={() => {
            navigate(`/profile/${article.memberId}`);
          }}
        />
        <div className="text">
          <ScheduleTag state={state} date={article.runtime} />
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
