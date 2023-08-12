/** @jsxImportSource @emotion/react */
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import {
  slideDots,
  slideDotStyle,
  slider,
  sliderArea,
  sliderContainer,
} from 'components/styles/onBoardingPage';
import { DotButton } from './EmblaCarouselArrowsDotsButton';

type PropType = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="embla" ref={emblaRef} css={sliderContainer}>
        <div className="embla__container" css={sliderArea}>
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index} css={slider}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots" css={slideDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            css={slideDotStyle(index === selectedIndex)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : '',
            )}
          />
        ))}
      </div>
    </>
  );
};
