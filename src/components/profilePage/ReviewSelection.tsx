/** @jsxImportSource @emotion/react */
import { checkListContainer } from 'components/styles/common/profilePageStyles';
import { badReview, goodReview } from 'data/variable';
import React from 'react';
import CheckList from './CheckList';

const ReviewSelection = ({
  isHigh,
  selectedReview,
  onUpdateSelectedReviews,
}: {
  isHigh: boolean;
  selectedReview: string[];
  onUpdateSelectedReviews: (reviews: string[]) => void;
}) => {
  const handleReviewClick = (review: string) => {
    let updateReviews;
    if (selectedReview.includes(review)) {
      updateReviews = selectedReview.filter((t) => t !== review);
    } else {
      updateReviews = [...selectedReview, review];
    }

    onUpdateSelectedReviews(updateReviews);
  };
  const list = (isHigh: boolean) => {
    return isHigh ? goodReview : badReview;
  };
  return (
    <div css={checkListContainer}>
      {list(isHigh).map((item, index) => (
        <CheckList
          key={index}
          text={item}
          onClick={() => handleReviewClick(item)}
          isClicked={selectedReview.includes(item)}
        />
      ))}
    </div>
  );
};

export default ReviewSelection;
