import Head from "next/head";
import Image from "next/image";
import CodingCourseCategories from "@/app/courses/components/CodingCourseCategories";
import Footer from "@/components/Footer";

const Coding: React.FC = () => {
  return (
    <>
      <Head>
        <title>Brains & Brawns</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <div id="preloader"></div> */}
      {/*<!-- Start of slider section
    ============================================= -->*/}

      <section id="slide1" className="slider-section inner-page-slider">
        <div className="slider-item-details">
          <div className="slider-area codeing-bg slider-bg-1 relative-position shapedividers_com-9470">
            <div className="category-slide">
              <div className="slider-text">
                <div className="section-title mb20 headline text-center">
                  <div className="layer-1-3">
                    <h2>
                      <span>Learn, Build, Succeed </span>
                      <br /> with <span>Coding</span>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="slider-text">
                <div className="section-title mb20 headline text-center">
                  <div className="layer-1-3">
                    <h2>
                      <span>Prepare Your Child</span> <br /> for the{" "}
                      <span>Digital Future</span>
                    </h2>
                  </div>
                </div>
                <div className="layer-1-4 text-center"></div>
              </div>
              <div className="slider-text">
                <div className="section-title mb20 headline text-center">
                  <div className="layer-1-3">
                    <h2>
                      <span>Turn Ideas </span>Into <br />{" "}
                      <span>Digital Reality</span>
                    </h2>
                  </div>
                </div>
                <div className="layer-1-4 text-center"></div>
              </div>
              <div className="slider-text">
                <div className="section-title mb20 headline text-center">
                  <div className="layer-1-3">
                    <h2>
                      <span>Prepare Your Child</span>
                      <br /> for the <span>Digital Future</span>
                    </h2>
                  </div>
                </div>
                <div className="layer-1-4 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End of slider section
		============================================= -->*/}
      <CodingCourseCategories />

      <section
        id="why-choose"
        className="why-choose-section coding-why backgroud-style shapedividers_com-3237 jarallax">
        <div className="container">
          <div
            className="section-title mb-5 headline text-center text-dark"
            data-aos="zoom-in">
            <span className="subtitle text-uppercase text-dark">
              Brains and Brawns ADVANTAGES
            </span>
            <h2>
              {" "}
              <span className="text-dark">
                {" "}
                Why Choose Brains and Brawns for Coding?
              </span>
            </h2>
          </div>
          <div className="extra-features-content">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="extra-left">
                  <div className="extra-left-content " data-aos="zoom-in-right">
                    <div className="extra-icon-text text-left">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                      </div>
                      <div className="features-text">
                        <div className="features-text-title">
                          <h3>Expert Guidance</h3>
                        </div>
                        <div className="features-text-dec">
                          <span>
                            Learn from seasoned coding professionals with
                            real-world experience.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- // extra-left-content -->*/}

                  <div className="extra-left-content " data-aos="zoom-in-right">
                    <div className="extra-icon-text">
                      <div className="features-icon gradient-bg text-center">
                        <i className=" flaticon-clipboard-with-pencil"></i>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title">
                          <h3>Engaging Curriculum</h3>
                        </div>
                        <div className="features-text-dec">
                          <span>
                            Explore coding through fun hands-on projects and
                            real-world applications
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- /extra-left -->*/}
              </div>
              {/*<!-- /col-sm-3 -->*/}

              <div className="col-sm-4">
                <div
                  className="extra-pic text-center"
                  data-aos="fade-up"
                  data-aos-duration="3000">
                  <Image
                    src="/assets/img/coding/Coding - Brains and Brawns ADVANTAGES.png"
                    alt="img"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
              {/*<!-- /col-sm-6 -->*/}

              <div className="col-md-4 col-sm-6">
                <div className="extra-right">
                  <div className="extra-left-content" data-aos="zoom-in-left">
                    <div className="extra-icon-text text-right">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-ruler-and-pencil"></i>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title text-right pb10">
                          <h3>Personalized Attention</h3>
                        </div>
                        <div className="features-text-dec text-right">
                          <span>
                            Receive tailored support to master coding at your
                            own pace
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- // extra-left-content -->*/}

                  <div className="extra-left-content" data-aos="zoom-in-left">
                    <div className="extra-icon-text text-right">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-clipboards"></i>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title text-right pb10">
                          <h3>Build Real-World Skills</h3>
                        </div>
                        <div className="features-text-dec text-right">
                          <span>
                            Develop valuable coding skills for the digital age
                            and future careers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- /extra-left -->*/}
              </div>
              {/*<!-- /col-sm-3 -->*/}
            </div>
            {/*<!-- /row -->*/}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};
export default Coding;
