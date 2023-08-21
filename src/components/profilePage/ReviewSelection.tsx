/** @jsxImportSource @emotion/react */
import { checkListContainer } from 'components/styles/common/profilePageStyles';
import React, { useState } from 'react';
import CheckList from './CheckList';

const ReviewSelection = ({
  isHigh,
  onUpdateSelectedReviews,
}: {
  isHigh: boolean;
  onUpdateSelectedReviews: (reviews: string[]) => void;
}) => {
  const [selectedReview, setSelectedReview] = useState<string[]>([]);

  const handleReviewClick = (review: string) => {
    let updateReviews;
    if (selectedReview.includes(review)) {
      updateReviews = selectedReview.filter((t) => t !== review);
    } else {
      updateReviews = [...selectedReview, review];
    }

    setSelectedReview(updateReviews);
    onUpdateSelectedReviews(updateReviews);
  };
  const list = (isHigh: boolean) => {
    return isHigh
      ? [
          '친절해요.',
          '재밌어요.',
          '대화가 잘 통해요.',
          '시간 약속을 잘 지켜요.',
          '응답이 빨라요.',
          '전문적이에요.',
          '매너가 좋아요.',
        ]
      : [
          '불친절해요.',
          '약속 장소에 오지 않았어요.',
          '약속 시간에 늦었어요.',
          '응답이 느려요.',
        ];
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
