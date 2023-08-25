/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import EmptySchedule from 'components/myPage/EmptySchedule';
import ReviewContent from 'components/profilePage/ReviewContent';
import { appContainer, bodyContainer } from 'components/styles/common/common';
import { detailReviewPageStyle } from 'components/styles/myPage';
import { badReview, goodReview } from 'data/variable';
import React from 'react';
import { useLocation } from 'react-router-dom';

const handleGoodReview = (reviews: string[]) => {
  const good = new Map<string, number>();
  for (const item of goodReview) {
    good.set(item, 0);
  }
  for (const item of reviews) {
    const count = good.get(item);
    if (count !== undefined) {
      good.set(item, count + 1);
    }
  }
  for (const [key, value] of good) {
    if (value === 0) good.delete(key);
  }
  const arr = Array.from(good.entries());

  return arr;
};

// const review: [string, number][] = [
//   [goodReview[0], 5],
//   [goodReview[1], 3],
//   [goodReview[0], 5],
//   [goodReview[1], 3],
// ];

const handleBadReview = (reviews: string[]) => {
  const bad = new Map<string, number>();
  for (const item of badReview) {
    bad.set(item, 0);
  }
  for (const item of reviews) {
    const count = bad.get(item);
    if (count !== undefined) {
      bad.set(item, count + 1);
    }
  }
  for (const [key, value] of bad) {
    if (value === 0) bad.delete(key);
  }
  const arr = Array.from(bad.entries());

  return arr;
};

const ReviewDetailPage = () => {
  const location = useLocation();
  const reviews = location.state.reviews;
  const good = handleGoodReview(reviews);
  const bad = handleBadReview(reviews);

  return (
    <div css={appContainer}>
      <PrevHeader text="후기 상세" />
      <div css={[bodyContainer, detailReviewPageStyle]}>
        <div className="title">이런 점이 좋았어요</div>
        <div className="review-list">
          {good.length > 0 ? (
            good.map(
              ([text, count], index) =>
                count > 0 && (
                  <ReviewContent text={text} count={count} key={index} />
                ),
            )
          ) : (
            <EmptySchedule text="등록된 후기가 없어요." setButton={false} />
          )}
        </div>
        <div className="title">이런 점은 아쉬워요</div>
        <div className="review-list">
          {bad.length > 0 ? (
            bad.map(
              ([text, count], index) =>
                count > 0 && (
                  <ReviewContent text={text} count={count} key={index} />
                ),
            )
          ) : (
            <EmptySchedule text="등록된 후기가 없어요." setButton={false} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailPage;
