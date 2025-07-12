import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section
        id="breadcrumb"
        className="breadcrumb-section relative-position backgroud-style"
      >
        <div className="blakish-overlay"></div>
        <div className="container">
          <div className="page-breadcrumb-content text-center">
            <div className="page-breadcrumb-title">
              <h2 className="breadcrumb-head black bold">
                <span>Contact Us</span>
              </h2>
            </div>
            {/* <div className="page-breadcrumb-item ul-li">
              <ul className="breadcrumb text-uppercase black">
                <li className="breadcrumb-item">
                  <a href={`/`}>Program</a>
                </li>
                <li className="breadcrumb-item">
                  <a href={`/course/`}>Course list</a>
                </li>
                <li className="breadcrumb-item active">
                  <span>Course details</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
      <section className="contact-form-area_3 contact-page-version home-secound">
        <div className="container">
          <div className="section-title mb45 headline text-center">
            <span className="subtitle text-uppercase">Send us a message</span>
          </div>
          <div className="about-resigter-form backgroud-style relative-position">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
