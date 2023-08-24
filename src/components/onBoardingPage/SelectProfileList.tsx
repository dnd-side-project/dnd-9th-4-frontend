/** @jsxImportSource @emotion/react */
import { EmblaCarousel } from 'components/common/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import { selectProfileListSlider } from 'components/styles/onBoardingPage';
import { useEffect } from 'react';
import { imageList } from 'data/variable';

const SelectProfileList = ({
  setSelectProfile,
}: {
  setSelectProfile: (profile: number) => void;
}) => {
  const OPTIONS: EmblaOptionsType = {
    align: 'center',
    dragFree: false,
    containScroll: 'trimSnaps',
  };

  useEffect(() => {
    console.log(imageList[0]);
  }, []);

  const slides1 = [
    <div css={selectProfileListSlider}>
      <img
        src={imageList[1]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(1)}
      />
      <img
        src={imageList[2]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(2)}
      />
      <img
        src={imageList[3]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(3)}
      />
      <img
        src={imageList[4]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(4)}
      />
      <img
        src={imageList[5]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(5)}
      />
      <img
        src={imageList[6]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(6)}
      />
      <img
        src={imageList[7]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(7)}
      />
      <img
        src={imageList[8]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(8)}
      />
    </div>,
  ];

  const slides2 = [
    <div css={selectProfileListSlider}>
      <img
        src={imageList[9]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(9)}
      />
      <img
        src={imageList[10]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(10)}
      />
      <img
        src={imageList[11]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(11)}
      />
      <img
        src={imageList[12]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(12)}
      />
      <img
        src={imageList[13]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(13)}
      />
      <img
        src={imageList[14]}
        style={{ width: '52px', height: '52px' }}
        onClick={() => setSelectProfile(14)}
      />
    </div>,
  ];

  const slides = [slides1, slides2];

  return <EmblaCarousel options={OPTIONS} slides={slides} />;
};

export default SelectProfileList;
