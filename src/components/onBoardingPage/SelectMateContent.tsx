/** @jsxImportSource @emotion/react */
import Label from 'components/common/Label';
import UnselectedTag from 'components/common/UnselectedTag';
import { stackColumn, stackRow } from 'components/styles/common/common';
import {
  subQuestion,
  subQuestionHeader,
} from 'components/styles/onBoardingPage';
import { mate } from 'pages/onBoardingPage/OnBoardingPage6';
import React, { useEffect, useState } from 'react';
import InterestedExerciseArea from './InterestedExerciseArea';

const SelectMateContent = ({
  onUpdateMateInfo,
}: {
  onUpdateMateInfo: (mateInfo: mate) => void;
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [mateGender, setMateGender] = useState('');
  const [mateAge, setMateAge] = useState('');
  const [mateCharacter, setMateCharacter] = useState('');
  const [mateCareer, setMateCareer] = useState('');

  const onUpdateSelectedTags = (tags: string[]) => {
    setSelectedTags(tags);
    console.log(selectedTags);
  };

  useEffect(() => {
    onUpdateMateInfo({
      interested: selectedTags,
      gender: mateGender,
      age: mateAge,
      character: mateCharacter,
      career: mateCareer,
    });
  }, [selectedTags, mateGender, mateAge, mateCharacter, mateCareer]);

  return (
    <div css={stackColumn}>
      <div style={{ marginTop: '29px' }}>
        <div css={subQuestionHeader}>
          <div css={subQuestion}>관심있는 운동</div>
          <Label text="중복선택 가능" />
        </div>
        <InterestedExerciseArea onUpdateSelectedTags={onUpdateSelectedTags} />
      </div>
      <div style={{ marginTop: '44px' }}>
        <div css={subQuestionHeader}>
          <div css={subQuestion}>성별</div>
        </div>
        <div css={stackRow}>
          <UnselectedTag
            text="같은 성별"
            onClick={() => {
              setMateGender('같은 성별');
            }}
            isSelected={mateGender === '같은 성별'}
          />
          <UnselectedTag
            text="모든 성별"
            onClick={() => {
              setMateGender('모든 성별');
            }}
            isSelected={mateGender === '모든 성별'}
          />
        </div>
      </div>
      <div style={{ marginTop: '17px' }}>
        <div css={subQuestionHeader}>
          <div css={subQuestion}>나이</div>
        </div>
        <div css={stackRow}>
          <UnselectedTag
            text="나이 상관없어요"
            onClick={() => {
              setMateAge('나이 상관없어요');
            }}
            isSelected={mateAge === '나이 상관없어요'}
          />
          <UnselectedTag
            text="비슷한 또래"
            onClick={() => {
              setMateAge('비슷한 또래');
            }}
            isSelected={mateAge === '비슷한 또래'}
          />
        </div>
      </div>
      <div style={{ marginTop: '17px' }}>
        <div css={subQuestionHeader}>
          <div css={subQuestion}>성격</div>
        </div>
        <div css={stackRow}>
          <UnselectedTag
            text="친화력 좋은"
            onClick={() => {
              setMateCharacter('친화력 좋은');
            }}
            isSelected={mateCharacter === '친화력 좋은'}
          />
          <UnselectedTag
            text="묵묵한 성격"
            onClick={() => {
              setMateCharacter('묵묵한 성격');
            }}
            isSelected={mateCharacter === '묵묵한 성격'}
          />
        </div>
      </div>
      <div style={{ marginTop: '17px', marginBottom: '45px' }}>
        <div css={subQuestionHeader}>
          <div css={subQuestion}>운동 경력</div>
        </div>
        <div css={stackColumn}>
          <div css={stackRow}>
            <UnselectedTag
              text="경력 상관없어요"
              onClick={() => {
                setMateCareer('경력 상관없어요');
              }}
              isSelected={mateCareer === '경력 상관없어요'}
            />
            <UnselectedTag
              text="초보도 환영"
              onClick={() => {
                setMateCareer('초보도 환영');
              }}
              isSelected={mateCareer === '초보도 환영'}
            />
          </div>
          <div css={stackRow}>
            <UnselectedTag
              text="비슷한 경력 선호해요"
              onClick={() => {
                setMateCareer('비슷한 경력 선호해요');
              }}
              isSelected={mateCareer === '비슷한 경력 선호해요'}
            />
            <UnselectedTag
              text="실력자 환영"
              onClick={() => {
                setMateCareer('실력자 환영');
              }}
              isSelected={mateCareer === '실력자 환영'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectMateContent;
