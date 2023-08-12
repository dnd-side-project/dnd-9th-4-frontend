/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  NaviBarTitle,
  BottomButton,
  StyleInterTitle,
} from 'components/matchingPage/matchingPostWritePageComponents';
import { useNavigate } from 'react-router-dom';
import { matchingPostWriteStyles } from 'components/styles/matchingPostWriteStyles';

function sportSytleInterestPage() {
  const navigate = useNavigate();

  const [sportStyle, setSportStyle] = useState<string[]>([]);
  const [sportInter, setSportInter] = useState<string[]>([]);

  // 운동 스타일 클릭
  const onClickSportStyle = (style: string) => {
    if (sportStyle.includes(style)) {
      setSportStyle(sportStyle.filter((item) => item !== style));
    } else {
      setSportStyle([...sportStyle, style]);
    }
  };

  // 운동 관심사 클릭
  const onClickSportInterest = (interest: string) => {
    if (sportInter.includes(interest)) {
      setSportInter(sportInter.filter((item) => item !== interest));
    } else {
      setSportInter([...sportInter, interest]);
    }
  };

  // 다음 버튼 클릭
  const onClickNextButton = () => {
    navigate('/post/detail');
  };

  return (
    <div>
      <NaviBarTitle title="운동스타일/관심사" />
      <div
        css={css({
          height: '1px',
          backgroundColor: '#E2E2E2',
          marginBlock: '10px',
        })}
      />
      <div css={matchingPostWriteStyles.styleInterestBody}>
        <div>
          <StyleInterTitle title="운동스타일" />
          <div css={matchingPostWriteStyles.styleInterestButton}>
            <div>
              {['운동만 집중해서', '서로 도우면서 보조'].map((style) => (
                <div
                  key={style}
                  onClick={() => onClickSportStyle(style)}
                  className={sportStyle.includes(style) ? 'selected' : ''}
                >
                  {style}
                </div>
              ))}
            </div>
            <div>
              {['편안하고 친근한 분위기', '저중량 고반복'].map((style) => (
                <div
                  key={style}
                  onClick={() => onClickSportStyle(style)}
                  className={sportStyle.includes(style) ? 'selected' : ''}
                >
                  {style}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <StyleInterTitle title="관심사" />
          <div css={matchingPostWriteStyles.styleInterestButton}>
            <div>
              {['체력 키우기', '다이어트', '유산소'].map((interest) => (
                <div
                  key={interest}
                  onClick={() => onClickSportInterest(interest)}
                  className={sportInter.includes(interest) ? 'selected' : ''}
                >
                  {interest}
                </div>
              ))}
            </div>
            <div>
              {['무산소', '바디프로필', '식단조절'].map((interest) => (
                <div
                  key={interest}
                  onClick={() => onClickSportInterest(interest)}
                  className={sportInter.includes(interest) ? 'selected' : ''}
                >
                  {interest}
                </div>
              ))}
            </div>
            <div>
              {['근력 향상', '건강'].map((interest) => (
                <div
                  key={interest}
                  onClick={() => onClickSportInterest(interest)}
                  className={sportInter.includes(interest) ? 'selected' : ''}
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomButton title="다음" onClickButton={onClickNextButton} />
    </div>
  );
}

export default sportSytleInterestPage;
