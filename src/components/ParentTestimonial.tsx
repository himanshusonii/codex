"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  testimonial: string;
}

const ParentTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("testimonials");
        setTestimonials(res.data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    testimonials.length > 0 && (
      <section
        id="testimonial-secound"
        className="secound-testimoinial-section shapedividers_com-1614"
      >
        <div className="container">
          <div className="testimonial-slide">
            <div className="quote-right">
              <Image
                src="/assets/img/quote-right.png"
                alt="quote right"
                width={200}
                height={200}
              />
            </div>
            <div className="quote-left">
              <Image
                src="/assets/img/quote-right.png"
                alt="quote left"
                width={200}
                height={200}
              />
            </div>

            <div
              className="section-title mb35 headline text-center"
              data-aos="zoom-in"
            >
              <span className="subtitle text-uppercase">
                WHAT THEY SAY ABOUT US
              </span>
              <h2>
                Parents <span>Testimonial.</span>
              </h2>
            </div>

            <div
              className="testimonial-secound-slide-area"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000 }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={false}
                spaceBetween={10}
                slidesPerView={1}
              >
                {testimonials.map((t, index) => (
                  <SwiperSlide key={index}>
                    <div className="student-qoute text-center">
                      <p>“{t.testimonial}”</p>
                      <div className="student-name-designation">
                        <span className="st-name bold-font">{t.name}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ParentTestimonials;
