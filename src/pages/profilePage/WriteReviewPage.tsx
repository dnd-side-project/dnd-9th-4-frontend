/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import { appContainer, bodyContainer } from 'components/styles/common/common';
import React, { useState } from 'react';
import Profile3 from 'assets/profile/img_profile_3.svg';
import RateIcon from 'components/profilePage/RateIcon';
import {
  writeReviewPageContentContainer,
  writeReviewPageDivider,
  writeReviewRatingMessage,
} from 'components/styles/common/profilePageStyles';
import ReviewSelection from 'components/profilePage/ReviewSelection';
import NextButton from 'components/common/NextButton';

const WriteReviewPage = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);

  const onUpdateSelectedReviews = (reviews: string[]) => {
    setSelectedReviews(reviews);
    console.log(selectedReviews);
  };

  const message = (rating: number): string => {
    switch (rating) {
      case 1:
        return '다시는 만나고 싶지 않아요.';
      case 2:
        return '함께 하기에는 잘 안 맞았어요';
      case 3:
        return '그럭저럭 괜찮았어요.';
      case 4:
        return '다음에 또 만나면 좋을 것 같아요.';
      case 5:
        return '당신은 최고의 뉴플메이트!';
      default:
        return '';
    }
  };

  const user = {
    img: Profile3,
    name: '아메리카노',
  };

  const handleRateIconClick = (rating: number) => {
    if (currentRating === rating) {
      setCurrentRating(rating - 1);
    } else {
      setCurrentRating(rating);
    }
    setSelectedReviews([]);
  };

  return (
    <div css={appContainer}>
      <PrevHeader text="운동후기 보내기" />
      <div css={bodyContainer}>
        <div css={writeReviewPageContentContainer}>
          <img src={user.img} width={60} height={60} />
          <div className="question">{`${user.name}님과 함께한 운동은 어떠셨나요?`}</div>
          <div className="rating">
            <RateIcon
              isClicked={currentRating >= 1}
              onClick={() => handleRateIconClick(1)}
            />
            <RateIcon
              isClicked={currentRating >= 2}
              onClick={() => handleRateIconClick(2)}
            />
            <RateIcon
              isClicked={currentRating >= 3}
              onClick={() => handleRateIconClick(3)}
            />
            <RateIcon
              isClicked={currentRating >= 4}
              onClick={() => handleRateIconClick(4)}
            />
            <RateIcon
              isClicked={currentRating >= 5}
              onClick={() => handleRateIconClick(5)}
            />
          </div>
          {currentRating >= 1 && (
            <>
              <div css={writeReviewRatingMessage}>{message(currentRating)}</div>
              <div css={writeReviewPageDivider} />
              <ReviewSelection
                isHigh={currentRating >= 3}
                onUpdateSelectedReviews={onUpdateSelectedReviews}
              />
            </>
          )}
        </div>
      </div>
      {currentRating >= 1 && (
        <NextButton
          text="운동후기 보내기"
          isEnabled={selectedReviews.length > 0}
          onEnabledClick={() => {}}
        />
      )}
    </div>
  );
};

export default WriteReviewPage;
