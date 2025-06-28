"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Teacher {
  name: string;
  display_line_1: string;
  display_line_2: string;
  profile_url: string;
}

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://o145r4of4g.execute-api.us-east-1.amazonaws.com/dev/teacher/list"
      )
      .then((response) => setTeachers(response.data.items))
      .catch((err) => console.error("Failed to fetch teachers:", err));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.jQuery && teachers.length > 0) {
      const $ = window.jQuery;
      $(".teacher-secound-slide").owlCarousel({
        margin: 25,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: [
          "<i class='fas fa-chevron-left'></i>",
          "<i class='fas fa-chevron-right'></i>",
        ],
        smartSpeed: 1000,
        responsive: {
          0: { items: 1 },
          400: { items: 1 },
          600: { items: 2 },
          700: { items: 2 },
          1000: { items: 4 },
        },
      });
    }
  }, [teachers]);

  return (
    <section id="teacher-2" className="secound-teacher-section">
      <div className="container">
        <div className="section-title mb35 headline text-left">
          <span className="subtitle text-uppercase">Our Assets</span>
          <h2>
            Brains and Brawns <span>Teachers.</span>
          </h2>
        </div>

        <div className="teacher-secound-slide">
          {teachers.map((teacher, idx) => (
            <div
              className="teacher-img-text relative-position text-center"
              key={idx}>
              <div className="teacher-img-social relative-position">
                <Image
                  src={teacher.profile_url}
                  alt={teacher.name}
                  width={300}
                  height={300}
                />
                <div className="blakish-overlay"></div>
                <div className="teacher-social-list ul-li">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="teacher-name-designation mt15">
                <span className="teacher-name">{teacher.name}</span>
                <span className="teacher-designation teacher-custom">
                  {teacher.display_line_1}
                </span>
                <span className="teacher-designation teacher-custom">
                  {teacher.display_line_2}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional button (commented in Vue version)
        <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
          <a href="#">All teacher <i className="fas fa-caret-right"></i></a>
        </div>
        */}
      </div>
    </section>
  );
};

export default Teachers;
