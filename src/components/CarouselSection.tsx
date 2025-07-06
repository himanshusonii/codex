"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

interface Slide {
  content: ReactNode;
}

interface CarouselSectionProps {
  slides: { content: ReactNode }[];
  interval?: number;
  id?: string;
  backgroundClass?: string;
}


const CarouselSection = ({ slides, interval = 3500 }: CarouselSectionProps) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slideCount = slides.length;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, interval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, slideCount, interval]);

  return (
    <section id="slide" className="slider-section inner-page-slider">
      <div className="slider-item-details">
        <div className="slider-area exsciton-bg slider-bg-1 relative-position shapedividers_com-7550">
          <div className="category-slide">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`slider-text ${
                  idx === current ? "d-block" : "d-none"
                }`}
              >
                <div className="section-title mb20 headline text-center">
                  <div className="layer-1-3">{slide.content}</div>
                </div>
                <div className="layer-1-4 text-center">{/* optional button layer */}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
