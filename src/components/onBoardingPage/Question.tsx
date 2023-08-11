/** @jsxImportSource @emotion/react */
import { question, questionKeyword } from 'components/styles/onBoardingPage';
import React from 'react';

const Question = ({
  keyword,
  sentence,
  isEssential,
}: {
  keyword: string;
  sentence: string;
  isEssential: boolean;
}) => {
  return (
    <div css={question(isEssential)}>
      <span css={questionKeyword}>{keyword}</span>
      {sentence}
    </div>
  );
};

export default Question;
