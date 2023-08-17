/** @jsxImportSource @emotion/react */
import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { css } from '@emotion/react';
import 'components/homePage/newPleMate.css';

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  containScroll: 'trimSnaps',
};

interface Profile {
  memberId: number;
  nickname: string;
  profileImg: string;
}

interface NewPleMate {
  matelist: Profile[];
}

/*
    [뉴플 메이트 캐서셀]
*/
export function NewPleMateCarousel(props: NewPleMate) {
  const [emblaRef] = useEmblaCarousel(OPTIONS);

  const onClickNewPleMate = (memberId: number) => {
    console.log('추후에 클릭한 회원으로 이동', memberId);
  };

  return (
    <div className="embla1">
      <div className="embla1__viewport" ref={emblaRef}>
        <div
          css={css({
            display: 'flex',
          })}
        >
          {props.matelist.map((profile) => (
            <div
              className="embla1__slide"
              key={profile.memberId}
              onClick={() => onClickNewPleMate(profile.memberId)}
            >
              <img
                className="embla1__slide__img"
                src={profile.profileImg}
                alt="Your alt text"
              />
              <p
                css={css({
                  display: 'block',
                  marginTop: '4px',
                  color: '#FFF',
                  width: '70px',
                  textAlign: 'center',
                  fontFamily: 'Pretendard',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '150%',
                  letterSpacing: '-0.266px',
                  marginRight: '30%',
                })}
              >
                {profile.nickname}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
