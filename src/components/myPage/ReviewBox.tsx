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
  const maxReview = () => {
    const max = review.content.slice(0, Math.min(3, review.content.length));

    return max;
  };
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
        <div className="score-count">{review.count}가지의 리뷰 내용</div>
      </div>
      <div css={reviewBoxDivider} />
      <div css={reviewBoxContentArea}>
        {maxReview().map((content, index) => (
          <div key={index}>{content}</div>
        ))}
      </div>
    </div>
  );
};

export default ReviewBox;
