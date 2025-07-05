"use client";

import { useState } from "react";

const tabs = ["GENERAL", "CODING", "MATH", "SCIENCE", "Extras"];

const faqData: Record<string, { question: string; answer: string }[]> = {
  GENERAL: [
    {
      question: "What is Brains & Brawns (B&B)?",
      answer:
        "Brains & Brawns is an innovative learning platform dedicated to empowering students in STEM fields. We specialize in math, science, and coding courses, tailored for all age groups. Our hands-on approach ensures students are prepared not only for academic success but also for competitive challenges like Olympiads and coding competitions.",
    },
    {
      question: "What age groups are your programs for?",
      answer:
        "We offer programs for students of all ages, from elementary to high school. Whether your child is just starting their learning journey or preparing for advanced competition, we have courses designed to match their needs and abilities.",
    },
    {
      question: "Are your classes online or in-person?",
      answer:
        "At Brains & Brawns, we provide flexible learning options to accommodate busy families. You can choose from fully online classes, in-person sessions, or a hybrid model that combines both. Our proprietary Learning Management System (LMS) ensures seamless access to lessons, assignments, and resources, regardless of the learning format.",
    },
    {
      question: "How do you track student progress?",
      answer:
        "We offer personalized progress reports through our proprietary LMS, which tracks performance on quizzes, assignments, and practice exams. Our online testing platform also provides mock tests and analytics, allowing students and parents to see detailed feedback and identify areas for improvement, ensuring steady growth.",
    },
    {
      question: "What makes B&B different from other tutoring services?",
      answer:
        "Brains & Brawns stands out by integrating creative, hands-on learning with academic rigor. Our proprietary LMS makes learning accessible and engaging, while our online test platform allows students to practice and benchmark their skills in real-time. Additionally, we focus on STEM competitions, offering specialized coaching and mock exams that give students an edge in academic contests.",
    },
  ],
  CODING: [
    {
      question: "What coding languages do you teach?",
      answer:
        "We offer a wide range of coding courses, from beginner-friendly languages like Scratch and Python to more advanced options such as JavaScript and C++. Our curriculum focuses on building a solid foundation and real-world application of programming skills.",
    },
  ],
  MATH: [
    {
      question: "What sets your math competition prep apart?",
      answer:
        "Our math competition prep is tailored for major contests like AMC, Math Olympiad (MOEMS), and Math Kangaroo. With expert instruction, regular mock exams via our online test platform, and personalized feedback, we ensure each student is fully equipped to excel in these prestigious competitions.",
    },
  ],
  SCIENCE: [
    {
      question: "How are science courses structured at B&B?",
      answer:
        "Our science programs focus on both theory and practical experimentation. We cover core topics in physics, chemistry, biology, and earth sciences. Through interactive projects and labs, students develop a deeper understanding of scientific concepts while fostering a natural curiosity for the world around them.",
    },
  ],
  Extras: [
    {
      question: "Can my child try a class before enrolling?",
      answer:
        "Yes! We offer free trial sessions so students can experience our engaging learning environment firsthand before committing to a course.",
    },
    {
      question: "Do you offer after-school programs?",
      answer:
        "Absolutely. We offer enriching after-school programs that extend learning beyond the classroom, covering a variety of subjects including math, coding, and science.",
    },
    {
      question: "How do I enroll my child?",
      answer:
        "Enrolling is easy. Simply visit our Enrollment Page and choose the program that fits your child’s needs. You can also contact us by submitting the form below for personalized guidance.",
    },
  ],
};

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("GENERAL");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="faq-section faq-secound-home-version backgroud-style"
    >
      <div className="container">
        <div className="section-title mb45 headline text-center">
          <span className="subtitle text-uppercase">B&B FAQ</span>
          <h2>
            Frequently<span> Ask & Questions</span>
          </h2>
        </div>

        <div className="faq-tab mb45">
          <div className="faq-tab-ques ul-li">
            {/* Tab Buttons */}
            <div className="tab-button text-center mb45">
              <ul className="product-tab">
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className={tab === activeTab ? "active" : ""}
                    onClick={() => {
                      setActiveTab(tab);
                      setOpenIndex(0); // Close all accordion when tab changes
                    }}
                    style={{
                      cursor: "pointer",
                      display: "inline-block",
                      margin: "0 10px",
                      // padding: "5px 15px",
                      // borderBottom:
                      //   tab === activeTab ? "2px solid black" : "none",
                      // fontWeight: tab === activeTab ? "bold" : "normal",
                    }}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion */}
            <div className="tab-container">
              <div className="pt35" key={activeTab}>
                <div className="panel-group">
                  {faqData[activeTab].map((item, index) => (
                    <div className="panel" key={index}>
                      <div className="panel-title">
                        <h3 className="mb-0">
                          <button
                            className={`btn btn-link ${
                              openIndex === index ? "" : "collapsed"
                            }`}
                            onClick={() =>
                              setOpenIndex((prev) =>
                                prev === index ? null : index
                              )
                            }
                          >
                            {item.question}
                          </button>
                        </h3>
                      </div>
                      {openIndex === index && (
                        <div className="panel-body">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                  {faqData[activeTab].length === 0 && (
                    <p className="text-center">
                      No FAQs available for this topic.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
