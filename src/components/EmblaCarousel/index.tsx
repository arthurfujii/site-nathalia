'use client';
import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '@/components/EmblaCarouselArrowButtons';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { Card } from '../Card';
import { Especialidade } from '@/app/especialidades/page';

type PropType = {
  slides: Especialidade[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className='embla'>
      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide) => (
            <div className='embla__slide' key={slide.id}>
              <Card
                img={slide.img}
                title={slide.title}
                description={slide.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
