"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Testimonial {
  name: string;
  testimonial: string;
}

const ParentTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://o145r4of4g.execute-api.us-east-1.amazonaws.com/dev/parent-testimonial/list"
      )
      .then((response) => setTestimonials(response.data.items))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.jQuery &&
      testimonials.length > 0
    ) {
      const $ = window.jQuery;
      $(".testimonial-secound-slide-area").owlCarousel({
        margin: 10,
        responsiveClass: true,
        nav: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: { items: 1 },
          400: { items: 1 },
          600: { items: 1 },
          700: { items: 1 },
          1000: { items: 1 },
        },
      });
    }
  }, [testimonials]);

  return (
    <section
      id="testimonial-secound"
      className="secound-testimoinial-section shapedividers_com-1614">
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
            data-aos="zoom-in">
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
            data-aos-duration="1000">
            {testimonials.map((t, index) => (
              <div className="student-qoute text-center" key={index}>
                <p>“{t.testimonial}”</p>
                <div className="student-name-designation">
                  <span className="st-name bold-font">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonials;
