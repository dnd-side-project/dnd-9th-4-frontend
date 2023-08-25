/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import BackIos from 'assets/BackIos.svg';
import { SerachPageStyles } from 'components/styles/matchingPageStyles';
import XIcon from 'assets/matchingPageIcon/XIcon.svg';
import { useNavigate } from 'react-router-dom';

const PopularKeyword = ['남자만', '오직운동만', '2030', '직장인', '20대'];

const RecentKeyword = ['운동고수', '운동초보', '20대', '30대', '빡세게'];

function SearchPage() {
  const navigate = useNavigate();

  // 최근 검색어
  const [recent, setRecent] = useState<string[]>(RecentKeyword);

  const onClickRecentKeyword = (value: string) => {
    const updatedKeywords = recent.filter((keyword) => keyword !== value);
    setRecent(updatedKeywords);
  };

  // 검색
  const [searchValue, setSearchValue] = useState('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onhandleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('검색됨');
    }
  };

  return (
    <div css={SerachPageStyles.container}>
      <div css={SerachPageStyles.TopBar}>
        <img src={BackIos} onClick={() => navigate(-1)} />
        <input
          type="text"
          name="검색"
          placeholder="검색어를 입력하세요."
          value={searchValue}
          onChange={onChangeInput}
          onKeyDown={onhandleKeyPress}
          css={SerachPageStyles.SearchBar}
        />
      </div>
      <div css={SerachPageStyles.PopularText}>
        최근 가장 많이 검색되고 있어요
      </div>
      <div css={SerachPageStyles.PopularContainer}>
        {PopularKeyword.map((item) => (
          <div key={item} css={SerachPageStyles.PopularButton}>
            {item}
          </div>
        ))}
      </div>
      <div css={SerachPageStyles.RecentContainer}>
        <div css={SerachPageStyles.RecentText}>최근 검색어</div>
        <div css={SerachPageStyles.ClearText} onClick={() => setRecent([])}>
          모두 지우기
        </div>
      </div>
      <div css={SerachPageStyles.RecentKeyWordContaniner}>
        {recent.map((item) => (
          <div
            key={item}
            css={SerachPageStyles.RecentBar}
            onClick={() => onClickRecentKeyword(item)}
          >
            <div>{item}</div>
            <img src={XIcon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
