/** @jsxImportSource @emotion/react */
import Profile1 from 'assets/profile/img_profile_1.svg';
import Profile2 from 'assets/profile/img_profile_2.svg';
import Profile3 from 'assets/profile/img_profile_3.svg';
import Profile4 from 'assets/profile/img_profile_4.svg';
import Profile5 from 'assets/profile/img_profile_5.svg';
import Profile6 from 'assets/profile/img_profile_6.svg';
import Profile7 from 'assets/profile/img_profile_7.svg';
import Profile8 from 'assets/profile/img_profile_8.svg';
import Profile9 from 'assets/profile/img_profile_9.svg';
import Profile10 from 'assets/profile/img_profile_10.svg';
import Profile11 from 'assets/profile/img_profile_11.svg';
import Profile12 from 'assets/profile/img_profile_12.svg';
import Profile13 from 'assets/profile/img_profile_13.svg';
import Profile14 from 'assets/profile/img_profile_14.svg';
import { EmblaCarousel } from 'components/common/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import { selectProfileListSlider } from 'components/styles/onBoardingPage';

const SelectProfileList = ({
  setSelectProfile,
}: {
  setSelectProfile: (profile: string) => void;
}) => {
  const OPTIONS: EmblaOptionsType = {
    align: 'center',
    dragFree: false,
    containScroll: 'trimSnaps',
  };

  const slides1 = [
    <div css={selectProfileListSlider}>
      <img
        src={Profile1}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile1)}
      />
      <img
        src={Profile2}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile2)}
      />
      <img
        src={Profile3}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile3)}
      />
      <img
        src={Profile4}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile4)}
      />
      <img
        src={Profile5}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile5)}
      />
      <img
        src={Profile6}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile6)}
      />
      <img
        src={Profile7}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile7)}
      />
      <img
        src={Profile8}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile8)}
      />
    </div>,
  ];

  const slides2 = [
    <div css={selectProfileListSlider}>
      <img
        src={Profile9}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile9)}
      />
      <img
        src={Profile10}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile10)}
      />
      <img
        src={Profile11}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile11)}
      />
      <img
        src={Profile12}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile12)}
      />
      <img
        src={Profile13}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile13)}
      />
      <img
        src={Profile14}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(Profile14)}
      />
    </div>,
  ];

  const slides = [slides1, slides2];

  return <EmblaCarousel options={OPTIONS} slides={slides} />;
};

export default SelectProfileList;
