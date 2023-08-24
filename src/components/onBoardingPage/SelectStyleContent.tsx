/** @jsxImportSource @emotion/react */
import Label from 'components/common/Label';
import UnselectedTag from 'components/common/UnselectedTag';
import { stackColumn } from 'components/styles/common/common';
import {
  selectStyleContent,
  subQuestion,
  subQuestionHeader,
} from 'components/styles/onBoardingPage';
import React, { useState } from 'react';

const SelectStyleContent = ({
  onUpdateSelectedStyles,
  onUpdateSelectedInterested,
  defaultStyle,
  defaultInterested,
}: {
  defaultStyle: string[];
  defaultInterested: string[];
  onUpdateSelectedStyles: (styles: string[]) => void;
  onUpdateSelectedInterested: (interested: string[]) => void;
}) => {
  console.log(
    'DEFAULT STYLE : ',
    defaultStyle,
    ' DEFAULT INTERESTED : ',
    defaultInterested,
  );
  const [selectedStyles, setSelectedStyles] = useState<string[]>(defaultStyle);
  const [selectedInterested, setSelectedInterested] =
    useState<string[]>(defaultInterested);

  const handleStyleClick = (style: string) => {
    let updateStyles;
    if (selectedStyles.includes(style)) {
      updateStyles = selectedStyles.filter((t) => t !== style);
    } else {
      updateStyles = [...selectedStyles, style];
    }

    setSelectedStyles(updateStyles);
    onUpdateSelectedStyles(updateStyles);
  };

  const handleInterestedClick = (interested: string) => {
    let updateInterested;
    if (selectedInterested.includes(interested)) {
      updateInterested = selectedInterested.filter((t) => t !== interested);
    } else {
      updateInterested = [...selectedInterested, interested];
    }

    setSelectedInterested(updateInterested);
    onUpdateSelectedInterested(updateInterested);
  };

  return (
    <div css={stackColumn}>
      <div style={{ marginTop: '46.23px' }}>
        <div css={subQuestionHeader}>
          <div css={subQuestion}>운동스타일</div>
          <Label text="중복선택 가능" />
        </div>
        <div css={selectStyleContent}>
          <UnselectedTag
            text="운동만 집중해서"
            onClick={() => handleStyleClick('운동만 집중해서')}
            isSelected={selectedStyles.includes('운동만 집중해서')}
          />
          <UnselectedTag
            text="서로 도우면서 보조"
            onClick={() => handleStyleClick('서로 도우면서 보조')}
            isSelected={selectedStyles.includes('서로 도우면서 보조')}
          />
          <UnselectedTag
            text="편안하고 친근한 분위기"
            onClick={() => handleStyleClick('편안하고 친근한 분위기')}
            isSelected={selectedStyles.includes('편안하고 친근한 분위기')}
          />
          <UnselectedTag
            text="저중량 고반복"
            onClick={() => handleStyleClick('저중량 고반복')}
            isSelected={selectedStyles.includes('저중량 고반복')}
          />
        </div>
      </div>
      <div style={{ marginTop: '38px' }}>
        <div css={subQuestionHeader}>
          <div css={subQuestion}>관심사</div>
          <Label text="중복선택 가능" />
        </div>
        <div css={selectStyleContent}>
          <UnselectedTag
            text="체력 키우기"
            onClick={() => handleInterestedClick('체력 키우기')}
            isSelected={selectedInterested.includes('체력 키우기')}
          />
          <UnselectedTag
            text="다이어트"
            onClick={() => handleInterestedClick('다이어트')}
            isSelected={selectedInterested.includes('다이어트')}
          />
          <UnselectedTag
            text="유산소"
            onClick={() => handleInterestedClick('유산소')}
            isSelected={selectedInterested.includes('유산소')}
          />
          <UnselectedTag
            text="무산소"
            onClick={() => handleInterestedClick('무산소')}
            isSelected={selectedInterested.includes('무산소')}
          />
          <UnselectedTag
            text="바디프로필"
            onClick={() => handleInterestedClick('바디프로필')}
            isSelected={selectedInterested.includes('바디프로필')}
          />
          <UnselectedTag
            text="식단조절"
            onClick={() => handleInterestedClick('식단조절')}
            isSelected={selectedInterested.includes('식단조절')}
          />
          <UnselectedTag
            text="근력 향상"
            onClick={() => handleInterestedClick('근력 향상')}
            isSelected={selectedInterested.includes('근력 향상')}
          />
          <UnselectedTag
            text="건강"
            onClick={() => handleInterestedClick('건강')}
            isSelected={selectedInterested.includes('건강')}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectStyleContent;
