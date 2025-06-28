import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MissionStatement from "@/components/MissionStatement";
import ParentTestimonials from "@/components/ParentTestimonial";
import Teachers from "@/components/Teachers";
import Head from "next/head";
import Image from "next/image";

interface Course {
  title: string;
  description: string;
  imageFileName: string;
  aosStyle: string;
}

interface Advantage {
  title: string;
  description: string;
  iconClass: string;
}

const coursesData: Course[] = [
  {
    title: "Master Math",
    description:
      "Master math with our engaging curriculum and expert guidance.",
    imageFileName: "math-cat.png",
    aosStyle: "fade-right",
  },
  {
    title: "Coding",
    description:
      "Learn coding from industry experts and build your digital future.",
    imageFileName: "code-cat.png",
    aosStyle: "zoom-in",
  },
  {
    title: "Science Unleashed",
    description:
      "Experience hands-on science experiments and ignite your curiosity.",
    imageFileName: "science-cat.png",
    aosStyle: "fade-left",
  },
];

const advantagesDataRight: Advantage[] = [
  {
    title: "Passionate Educators",
    description:
      "Our instructors are mentors, igniting a love of learning while nurturing confidence and growth in every child.",
    iconClass: "flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler",
  },
  {
    title: "Interactive, Hands-On Learning",
    description:
      "Our courses transform complex concepts into engaging, hands-on adventures.",
    iconClass: "flaticon-clipboard-with-pencil",
  },
  {
    title: "Build Confidence and Problem-Solving Skills",
    description:
      "Our curriculum fosters critical thinking and creative problem-solving.",
    iconClass: "flaticon-clipboard-with-pencil",
  },
];

const advantagesDataLeft: Advantage[] = [
  {
    title: "Real-World Skill Building",
    description:
      "We focus on practical applications, equipping students with skills for future success.",
    iconClass: "flaticon-ruler-and-pencil",
  },
  {
    title: "Balanced Growth",
    description: "We combine rigorous academics with creative exploration.",
    iconClass: "flaticon-clipboards",
  },
  {
    title: "Flexible Learning Options",
    description:
      "Choose from after-school programs, weekend workshops, or self-paced online courses.",
    iconClass: "flaticon-clipboards",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Head Section */}
      <Head>
        <title>Brains & Brawns</title>
        <meta
          name="description"
          content="Empowering students in STEM fields with innovative learning"
        />
      </Head>

      {/* Hero Section */}
      <section id="slide" className="slider-section">
        <div id="slider-item" className="slider-item-details">
          <div className="slider-area slider-bg-5 slider-bg-1 relative-position">
            <div className="slider-text">
              <div className="section-title mb20 headline text-center">
                <div className="layer-1-3">
                  <h2>
                    <span>Unlock</span> Young <br />
                    Minds <span>Today</span>
                  </h2>
                </div>
              </div>
              <div className="layer-1-4 text-center"></div>
            </div>
          </div>
          <div className="slider-area slider-bg-2 relative-position">
            <div className="slider-text">
              <div className="section-title mb20 headline text-center">
                <div className="layer-1-3">
                  <h2>
                    <span>Build </span>Skills <br />
                    for <span>Tomorrow</span>
                  </h2>
                </div>
              </div>
              <div className="layer-1-4 text-center"></div>
            </div>
          </div>
          <div className="slider-area slider-bg-3 relative-position">
            <div className="slider-text">
              <div className="section-title mb20 headline text-center">
                <div className="layer-1-3">
                  <h2>
                    <span>Shape </span> a <br />
                    Brighter <span>Future</span>
                  </h2>
                </div>
              </div>
              <div className="layer-1-4 text-center"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}

      <section id="best-course" className="best-course-section">
        <div className="container">
          <div
            className="section-title mb45 headline text-center"
            data-aos="zoom-in">
            <span className="subtitle text-uppercase">Our Popular Courses</span>
            <h2>
              Our<span> Program Offering</span>
            </h2>
          </div>
          <div className="best-course-area mb45">
            <div className="row">
              {coursesData.map((course: Course, index: number) => (
                <div
                  className="col-md-4"
                  data-aos={course.aosStyle}
                  key={index}>
                  <div className="best-course-pic-text relative-position">
                    <div className="best-course-pic relative-position">
                      <Image
                        src={"/assets/img/course/" + course.imageFileName}
                        alt=""
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="best-course-text">
                      <div className="course-title mb20 headline relative-position">
                        <h2>
                          <a href="math.html">{course.title}</a>
                        </h2>
                      </div>
                      <div className="course-meta">
                        <span className="course-category">
                          <a href="math.html">{course.description}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section
        id="why-choose"
        className="why-choose-section backgroud-style shapedividers_com-6217 jarallax">
        <div className="container">
          <div
            className="section-title mb-5 headline text-center text-dark"
            data-aos="zoom-in">
            <span className="subtitle text-uppercase text-dark">
              The B&B Advantage
            </span>
            <h2 className="text-dark">
              <span className="text-dark">Unlock Your Child’s Potential</span>
            </h2>
          </div>
          <div className="extra-features-content">
            <div className="row">
              {/* extra-left-content */}
              <div className="col-md-4 col-sm-6">
                <div className="extra-left">
                  <div className="extra-left-content" data-aos="zoom-in-right">
                    {advantagesDataRight.map((advantage, index) => (
                      <div className="extra-icon-text" key={index}>
                        <div className="features-icon gradient-bg text-center">
                          <i className={advantage.iconClass}></i>
                        </div>
                        <div className="features-text">
                          <div className="features-text-title">
                            <h3>{advantage.title}</h3>
                          </div>
                          <div className="features-text-dec">
                            <span>{advantage.description}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* extra-left */}
              {/* middle-image */}
              <div className="col-sm-4">
                <div
                  className="extra-pic text-center"
                  data-aos="fade-up"
                  data-aos-duration="3000">
                  <Image
                    src="/assets/img/banner/think-girl.png"
                    alt="img"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              {/* middle-image  */}
              {/* extra-right-content */}
              <div className="col-md-4 col-sm-6">
                <div className="extra-right">
                  <div className="extra-left-content" data-aos="zoom-in-left">
                    {advantagesDataLeft.map((advantage, index) => (
                      <div className="extra-icon-text text-right" key={index}>
                        <div className="features-icon gradient-bg text-center">
                          <i className={advantage.iconClass}></i>
                        </div>
                        <div className="features-text pt25">
                          <div className="features-text-title text-right pb10">
                            <h3>{advantage.title}</h3>
                          </div>
                          <div className="features-text-dec text-right">
                            <span>{advantage.description}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* extra-right */}
            </div>
            {/* row */}
          </div>
        </div>
      </section>

      {/* Parent Testimonial Section */}
      <ParentTestimonials />

      {/* Teachers Section */}
      <Teachers />

      {/* FAQ Section */}
      <FAQ />

      {/* Mission Statement */}
      <MissionStatement />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
