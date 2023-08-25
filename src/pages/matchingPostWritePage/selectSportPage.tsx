/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  NaviBarTitle,
  SelectSportList,
} from 'components/matchingPage/matchingPostWritePageComponents';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postWriteState } from 'recoil/postWrite';
import { getMemberId } from 'api/localStorage';
import { sportListData } from 'data/postWriteData';

function selectSportPage() {
  const [selectSport, setSelectSport] = useState<string | null>(null);
  const [postWrite, setPostWrite] = useRecoilState(postWriteState);

  const navigate = useNavigate();

  const onClickSport = (sport: string) => {
    setSelectSport(sport);
    setPostWrite({
      ...postWrite,
      sport: sport,
      memberId: Number(getMemberId()),
      gender: '',
      age: '',
    });
    setTimeout(() => {
      navigate('/post/detail');
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
