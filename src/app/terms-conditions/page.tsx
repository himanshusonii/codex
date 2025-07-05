export const dynamic = "force-static";
const TermsConditionsPage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <section
        id="breadcrumb"
        className="breadcrumb-section relative-position backgroud-style"
      >
        <div className="blakish-overlay"></div>
        <div className="container">
          <div className="page-breadcrumb-content text-center">
            <div className="page-breadcrumb-title">
              <h2 className="breadcrumb-head black bold">
                <span>Terms & Conditions</span>
              </h2>
            </div>
            <div className="page-breadcrumb-item ul-li">
              {/*
              <ul className="breadcrumb text-uppercase black">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Details</li>
              </ul>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section id="course-page" className="course-page-section">
        <div className="container">
          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to [Your Company Name]. We are committed to protecting
              your personal information and your right to privacy. This Privacy
              Policy explains how we collect, use, and share information about
              you when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> This includes your name,
                email address, phone number, and any other information you
                provide to us.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect information about how
                you interact with our website, such as IP address, browser type,
                and pages visited.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar technologies to enhance your experience and
                analyze usage patterns.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information for various purposes, including:</p>
            <ul>
              <li>Providing and maintaining our services.</li>
              <li>
                Improving our website and services based on your feedback.
              </li>
              <li>
                Communicating with you, including sending updates and
                promotional materials.
              </li>
              <li>Ensuring the security and integrity of our services.</li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party service providers who assist us in
                operating our website and services.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
            </ul>

            <h2>Your Choices and Rights</h2>
            <p>You have the following rights regarding your information:</p>
            <ul>
              <li>
                <strong>Access and Update:</strong> You can request access to
                and update your personal information.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt-out of receiving
                promotional communications from us.
              </li>
              <li>
                <strong>Delete:</strong> You can request that we delete your
                personal information, subject to legal and contractual
                obligations.
              </li>
            </ul>

            <h2>Security</h2>
            <p>
              We implement reasonable security measures to protect your
              information from unauthorized access, use, or disclosure. However,
              no method of transmission over the Internet or electronic storage
              is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date. We
              encourage you to review this Privacy Policy periodically to stay
              informed about how we are protecting your information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@example.com">support@example.com</a>
            </p>
            <p>
              <strong>Address:</strong> 123 Privacy Lane, Suite 100, Your City,
              Your State, 12345
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default TermsConditionsPage;
