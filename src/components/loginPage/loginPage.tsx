/** @jsxImportSource @emotion/react */
import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { css } from '@emotion/react';
import 로그인그래픽1 from 'assets/login/로그인그래픽1.svg';
import 로그인그래픽2 from 'assets/login/로그인그래픽2.svg';
import 로그인1 from 'assets/login/로그인1.svg';
import 로그인2 from 'assets/login/로그인2.svg';
import 'components/loginPage/loginPageCarousel.css';
import { loginPageStyles } from 'components/styles/loginPageStyles';

const OPTIONS: EmblaOptionsType = {};

const loginPageData = {
  login: [
    {
      title: '나의 일정과 관심사 기반으로',
      subTitle: `운동종목, 운동성향, 지역, 시간, 성격 등
        나와 조건이 맞는 뉴플메이트를 찾아보세요!`,
      src: 로그인그래픽1,
      top: 로그인1,
    },
    {
      title: `나와 맞는 운동메이트와 만나 
      함께 즐겁게 운동해요!`,
      subTitle: `뉴플메이트와 쪽지로 자유롭게 이야기하고
        함께 즐겁게 운동을 즐겨보세요!`,
      src: 로그인그래픽2,
      top: 로그인2,
    },
  ],
};

export function LoginCarousel() {
  const [emblaRef] = useEmblaCarousel(OPTIONS);
  return (
    <div className="embla3">
      <div className="embla3__viewport" ref={emblaRef}>
        <div
          css={css({
            display: 'flex',
          })}
        >
          {loginPageData.login.map((item, index) => (
            <div className="embla3__slide" key={index}>
              <img src={item.top} />
              <p css={loginPageStyles.title}>{item.title}</p>
              <p css={loginPageStyles.subTitle}>{item.subTitle}</p>
              <img className="embla3__slide__img" src={item.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
