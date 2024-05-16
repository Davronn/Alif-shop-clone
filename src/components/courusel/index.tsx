import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../courusel/css/sandbox.css";
import "../courusel/css/embla.css";
import "../courusel/css/bace.css";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2800 }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport cursor-pointer" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index, i) => (
            <div className="embla__slide" key={i}>
              <div className="embla__slide__number">
                <img className="w-full h-80" src={index} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
