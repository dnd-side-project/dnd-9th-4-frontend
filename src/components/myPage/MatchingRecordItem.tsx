/** @jsxImportSource @emotion/react */
import { ReactComponent as Location } from 'assets/icon/icon_location.svg';
import { ReactComponent as Exercise } from 'assets/icon/icon_exercise.svg';
import React from 'react';
import { myArticleItemArea } from 'components/styles/myPage';
import ScheduleTag from './ScheduleTag';
import { MatchingSchedule } from 'data/type';
import { imageList, sportValue } from 'data/variable';
import { useNavigate } from 'react-router-dom';
import SendReviewButton from './SendReviewButton';

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
      <div className="matching-content">
        <img
          className="img"
          src={imageList[Number(article.profileImg)]}
          style={{ width: '52px', height: '52px' }}
          onClick={() => {
            navigate(`/profile/${article.memberId}`);
          }}
        />
        <div
          className="text"
          onClick={() => {
            navigate(`/post/${article.postId}`);
          }}
        >
          <ScheduleTag state={state} date={article.runtime} />
          <div className="title">{article.title}</div>
          <div className="info-area">
            <div className="info-item">
              <Location width={17} height={17} />
              <div className="item-text">{article.region}</div>
            </div>
            <div className="info-item">
              <Exercise width={17} height={17} />
              <div className="item-text">{sportValue[article.sport]}</div>
            </div>
          </div>
        </div>
      </div>
      {state === 'COMPLETED' && (
        <div>
          <SendReviewButton
            text="운동 후기 보내기"
            onClick={() => {
              navigate(`/review/${article.memberId}/send`, {
                state: {
                  userName: article.username,
                  profileIdx: article.profileImg,
                  targetId: article.memberId,
                  matchId: article.id,
                },
              });
            }}
          />
        </div>
      )}
      {divide && <div className="divider" />}
    </div>
  );
};

export default MatchingRecordItem;
