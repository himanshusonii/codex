"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface Slide {
  content: ReactNode;
}

interface CarouselSectionProps {
  id?: string;
  backgroundClass?: string;
  slides: Slide[];
  interval?: number;
}

const CarouselSection = ({
  id = "slide",
  backgroundClass = "exsciton-bg slider-bg-1 shapedividers_com-7550",
  slides,
  interval = 3500,
}: CarouselSectionProps) => {
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
    <section id={id} className="slider-section inner-page-slider">
      <div className="slider-item-details">
        <div
          className={`slider-area ${backgroundClass} relative min-h-[300px] md:min-h-[500px] overflow-hidden`}
        >
          <div className="category-slide relative w-full h-full">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`slider-text absolute top-0 left-0 w-full h-full flex justify-center items-center transition-opacity duration-700 ease-in-out ${
                  idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="section-title mb20 headline text-center text-white">
                  <div className="layer-1-3">{slide.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
