"use client";

import { useEffect } from "react";
import AOS from "aos";

const AOSInit: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // only animate once on scroll
      offset: 60, // offset (px) from the original trigger point
    });
  }, []);

  return null;
};

export default AOSInit;
