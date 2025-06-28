"use client";
const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="faq-section faq-secound-home-version backgroud-style">
      <div className="container">
        <div className="section-title mb45 headline text-center">
          <span className="subtitle text-uppercase">B&B FAQ</span>
          <h2>
            Frequently<span> Ask & Questions</span>
          </h2>
        </div>
        <div className="faq-tab mb45">
          <div className="faq-tab-ques ul-li">
            <div className="tab-button text-center mb45">
              <ul className="product-tab">
                <li className="active" rel="tab1">
                  GENERAL
                </li>
                <li rel="tab2">CODING</li>
                <li rel="tab3">MATH</li>
                <li rel="tab4">SCIENCE</li>
                <li rel="tab5">Extras</li>
              </ul>
            </div>
            {/* /tab-head */}
            {/* tab content */}
            <div className="tab-container">
              {/* 1st tab */}
              <div id="tab1" className="tab-content-1 pt35">
                <div id="accordion" className="panel-group">
                  <div className="panel">
                    <div className="panel-title" id="headingOne">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne">
                          What is Brains & Brawns (B&B)?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion">
                      <div className="panel-body">
                        Brains & Brawns is an innovative learning platform
                        dedicated to empowering students in STEM fields. We
                        specialize in math, science, and coding courses,
                        tailored for all age groups. Our hands-on approach
                        ensures students are prepared not only for academic
                        success but also for competitive challenges like
                        Olympiads and coding competitions.
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-title" id="headingTwo">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo">
                          What age groups are your programs for?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion">
                      <div className="panel-body">
                        We offer programs for students of all ages, from
                        elementary to high school. Whether your child is just
                        starting their learning journey or preparing for
                        advanced competition, we have courses designed to match
                        their needs and abilities.
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-title" id="headingThree">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree">
                          Are your classNamees online or in-person?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion">
                      <div className="panel-body">
                        At Brains & Brawns, we provide flexible learning options
                        to accommodate busy families. You can choose from fully
                        online classNamees, in-person sessions, or a hybrid
                        model that combines both. Our proprietary Learning
                        Management System (LMS) ensures seamless access to
                        lessons, assignments, and resources, regardless of the
                        learning format.
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-title" id="headingFoure">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFoure"
                          aria-expanded="false"
                          aria-controls="collapseFoure">
                          How do you track student progress?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseFoure"
                      className="collapse"
                      data-parent="#accordion">
                      <div className="panel-body">
                        We offer personalized progress reports through our
                        proprietary LMS, which tracks performance on quizzes,
                        assignments, and practice exams. Our online testing
                        platform also provides mock tests and analytics,
                        allowing students and parents to see detailed feedback
                        and identify areas for improvement, ensuring steady
                        growth.
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-title" id="headingFive">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseThree">
                          What makes B&B different from other tutoring services?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordion">
                      <div className="panel-body">
                        Brains & Brawns stands out by integrating creative,
                        hands-on learning with academic rigor. Our proprietary
                        LMS makes learning accessible and engaging, while our
                        online test platform allows students to practice and
                        benchmark their skills in real-time. Additionally, we
                        focus on STEM competitions, offering specialized
                        coaching and mock exams that give students an edge in
                        academic contests.
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of #accordion */}
              </div>
              {/* #tab1 */}
              <div id="tab2" className="tab-content-1 pt35">
                <div id="accordion-2" className="panel-group">
                  <div className="panel">
                    <div className="panel-title" id="headingSix">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseSix"
                          aria-expanded="true"
                          aria-controls="collapseSix">
                          What coding languages do you teach?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse show"
                      aria-labelledby="headingSix"
                      data-parent="#accordion-2">
                      <div className="panel-body">
                        We offer a wide range of coding courses, from
                        beginner-friendly languages like Scratch and Python to
                        more advanced options such as JavaScript and C++. Our
                        curriculum focuses on building a solid foundation and
                        real-world application of programming skills.
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of #accordion */}
              </div>
              {/* #tab2 */}
              <div id="tab3" className="tab-content-1 pt35">
                <div id="accordion-3" className="panel-group">
                  <div className="panel">
                    <div className="panel-title" id="heading7">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapse7"
                          aria-expanded="true"
                          aria-controls="collapse7">
                          What sets your math competition prep apart?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapse7"
                      className="collapse show"
                      aria-labelledby="heading7"
                      data-parent="#accordion-3">
                      <div className="panel-body">
                        Our math competition prep is tailored for major contests
                        like AMC, Math Olympiad (MOEMS), and Math Kangaroo. With
                        expert instruction, regular mock exams via our online
                        test platform, and personalized feedback, we ensure each
                        student is fully equipped to excel in these prestigious
                        competitions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* #tab3 */}
              <div id="tab4" className="tab-content-1 pt35">
                <div id="accordion-4" className="panel-group">
                  <div className="panel">
                    <div className="panel-title" id="heading8">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapse8"
                          aria-expanded="true"
                          aria-controls="collapse8">
                          How are science courses structured at B&B?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapse8"
                      className="collapse show"
                      aria-labelledby="heading8"
                      data-parent="#accordion-4">
                      <div className="panel-body">
                        Our science programs focus on both theory and practical
                        experimentation. We cover core topics in physics,
                        chemistry, biology, and earth sciences. Through
                        interactive projects and labs, students develop a deeper
                        understanding of scientific concepts while fostering a
                        natural curiosity for the world around them.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab5" className="tab-content-1 pt35">
                <div id="accordion-5" className="panel-group">
                  <div className="panel">
                    <div className="panel-title" id="heading9">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapse9"
                          aria-expanded="true"
                          aria-controls="collapse9">
                          Can my child try a className before enrolling?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapse9"
                      className="collapse show"
                      aria-labelledby="heading9"
                      data-parent="#accordion-5">
                      <div className="panel-body">
                        Yes! We offer free trial sessions so students can
                        experience our engaging learning environment firsthand
                        before committing to a course.
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-title" id="headingSeven">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven">
                          Do you offer after-school programs?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      aria-labelledby="headingSeven"
                      data-parent="#accordion-2">
                      <div className="panel-body">
                        Absolutely. We offer enriching after-school programs
                        that extend learning beyond the classNameroom, covering
                        a variety of subjects including math, coding, and
                        science.
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-title" id="headingEight">
                      <h3 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight">
                          How do I enroll my child?
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseEight"
                      className="collapse"
                      aria-labelledby="headingEight"
                      data-parent="#accordion-2">
                      <div className="panel-body">
                        Enrolling is easy. Simply visit our Enrollment Page and
                        choose the program that fits your child’s needs. You can
                        also contact us by submitting the form below for
                        personalized guidance.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* #tab3 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
