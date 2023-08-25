/** @jsxImportSource @emotion/react */
import PrevHeader from 'components/common/PrevHeader';
import { appContainer, bodyContainer } from 'components/styles/common/common';
import React, { useState } from 'react';
import RateIcon from 'components/profilePage/RateIcon';
import {
  writeReviewPageContentContainer,
  writeReviewPageDivider,
  writeReviewRatingMessage,
} from 'components/styles/common/profilePageStyles';
import ReviewSelection from 'components/profilePage/ReviewSelection';
import NextButton from 'components/common/NextButton';
import { useLocation } from 'react-router-dom';
import { imageList } from 'data/variable';
import { baseAxios } from 'api/baseAxios';
import { useMutation } from 'react-query';
import { postReview } from 'api/reviewApi';
import ErrorComponent from 'components/common/ErrorComponent';
import ReviewSuccess from 'components/myPage/ReviewSuccess';

const WriteReviewPage = () => {
  const location = useLocation();
  const userName: string = location.state.userName;
  const imgIdx: number = location.state.profileIdx;
  const targetId: number = location.state.targetId;
  const [currentRating, setCurrentRating] = useState(0);
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { mutate } = useMutation(
    () => postReview(selectedReviews, currentRating, targetId),
    {
      onSuccess: (data) => {
        console.log('POST REVIEW SUCCESS : ', data);
        setIsSuccess(true);
        setIsError(false);
      },
      onError: (error) => {
        console.log(error);
        setIsSuccess(false);
        setIsError(true);
      },
    },
  );

  const onUpdateSelectedReviews = (reviews: string[]) => {
    setSelectedReviews(reviews);
    console.log(reviews);
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
      {isError ? (
        <ErrorComponent />
      ) : isSuccess ? (
        <ReviewSuccess />
      ) : (
        <>
          <PrevHeader text="운동후기 보내기" />
          <div css={bodyContainer}>
            <div css={writeReviewPageContentContainer}>
              <img src={imageList[imgIdx]} width={60} height={60} />
              <div className="question">{`${userName}님과 함께한 운동은 어떠셨나요?`}</div>
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
                  <div css={writeReviewRatingMessage}>
                    {message(currentRating)}
                  </div>
                  <div css={writeReviewPageDivider} />
                  <ReviewSelection
                    isHigh={currentRating >= 3}
                    selectedReview={selectedReviews}
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
              onEnabledClick={() => {
                mutate();
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default WriteReviewPage;
