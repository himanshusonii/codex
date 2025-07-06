"use client";

import { useEffect } from "react";
import AOS from "aos";

const AOSInit: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration (ms)
      once: false, // only animate once on scroll
      offset: 0, // offset (px) from the original trigger point
    });
  }, []);

  return null;
};

export default AOSInit;
