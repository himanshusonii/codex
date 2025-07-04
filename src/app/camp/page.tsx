"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import"/assets/css/mathex.css";

const sliderData = [
  {
    subtitle: "EDUCATION & TRAINING ORGANIZATION",
    title: (
      <>
        <span>Inventive</span> Solution <br /> for <span>Education</span>
      </>
    ),
    btn: { text: "Find Location", href: "#" },
  },
  // You can add more slides as needed
];

const courseCategories = [
  {
    title: "Beginners",
    img: "/assets/img/course/science-cat01.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum voluptas modi ipsa? Cupiditate excepturi quod nostrum officiis eveniet optio!",
    btn: { text: "Register Now", href: "#" },
  },
  {
    title: "Inventors",
    img: "/assets/img/course/science-cat02.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum voluptas modi ipsa? Cupiditate excepturi quod nostrum officiis eveniet optio!",
    btn: { text: "Register Now", href: "#" },
  },
  {
    title: "Geniuses",
    img: "/assets/img/course/science-cat01.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum voluptas modi ipsa? Cupiditate excepturi quod nostrum officiis eveniet optio!",
    btn: { text: "Register Now", href: "#" },
  },
];

const advantages = [
  {
    icon: "flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler",
    title: "Best Teacher",
    desc:
      "Our Educators are highly qualified, and they know how to increase the passion of children toward Science.",
  },
  {
    icon: "flaticon-clipboard-with-pencil",
    title: "Competitive Events",
    desc:
      "We prepare students for competitive events such as MIT Science bowl etc.",
  },
  {
    icon: "flaticon-ruler-and-pencil",
    title: "Standard Science Curriculum",
    desc:
      "Science Courses For Kids USA Our teaching is alligned to NGSS framwork.",
  },
  {
    icon: "flaticon-clipboards",
    title: "Online Learning",
    desc: "ExSciton offers both virtual and in-class learning.",
  },
];

const testimonials = [
  {
    text:
      "This was our first time lorem ipsum and we were very pleased with the whole experience. Your price was lower than other companies. Our experience so we’ll be back in the future lorem ipsum diamet.",
    name: "Robertho Garcia",
  },
  // Add more testimonials as needed
];

const CampPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <>
      {/* Slider Section */}
      <section className="slider-section inner-page-slider">
        <div className="slider-item-details">
          <div className="slider-area exsciton-bg slider-bg-1 relative shapedividers_com-7550">
            <div className="category-slide">
              {sliderData.map((slide, idx) => (
                <div className="slider-text" key={idx}>
                  <div className="section-title mb-5 text-center">
                    <span className="subtitle text-uppercase">{slide.subtitle}</span>
                    <h2>{slide.title}</h2>
                  </div>
                  <div className="text-center">
                    <a className="btn" href={slide.btn.href}>
                      {slide.btn.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Category Section */}
      <section id="course-category" className="course-category-section exsciton-cc-sec py-16">
        <div className="container">
          <div className="section-title mb-10 text-center" data-aos="zoom-in">
            <span className="subtitle text-uppercase">COURSES CATEGORIES</span>
            <h2>
              Science Courses <span>For Children</span>
            </h2>
            <p>
              Science Experiments Courses For Kids, Ap Physics Test Prep In USA, Virtual Science Programs For Kids In USA, Ap Chemistry Online Courses In USA, Best Middle School Science Curriculum In USA, Best Science Experiments For Kids In USA, Ap Exam Preparation Online In USA
            </p>
          </div>
          {courseCategories.map((cat, idx) => (
            <div className="category-item my-12" key={idx}>
              <div className="row align-items-center">
                <div className={`col-md-6 ${idx % 2 === 0 ? '' : 'order-md-2'}`} data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="ci-img">
                    <img src={cat.img} alt={cat.title} />
                  </div>
                </div>
                <div className={`col-md-6 ${idx % 2 === 0 ? '' : 'order-md-1'}`} data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}>
                  <div className="ci-content">
                    <h2 className="text-white">{cat.title}</h2>
                    <p className="text-white">{cat.desc}</p>
                    <a href={cat.btn.href} className="btn">
                      {cat.btn.text}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="why-choose-section exsciton-why backgroud-style shapedividers_com-5596 py-16">
        <div className="container">
          <div className="section-title mb-10 text-center text-dark" data-aos="zoom-in">
            <span className="subtitle text-uppercase text-dark">C0deEX ADVANTAGES</span>
            <h2 className="text-dark">
              Reason <span className="text-dark">Why Choose C0deEX.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              <FeatureCard icon={advantages[0].icon} title={advantages[0].title} text={advantages[0].desc} />
              <FeatureCard icon={advantages[1].icon} title={advantages[1].title} text={advantages[1].desc} />
            </div>
            {/* Center Image */}
            <div className="flex justify-center" data-aos="fade-up" data-aos-duration="3000">
              <img src="/assets/img/banner/porvide-01-removebg-preview.png" alt="img" className="max-w-full h-auto" />
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              <FeatureCard icon={advantages[2].icon} title={advantages[2].title} text={advantages[2].desc} />
              <FeatureCard icon={advantages[3].icon} title={advantages[3].title} text={advantages[3].desc} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial-secound" className="secound-testimoinial-section exsciton-tetstimonial shapedividers_com-1614 py-16">
        <div className="container">
          <div className="testimonial-slide">
            <div className="quote-right">
              <img src="/assets/img/quote-right.png" alt="" />
            </div>
            <div className="quote-left">
              <img src="/assets/img/quote-right.png" alt="" />
            </div>
            <div className="section-title mb-10 text-center" data-aos="zoom-in">
              <span className="subtitle text-uppercase">WHAT THEY SAY ABOUT US</span>
              <h2>
                Parents <span>Testimonial.</span>
              </h2>
            </div>
            <div className="testimonial-secound-slide-area" data-aos="fade-down" data-aos-duration="1000">
              {testimonials.map((t, idx) => (
                <div className="student-qoute text-center" key={idx}>
                  <p>{t.text}</p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <div className="bg-white shadow p-5 rounded" data-aos="zoom-in">
    <div className="text-4xl text-center mb-3">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-center text-gray-700">{text}</p>
  </div>
);

export default CampPage;
