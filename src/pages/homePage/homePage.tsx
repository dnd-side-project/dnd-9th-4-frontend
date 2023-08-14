/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import MingcuteRightLine from 'assets/mingcute_right-line.svg';
import {
  HomeTopScreen,
  MatchingPostList,
  TitleHeader,
  NewPleMateList,
} from 'components/homePage/homePageComponents';
import { ButtonNavigation } from 'components/common/commonComponents';
import LogoBox from 'assets/newPleLogo/LogoBox.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from 'config';

// 내 주변 뉴플메이트 테스트 데이터
const profileTestData = {
  matelist: [
    {
      memberId: 1,
      nickname: '아이스크림',
      profileImg:
        'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg',
    },
    {
      memberId: 2,
      nickname: '석촌호수',
      profileImg:
        'https://cdn.pixabay.com/photo/2016/11/02/14/32/lotte-world-tower-1791802_1280.jpg',
    },
    {
      memberId: 4,
      nickname: '고양이',
      profileImg:
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    },
  ],
};

// 새로운 매칭 모집글 테스트 데이터
const mathcingPostsTestData = {
  postList: [
    {
      id: 1,
      title: '런닝 메이트 구해요',
      sport: '런닝',
      region: '대전광역시 유성구',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2022/08/19/18/56/gym-7397553_1280.jpg',
    },
    {
      id: 2,
      title: '런닝 메이트 구해요',
      sport: '런닝',
      region: '대전광역시 유성구',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_1280.jpg',
    },
    {
      id: 3,
      title: '같이 헬스다닐 분 구해요!',
      sport: '헬스',
      region: '인천광역시 남동구',
      time: '18:30:00 - 21:00:00',
      endDate: '08.15(화)',
      image:
        'https://cdn.pixabay.com/photo/2016/07/09/05/20/runner-1505712_1280.jpg',
    },
  ],
};

function HomePage() {
  const navigate = useNavigate();
  const onClickMatchingPostList = () => {
    navigate('/matching');
    window.scrollTo(0, 0);
  };

  axios
    .get(`${config.backendUrl}/health`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  axios
    .get('http://localhost:8080/getTest')
    .then((res) => {
      console.log('로컬에서 보낸 데이터', res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <HomeTopScreen
        nickname="뉴플"
        profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qL4TnNIt-zmP-lncsFEHdAbP3Hwn1z29vQ&usqp=CAU"
      />
      <div>
        <TitleHeader title="내 주변 뉴플메이트" />
        <NewPleMateList matelist={profileTestData.matelist} />
      </div>
      <div>
        <div
          css={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
          })}
        >
          <TitleHeader title="새로운 매칭 모집글" />
          <div
            css={css({
              paddingTop: '30.65px',
              paddingRight: '21.79px',
            })}
          >
            <img src={MingcuteRightLine} onClick={onClickMatchingPostList} />
          </div>
        </div>
        <MatchingPostList postList={mathcingPostsTestData.postList} />
      </div>
      <div>
        <img
          src={LogoBox}
          css={css({
            height: '105.322px',
            width: '100%',
            marginTop: '50px',
          })}
        />
      </div>
      <div>
        <TitleHeader title="오늘의 운동정보" />
        <div
          css={css({
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '13.67px',
            paddingLeft: '19.5px',
            paddingBottom: '128.46px',
            '& > div': {
              marginRight: '19.18px',
              width: '143.59px',
              height: '174.302px',
              flexShrink: '0',
              backgroundColor: '#ECF6FE',
            },
          })}
        >
          <div>미완성</div>
        </div>
      </div>
      <ButtonNavigation />
    </div>
  );
}

export default HomePage;
