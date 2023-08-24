/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as Rating } from 'assets/myPageIcon/img_review_rating.svg';
import { ReactComponent as Unrating } from 'assets/myPageIcon/img_review_unrating.svg';
import {
  reviewBoxArea,
  reviewBoxContentArea,
  reviewBoxDivider,
  reviewBoxScoreArea,
} from 'components/styles/myPage';
import { Review } from 'data/type';

const ReviewBox = ({ review }: { review: Review }) => {
  return (
    <div css={reviewBoxArea}>
      <div css={reviewBoxScoreArea(review.score)}>
        <div className="score-text">{review.score}</div>
        <div className="score-img">
          <div className="selected">
            <Rating style={{ fill: '#333B4F' }} />
          </div>
          <Unrating />
        </div>
        <div className="score-count">{review.count}명의 리뷰 반영</div>
      </div>
      <div css={reviewBoxDivider} />
      <div css={reviewBoxContentArea}>
        {review.content.map((content, index) => (
          <div key={index}>{content}</div>
        ))}
      </div>
    </div>
  );
};

export default ReviewBox;
