"use client";

import { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface FormData {
  name: string;
  number: string;
  email: string;
  course: string;
  msg: string;
  operationType?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    number: "",
    email: "",
    course: "",
    msg: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [processing, setProcessing] = useState(false);

  const siteKey = "6LfEb3UbAAAAALDm4xKAJH55nA0fx7QxKqFFM2hW";
  const recaptchaRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.msg.trim() &&
      formData.course.trim()
    );
  };

  const submitForm = async () => {
    setError(false);
    setCaptchaError(false);
    setSuccess(false);

    const recaptchaResponse = window.grecaptcha?.getResponse();

    if (!recaptchaResponse) {
      setCaptchaError(true);
      return;
    }

    if (!validateFields()) {
      setError(true);
      return;
    }

    setProcessing(true);

    try {
      const payload = { ...formData, operationType: "sendMsg" };
      await axios.post(
        "https://o145r4of4g.execute-api.us-east-1.amazonaws.com/dev/send-msg/create",
        payload
      );

      setSuccess(true);
      setFormData({ name: "", number: "", email: "", course: "", msg: "" });
      window.grecaptcha.reset();
    } catch (err) {
      console.error("Submission error", err);
      setError(true);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <section id="about-us" className="about-us-section home-secound home-third">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="about-resigter-form backgroud-style relative-position">
              <div className="register-content">
                <div className="register-fomr-title text-center">
                  <h3 className="bold-font" style={{ color: "#000" }}>
                    <span>Have Questions?</span> Contact Us
                  </h3>
                </div>
                <div className="register-form-area">
                  <form
                    className="contact_form"
                    onSubmit={(e) => e.preventDefault()}>
                    <div className="contact-info">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact-info">
                      <input
                        name="number"
                        type="number"
                        placeholder="Your Number"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact-info">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact-info">
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}>
                        <option value="">Select Course *</option>
                        <option value="Coding">Coding</option>
                        <option value="Science">Science</option>
                        <option value="Competitive Math">
                          Competitive Math
                        </option>
                      </select>
                    </div>
                    <div className="contact-info">
                      <textarea
                        name="msg"
                        placeholder="Message *"
                        value={formData.msg}
                        onChange={handleChange}></textarea>
                    </div>

                    <div className="nws-button text-uppercase text-center white text-capitalize mt-2">
                      <div
                        className="g-recaptcha"
                        data-sitekey={siteKey}
                        ref={recaptchaRef}></div>

                      <button
                        type="button"
                        className="mt-2"
                        onClick={submitForm}
                        disabled={processing}>
                        {processing ? (
                          <>
                            Please wait..{" "}
                            <i className="fas fa-spinner fa-spin spinner"></i>
                          </>
                        ) : (
                          "SUBMIT REQUEST"
                        )}
                      </button>
                    </div>
                  </form>

                  {success && (
                    <div className="terms-text mt25">
                      <div className="mt-3 alert alert-success">
                        <strong>Great!</strong>
                        <div>Your message has been sent.</div>
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="terms-text mt25">
                      <div className="mt-3 alert alert-danger">
                        <strong>Error!</strong>
                        <div>
                          Make sure to complete all the required fields.
                        </div>
                      </div>
                    </div>
                  )}
                  {captchaError && (
                    <div className="terms-text">
                      <div className="alert alert-danger">
                        <strong>Error!</strong>
                        <div>Please complete the CAPTCHA.</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-mockup">
              <Image
                src="/assets/img/about/abt.jpg"
                alt="about"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="col-md-7">
            <div className="about-us-text">
              <div className="section-title relative-position mb20 headline text-left">
                <h2>
                  <span>Our Mission</span>
                </h2>
                <p>
                  At B&B, we empower young minds to master skills that shape
                  their future. Through innovative, hands-on learning, we make
                  complex subjects accessible and engaging. Our multi-year
                  curriculum ensures consistent growth, while expert instructors
                  provide personalized guidance every step of the way. Our
                  mission is to spark curiosity, build confidence, and equip
                  children for tomorrow’s challenges, all while making learning
                  an adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
