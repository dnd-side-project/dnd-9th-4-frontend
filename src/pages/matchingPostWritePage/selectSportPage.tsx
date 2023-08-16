/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  NaviBarTitle,
  SelectSportList,
} from 'components/matchingPage/matchingPostWritePageComponents';
import { useNavigate } from 'react-router-dom';
import 헬스아이콘 from 'assets/sportTypeIcon/헬스.svg';
import 러닝아이콘 from 'assets/sportTypeIcon/러닝.svg';
import 수영아이콘 from 'assets/sportTypeIcon/수영.svg';
import 등산아이콘 from 'assets/sportTypeIcon/등산.svg';
import 싸이클아이콘 from 'assets/sportTypeIcon/싸이클.svg';
import 기타아이콘 from 'assets/sportTypeIcon/기타.svg';
import { useRecoilState } from 'recoil';
import { postWriteState } from 'recoil/postWrite';

// 아이콘 사이즈 맞춰주면 좋겠음
const sportListData = {
  sportList: [
    {
      id: 1,
      sport: '헬스',
      img: 헬스아이콘,
    },
    {
      id: 2,
      sport: '러닝',
      img: 러닝아이콘,
    },
    {
      id: 3,
      sport: '수영',
      img: 수영아이콘,
    },
    {
      id: 4,
      sport: '싸이클',
      img: 싸이클아이콘,
    },
    {
      id: 5,
      sport: '등산',
      img: 등산아이콘,
    },
    {
      id: 6,
      sport: '기타',
      img: 기타아이콘,
    },
  ],
};

function selectSportPage() {
  const [selectSport, setSelectSport] = useState<string | null>(null);
  const [postWrite, setPostWrite] = useRecoilState(postWriteState);

  const navigate = useNavigate();

  const onClickSport = (sport: string) => {
    setSelectSport(sport);
    setPostWrite({ ...postWrite, sport: sport });
    setTimeout(() => {
      navigate('/post/style');
    }, 200); // 0.2초 뒤에 navigate 함수 실행
  };

  console.log(postWrite);

  return (
    <div>
      <NaviBarTitle title="운동종목 설정" />
      <div
        css={css({
          height: '1px',
          backgroundColor: '#E2E2E2',
          marginBlock: '10px',
          //marginTop: '20px',
        })}
      />
      <SelectSportList
        sportListData={sportListData}
        selectSport={selectSport}
        onClickSport={onClickSport}
      />
    </div>
  );
}

export default selectSportPage;
