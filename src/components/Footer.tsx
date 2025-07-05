"use client";

import { useState } from "react";
import axios from "@/lib/axios";
import Image from "next/image";

interface FormData {
  name: string;
  msg: string;
  operationType?: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", msg: "" });
  const [emailSubscription, setEmailSubscription] = useState("");
  const [emailSendMsg, setEmailSendMsg] = useState("");

  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState(false);
  const [subscriptionProcessing, setSubscriptionProcessing] = useState(false);

  const clearMessages = () => {
    setSubscriptionError(false);
    setSubscriptionSuccess(false);
  };

  const handleSubmit = async (operationType: "sendMsg" | "subscription") => {
    clearMessages();
    const isSendMsg = operationType === "sendMsg";

    if (
      (isSendMsg && (!formData.name || !emailSendMsg || !formData.msg)) ||
      (!isSendMsg && !emailSubscription)
    ) {
      setSubscriptionError(true);
      return;
    }

    setSubscriptionProcessing(true);

    const payload = {
      ...formData,
      email: isSendMsg ? emailSendMsg : emailSubscription,
      operationType,
    };

    try {
      await axios.post("/send-msg/create", payload);

      setSubscriptionSuccess(true);
      setFormData({ name: "", msg: "" });
      setEmailSendMsg("");
      setEmailSubscription("");
    } catch (error) {
      console.error("Submit error:", error);
      setSubscriptionError(true);
    } finally {
      setSubscriptionProcessing(false);
    }
  };

  return (
    <footer id="footer">
      <div
        id="contact_secound"
        className="contact_secound_section backgroud-style"
      >
        <div className="container">
          <div className="contact-secound-content">
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="contact-left-content">
                  <div className="section-title mb45 headline text-left">
                    <span className="subtitle text-uppercase">CONTACT US</span>
                    <h2>
                      <span>Get in Touch</span>
                    </h2>
                  </div>
                  <div className="contact-address">
                    <div className="contact-address-details">
                      <div className="address-icon relative-position text-center float-left">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="address-details ul-li-block">
                        <ul>
                          <li>136 Great Rd, Acton, MA-01719</li>
                        </ul>
                      </div>
                    </div>
                    <div className="contact-address-details">
                      <div className="address-icon relative-position text-center float-left">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="address-details ul-li-block">
                        <ul>
                          <li>(978) 274 7244</li>
                        </ul>
                      </div>
                    </div>
                    <div className="contact-address-details">
                      <div className="address-icon relative-position text-center float-left">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="address-details ul-li-block">
                        <ul>
                          <li>info@brainsandbrawns.com</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer_2 backgroud-style">
                  <div className="container">
                    <div className="back-top text-center mb45">
                      <a
                        className="scrollup"
                        href="#"
                        style={{ display: "inline-block" }}
                      >
                        <Image
                          src="/assets/img/banner/bt.png"
                          alt=""
                          width={65}
                          height={65}
                        />
                      </a>
                    </div>
                    <div
                      className="footer_2_logo text-center"
                      style={{ display: "inline-block" }}
                    >
                      <Image
                        src="/assets/img/logo/logo.png"
                        alt="Logo"
                        width={350}
                        height={150}
                      />
                    </div>

                    <div className="footer_2_subs text-center">
                      <p>
                        We take our mission of increasing global access to
                        quality education seriously.
                      </p>
                      <div className="subs-form relative-position">
                        <input
                          className="course"
                          type="email"
                          placeholder="Email Address *"
                          value={emailSubscription}
                          onChange={(e) => setEmailSubscription(e.target.value)}
                        />
                        <div className="nws-button text-center gradient-bg text-uppercase">
                          <button
                            type="button"
                            disabled={subscriptionProcessing}
                            onClick={() => handleSubmit("subscription")}
                          >
                            {subscriptionProcessing
                              ? "Please wait..."
                              : "Subscribe now"}
                          </button>
                        </div>
                        {subscriptionSuccess && (
                          <div className="mt-3 alert alert-success">
                            <strong>Success!</strong> Subscription completed.
                          </div>
                        )}
                        {subscriptionError && (
                          <div className="mt-3 alert alert-danger">
                            <strong>Error!</strong> Please fill all fields.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="copy-right-menu mt-5">
              <div className="row">
                <div className="col-md-5">
                  <div className="copy-right-text">
                    <p>All rights reserved</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-social text-center ul-li">
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
                <div className="col-md-4">
                  <div className="copy-right-menu-item float-right ul-li">
                    <ul>
                      <li>
                        <a href="/privacy-policy">Privacy & Policy</a>
                      </li>
                      <li>
                        <a href="/terms-conditions">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
